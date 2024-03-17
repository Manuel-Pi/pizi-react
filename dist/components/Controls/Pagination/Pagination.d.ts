import React from 'react';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
import './pagination.less';
export interface PaginationProps extends Omit<ComponentProps<HTMLDivElement>, "onChange"> {
    data?: {
        [key: string]: any;
    }[];
    itemPerPage?: number;
    defaultPage?: number;
    onChange?: (data: {
        [key: string]: any;
    }[]) => void;
}
export declare const Pagination: React.FC<PaginationProps>;
