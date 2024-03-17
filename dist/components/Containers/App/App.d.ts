import { Component, ReactNode } from 'react';
import './app.less';
import { MenuAppProps, PiziRoute } from '../MenuApp/MenuApp';
export interface IAppProps<ServerState = any, ServerAPI = any> {
    routes?: any;
    context?: MenuAppProps["context"];
    serverState?: ServerState;
    api?: ServerAPI;
}
export declare class PiziApp<P extends IAppProps<S, ServerApi>, S, ServerApi> extends Component<P, S> {
    static headerStyles: string[];
    static defaultMenuProps: {};
    constructor(props: P);
    static getRoutes(data: any): PiziRoute[];
    static getAppPropsFromServer(req: Request, options?: any): Promise<IAppProps<any>>;
    renderFullPage(App: ReactNode): ReactNode;
    renderHead(): ReactNode;
    renderApp(): ReactNode;
    render(): ReactNode;
}
