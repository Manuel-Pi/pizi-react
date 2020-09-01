import React from 'react';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
import './table.less';
export interface TableOrder {
    direction?: 'up' | 'down';
    header?: any;
}
export interface TableProps extends ComponentProps {
    header: string[];
    data: any[][];
    defaultOrder?: TableOrder;
    onSelected?: (selection?: string[]) => void;
    sort?: {
        [key: string]: (a: any, b: any) => number;
    };
    staticHeader?: boolean;
    sortIcon?: "default" | "small";
    dataRenderer?: (data: any) => any;
    evenColor?: boolean;
    overColor?: boolean;
}
/**
 * Primary UI component for user interaction
 */
export declare const Table: React.FC<TableProps>;
