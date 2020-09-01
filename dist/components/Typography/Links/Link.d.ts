import React from 'react';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
import './link.less';
import { LinkProps as RouterLinkProps } from 'react-router-dom';
export interface LinkProps extends ComponentProps<HTMLAnchorElement>, Omit<RouterLinkProps, 'color'> {
}
export declare const Link: React.FC<LinkProps>;
