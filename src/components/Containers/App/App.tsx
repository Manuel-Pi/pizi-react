import { Component, ReactNode } from 'react'
import './app.less'
import { MenuAppProps, PiziRoute, getMenuAppPropsFromServer } from '../MenuApp/MenuApp'
import { dom } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { isBrowser, isSSR } from '../../../utils/Utils'

export interface IAppProps<ServerState = any, ServerAPI = any> {
	routes?: any // for SSR
    context?: MenuAppProps["context"] // for SSR routing
	serverState?: ServerState // for SSR
	api?: ServerAPI
}

export class PiziApp<P extends IAppProps<S, ServerApi>, S, ServerApi> extends Component<P, S> {
	public static headerStyles = [dom.css()]

	public static defaultMenuProps = {}

	constructor(props: P){
		super(props)
		this.state = props.serverState || {} as S
	}

	public static getRoutes(data: any): PiziRoute[]{
		throw new Error('getRoutes() not implemented!')
	}

	public static async getAppPropsFromServer(req: Request, options: any = {}): Promise<IAppProps<any>>{
		return {
			...await getMenuAppPropsFromServer({
				...this.defaultMenuProps,
				user: options.serverState?.user?.username,
				routes: this.getRoutes(options.serverState),
			}, req),
			serverState: options.serverState
		}
	}

	renderFullPage(App: ReactNode): ReactNode{
		return  <html>
                    <head>
						{this.renderHead()}
                        {(this.constructor as any).headerStyles.map((styles: string, index: number) => <style key={index} suppressHydrationWarning type="text/css">{styles}</style>)}
                        <script dangerouslySetInnerHTML={{__html: `
                            var SSR = true;
                            var ServerState = "${isBrowser() ? btoa(JSON.stringify(this.props.serverState || {})) : Buffer.from(JSON.stringify(this.props.serverState || {}), 'utf8').toString('base64')}";
                        `}}/>
                    </head>
                    <body>
                    {App}
                    </body>
                </html>
	}

	renderHead(): ReactNode{
		return <>
			<meta charSet="UTF-8"/>
			<meta name="viewport" content="width=device-width"/>
			<meta name="apple-mobile-web-app-capable" content="yes"/>
		</>
	}

	renderApp(): ReactNode{
		throw new Error('renderApp not implemented')
	}

	render(){
        return (isSSR() || !isBrowser()) ? this.renderFullPage(this.renderApp()) : this.renderApp()
    }
}
