import React from 'react';
import './menuapp.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
import { MenuBarProps } from './MenuBar';
import { RouteObject } from 'react-router-dom';
import { StaticHandlerContext } from 'react-router-dom/server';
import { IconName } from '@fortawesome/fontawesome-svg-core';
export interface MenuAppProps extends ComponentProps, Omit<MenuBarProps, "routes"> {
    routes: PiziRoute[];
    context?: StaticHandlerContext;
}
export type PiziRoute = Omit<RouteObject, 'children'> & {
    icon?: IconName;
    title?: string;
    noMenu?: boolean;
    hideInMenu?: boolean;
    children?: PiziRoute[];
};
export declare function getMenuAppProps(props: MenuAppProps): MenuAppProps;
export declare function getMenuAppPropsFromServer(props: MenuAppProps, req: Request): Promise<MenuAppProps>;
export declare const MenuAppLayout: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>>;
/**
 * MenuBar UI component
 */
export declare const MenuApp: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>>;
