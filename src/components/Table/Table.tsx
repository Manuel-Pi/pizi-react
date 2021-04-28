import React, { ReactElement, useEffect, useState, useCallback} from 'react';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { Button } from '../Button/Button';
import { Pagination } from '../Pagination/Pagination';
import { ComponentProps, GetComponentClassNames, defaultProps, GetAltColor } from '../PiziComponent/PiziComponent';
import './table.less';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faSortAmountDownAlt} from '@fortawesome/free-solid-svg-icons/faSortAmountDownAlt';
import {faSortAmountUp} from '@fortawesome/free-solid-svg-icons/faSortAmountUp';
library.add(faSortAmountDownAlt, faSortAmountUp);

export interface TableOrder {
    direction: 'up' | 'down'
    header: any
}

export interface TableProps extends Omit<ComponentProps, 'size'>{
    header: string[]
    data: string[][]
    defaultOrder?: TableOrder
    selectable?: boolean
    onSelected?: (selection: string[]) => void
}

/**
 * Primary UI component for user interaction
 */
export const Table: React.FC<TableProps> = ({
    header,
    data,
    defaultOrder =  {direction: null, header: null},
    selectable = true,
    onSelected = () => {},
	...other
}) => {
    const props = {...defaultProps, ...other};
    const orderedData = [...data];
    const [order, setOrder] = useState(defaultOrder);
    const [currentData, setData] = useState(orderedData);
    const [pagination, setPagination] = useState(null);
    const [selected, setSelected] = useState(null);
   
    const orderTable = useCallback((order: TableOrder) => {
        if(order.direction) orderedData.sort((a, b) => {
            const itemA = a[header.indexOf(order.header)].trim().toLowerCase();
            const itemB = b[header.indexOf(order.header)].trim().toLowerCase();
            return itemA > itemB ? 1 : itemA < itemB ? -1 : 0
        })
        if(order.direction === "up") orderedData.reverse();

        setOrder(order);

        if(!pagination){
            setData(orderedData)
        } else {
            setPagination(React.cloneElement(pagination, {
                data: orderedData,
                onChange: setData,
                ...props
            }))
        }

    }, [order, pagination, orderedData])

    const clickHandler = selectable ? (line: string[]) => {
        const selection = line.toString() !== selected ? line : null
        setSelected(selection && selection.toString())
        onSelected(selection)
    } : undefined

    useEffect(() => {
        orderTable(order)
        setPagination((() => {
            let paginationEl: ReactElement;
            // Check Children (Pagination)
            React.Children && React.Children.forEach(props.children, child => {
                if(!React.isValidElement(child)) throw new Error("Cannot allow non valid react element children inside table!")
                if(child.type !== Pagination) throw new Error("Cannot allow children of type " + child.type + " inside table!")

                paginationEl = React.cloneElement(child, {
                    data: orderedData,
                    onChange: setData,
                    ...props
                })
            }) 
            return paginationEl;
        })())
    }, []);

    useEffect(() => {
        orderTable(order)
    }, [data, props.color, props.appearance]);

	return  <div className={CreateClassName(GetComponentClassNames('pizi-table', props))}>
                <table> 
                    <thead>
                        <tr>
                            {
                                header.map((item) =>  <th className={props.appearance === "border" && "border"} key={item} color={props.color}>
                                                        <Button {...props}
                                                        className={CreateClassName("head-cell no-active", {
                                                                                order: order.direction && order.header === item
                                                                            })} 
                                                        color={props.appearance === "fill" && GetAltColor(props.color) || props.color}
                                                        onClick={() => orderTable((order && order.direction === "down" && order.header === item) ? {direction: "up", header: item} : {direction: "down", header: item})}
                                                        appearance="simple"
                                                        iconRight={order.direction === "down" ? "sort-amount-down-alt" : "sort-amount-up"}>
                                                            {item}
                                                        </Button>
                                                    </th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                            {
                                currentData.map(line => <tr onClick={selectable ? (e) => clickHandler(line) : undefined}
                                                            className={CreateClassName("", {
                                                                selected: selected === line.toString()
                                                            })}>
                                                        {
                                                            line.map(data => <td>{data}</td>)
                                                        }
                                                        </tr>)
                            }
                    </tbody>
                </table>
                {pagination}
            </div>
};
