import { Component } from 'react';
import './app.less';
import { MenuAppProps, PiziRoute } from '../MenuApp/MenuApp';
export interface IAppProps {
    routes?: any;
    context?: MenuAppProps["context"];
    serverState?: any;
}
export declare class PiziApp<P extends IAppProps, S> extends Component<P, S> {
    static headerStyles: string[];
    static defaultMenuProps: {};
    static getRoutes(data: any): PiziRoute[];
    static getAppPropsFromServer(req: Request, options?: any): Promise<IAppProps>;
    static getExtraHead(): string[];
}
