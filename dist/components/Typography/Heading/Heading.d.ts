import React from 'react';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
import './heading.less';
export interface HeadingProps extends Omit<ComponentProps, 'size'> {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare const Heading: React.FC<HeadingProps>;
