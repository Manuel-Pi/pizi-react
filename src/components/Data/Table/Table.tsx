import React, { ReactElement, useEffect, useState, useCallback } from 'react'
import { ClassNameHelper } from '../../../utils/Utils'
import { Button } from '../../Controls/Button/Button'
import { Pagination, PaginationProps } from '../../Controls/Pagination/Pagination'
import { ComponentProps, GetComponentClassNames, InitProps, GetAltColor, CleanProps, GetAltColorFromTest, GetProps } from '../../../utils/PiziComponent/PiziComponent'
import './table.less';
import {faSortAmountDownAlt} from '@fortawesome/free-solid-svg-icons/faSortAmountDownAlt'
import {faSortAmountUp} from '@fortawesome/free-solid-svg-icons/faSortAmountUp'
import { registerIcons } from "../../../utils/Utils"
registerIcons(faSortAmountDownAlt,faSortAmountUp)

export interface TableOrder {
    direction?: 'up' | 'down'
    header?: any
}

export interface TableProps extends ComponentProps{
    header: string[]
    data: any[][]
    defaultOrder?: TableOrder
    onSelected?: (selection?: string[]) => void
    sort?: {[key:string]: (a: any, b:any) => number}
    staticHeader?: boolean
    sortIcon?: "default" | "small" 
    dataRenderer?: (data: any) => any
    evenColor?: boolean
    overColor?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Table: React.FC<TableProps> = React.memo(({
    header,
    data,
    defaultOrder = {},
    onSelected = () => {},
    sort = {},
    staticHeader = false,
    sortIcon = "default",
    dataRenderer,
    evenColor = true,
    overColor = true,
	...props
}) => {
    props = InitProps(props)
    const orderedData = [...data]
    const [order, setOrder] = useState(defaultOrder as TableOrder)
    const [currentData, setData] = useState(orderedData)
    const [pagination, setPagination] = useState< React.ReactElement<PaginationProps>>()
    const [selected, setSelected] = useState<string>()

    orderedData.forEach((data: any, index) => data.key = index)
   
    const orderTable = useCallback((order: TableOrder) => {
        if(order.direction) orderedData.sort((a, b) => {
            let itemA = a[header.indexOf(order.header)]
            let itemB = b[header.indexOf(order.header)]

            if(sort[order.header]) return sort[order.header](itemA, itemB)

            if(typeof itemA === 'string') itemA = itemA.trim().toLowerCase()
            if(typeof itemB === 'string') itemB = itemB.trim().toLowerCase()
            return itemA > itemB ? 1 : itemA < itemB ? -1 : 0
        })
        if(order.direction === "up") orderedData.reverse()

        if(!pagination){
            setData(orderedData)
        } else {
            setPagination(React.cloneElement(pagination as React.ReactElement<any>, {
                data: orderedData,
                onChange: setData,
                ...GetProps(props)
            }))
        }

    }, [order, pagination, orderedData])

    const orderIcon = () => {
        switch(sortIcon){
            case "small":
                return order.direction === "down" ? "long-arrow-alt-down" : "long-arrow-alt-up"
            case "default":
            default:
                return order.direction === "down" ? "sort-amount-down-alt" : "sort-amount-up"
        }
    }

    const clickHandler = onSelected ? (line: string[]) => {
        const selection = line.toString() !== selected ? line : undefined
        setSelected(selection && selection.toString())
        onSelected(selection)
    } : (() => {})

    useEffect(() => {
        orderTable(order)
        setPagination((() => {
            let paginationEl: ReactElement<PaginationProps> | undefined
            // Check Children (Pagination)
            React.Children.forEach(props.children, child => {
                if(!React.isValidElement(child)) throw new Error("Cannot allow non valid react element children inside table!")
                if(child.type !== Pagination) throw new Error("Cannot allow children of type " + child.type + " inside table!")

                paginationEl = React.cloneElement(child as React.ReactElement<any>, {
                    data: orderedData,
                    onChange: setData,
                    ...GetProps(props)
                })
            }) 
            return paginationEl
        })())
    }, [])
    
    useEffect(() => {}, [props.color, props.appearance])
    useEffect(() => {
       orderTable(order)
    }, [data, order])
    useEffect(() => {
        if((defaultOrder.header === null && defaultOrder.direction === null) 
        || (order.header === defaultOrder.header && order.direction === defaultOrder.direction)) return
        setOrder(defaultOrder as TableOrder)
    }, [defaultOrder])

	return  <div className={ClassNameHelper(GetComponentClassNames('pizi-table', props), {"no-even-color": !evenColor})} {...CleanProps(props)}>
                <div className={ClassNameHelper("pizi-table-container", {"static-header": staticHeader})}>
                    <table> 
                        <thead>
                            <tr>
                                {
                                    header.map((item) => <th className={ClassNameHelper("pizi-head border", GetAltColorFromTest(props.appearance !== "fill", props.color))} key={item}>
                                                            <Button {...props}
                                                            className={ClassNameHelper("head-cell no-active", {
                                                                                    order: order.direction && order.header === item,
                                                                                    "small-sort": sortIcon === "small"
                                                                                })} 
                                                            color={props.appearance === "fill" && GetAltColor(props.color) || props.color}
                                                            onClick={() => setOrder((order && order.direction === "down" && order.header === item) ? {direction: "up", header: item} : {direction: "down", header: item})}
                                                            appearance="simple"
                                                            iconRight={orderIcon()}>
                                                                {item}
                                                            </Button>
                                                        </th>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    currentData.map((line) => <tr onClick={(e) => clickHandler(line)}
                                                                key={(line as any).key || line[0]?.toString()}
                                                                className={ClassNameHelper("", {
                                                                    "selected fill alt": selected === line.toString() && overColor
                                                                })}>
                                                            {
                                                                line.map((data, index) => <td key={index}>{dataRenderer ? dataRenderer(data) : data}</td>)
                                                            }
                                                            </tr>)
                                }
                        </tbody>
                    </table>
                </div>
                {pagination}
            </div>
})
