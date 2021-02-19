import React, { ReactElement, useEffect, useState, useCallback} from 'react';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { Button } from '../Button/Button';
import { Pagination } from '../Pagination/Pagination';
import { ComponentProps, GetComponentClassNames, defaultProps } from '../PiziComponent/PiziComponent';
import './table.less';

export interface TableOrder {
    direction: 'up' | 'down'
    header: any
}

export interface TableProps extends Omit<ComponentProps, 'size'>{
    header: string[]
    data: string[][]
    defaultOrder?: TableOrder
}

/**
 * Primary UI component for user interaction
 */
export const Table: React.FC<TableProps> = ({
    header,
    data,
    defaultOrder,
	...props
}) => {
    const orderedData = [...data];
    const [order, setOrder] = useState(defaultOrder || {direction: null, header: null} as TableOrder);
    const [currentData, setData] = useState(orderedData);
    const [pagination, setPagination] = useState(null);
   
    const orderTable = useCallback((order: TableOrder) => {
        if(order.direction) orderedData.sort((a, b) => {
            const itemA = a[header.indexOf(order.header)];
            const itemB = b[header.indexOf(order.header)];
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
    }, [data, props.theme, props.appearance]);

	return  <div className={CreateClassName(GetComponentClassNames('pizi-table', props))}>
                <table> 
                    <thead>
                        <tr>
                            {
                                header.map((item) =>  <th key={item}>
                                                        <Button className={CreateClassName("head-cell", {
                                                                                "order": order.direction && order.header === item
                                                                            })} 
                                                        {...props}
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
                                currentData.map(line => <tr>
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
