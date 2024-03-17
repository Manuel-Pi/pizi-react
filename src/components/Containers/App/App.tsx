import { Component } from 'react'
import './app.less'
import { MenuAppProps, PiziRoute, getMenuAppPropsFromServer } from '../MenuApp/MenuApp'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { isBrowser } from '../../../utils/Utils'

export interface IAppProps {
	routes?: any // for SSR
    context?: MenuAppProps["context"] // for SSR
	serverState?: any // for SSR
}

export class PiziApp<P extends IAppProps, S> extends Component<P, S> {
	static headerStyles = isBrowser() ? [] : [dom.css()] 

	static defaultMenuProps = {}

	static getRoutes(data: any): PiziRoute[]{
		throw new Error('not implemented!')
	}

	static async getAppPropsFromServer(req: Request, options: any = {}): Promise<IAppProps>{
		return {
			...await getMenuAppPropsFromServer({
				...this.defaultMenuProps,
				user: options.serverState?.user?.username,
				routes: this.getRoutes(options.serverState),
			}, req),
			serverState: options.serverState
		}
	}

	static getExtraHead(){
		return this.headerStyles.map(styles => `<style type="text/css">${styles}</style>`)
	}
}
