import React from 'react';
import './accordion.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
/**
 * Accordion Item
 */
export interface AccordionItemProps extends ComponentProps<HTMLDivElement> {
    title: string;
    default?: boolean;
}
export declare const AccordionItem: React.FC<AccordionItemProps>;
/**
 * Accordion
 */
export interface AccordionProps extends ComponentProps<HTMLDivElement> {
    singleExpension?: boolean;
    statusIcon?: boolean;
}
export declare const Accordion: React.FC<AccordionProps>;
