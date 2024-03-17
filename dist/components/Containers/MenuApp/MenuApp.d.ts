import React from 'react';
import './menuapp.less';
import { MenuBarProps } from './MenuBar';
import { RouteObject } from 'react-router-dom';
import { StaticHandlerContext } from 'react-router-dom/server.js';
import { IconName } from '@fortawesome/fontawesome-svg-core';
export interface MenuAppProps extends Omit<MenuBarProps, "routes"> {
    routes: PiziRoute[];
    context?: StaticHandlerContext;
    user?: any;
    loginUrl?: string;
}
export type PiziRoute = Omit<RouteObject, 'children'> & {
    icon?: IconName;
    title?: string;
    noMenu?: boolean;
    hideInMenu?: boolean;
    authenticate?: boolean;
    children?: PiziRoute[];
};
export declare function getMenuAppProps(props: MenuAppProps): MenuAppProps;
export declare function getMenuAppPropsFromServer(props: MenuAppProps, req: Request): Promise<MenuAppProps>;
export declare const MenuAppLayout: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>>;
interface IProtectedRoute extends React.PropsWithChildren {
    user?: any;
    loginUrl?: string;
}
export declare const ProtectedRoute: React.FC<IProtectedRoute>;
/**
 * MenuBar UI component
 */
export declare const MenuApp: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>>;
export {};
