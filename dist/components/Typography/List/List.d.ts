import React from 'react';
import './list.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
export interface ListProps extends ComponentProps {
    type?: 'ul' | 'ol';
    styleType?: 'dot' | 'circle' | 'donut' | 'circle-dot' | 'square' | 'empty-square' | 'arrow' | 'chevron' | 'caret';
    items: string[] | React.JSX.Element[];
}
/**
 * List UI component
 */
export declare const List: React.FC<ListProps & React.HTMLAttributes<HTMLUListElement>>;
