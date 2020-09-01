import React from 'react';
import './menuapp.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
import { MenuBarProps } from './MenuBar';
import { RouteObject } from 'react-router-dom';
import { IconName } from '@fortawesome/fontawesome-svg-core';
export interface MenuAppProps extends ComponentProps, Omit<MenuBarProps, "routes"> {
}
export type PiziRoute = RouteObject & {
    hideInMenu?: boolean;
    icon: IconName;
    title: string;
    noMenu: boolean;
};
/**
 * MenuBar UI component
 */
export declare const MenuApp: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>>;
