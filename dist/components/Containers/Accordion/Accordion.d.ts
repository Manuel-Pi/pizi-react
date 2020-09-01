import React from 'react';
import './accordion.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
/**
 * Accordion Item
 */
export interface AccordionItemProps extends ComponentProps {
    title: string;
    default?: boolean;
}
export declare const AccordionItem: React.FC<AccordionItemProps & React.HTMLAttributes<HTMLDivElement>>;
/**
 * Accordion
 */
export interface AccordionProps extends ComponentProps {
    singleExpension?: boolean;
    statusIcon?: boolean;
}
export declare const Accordion: React.FC<AccordionProps & React.HTMLAttributes<HTMLDivElement>>;
