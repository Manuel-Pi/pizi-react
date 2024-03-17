import React from 'react'
import './menuapp.less'
import { InitProps } from '../../../utils/PiziComponent/PiziComponent'
import { MenuBar, MenuBarProps } from './MenuBar'
import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createStaticHandler, createStaticRouter, StaticHandlerContext, StaticRouterProvider } from 'react-router-dom/server.js'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { ErrorScreen } from './ErrorScreen'
import { isBrowser } from '../../../utils/Utils'

export interface MenuAppProps extends Omit<MenuBarProps, "routes">{
	routes: PiziRoute[]
	context?: StaticHandlerContext 
	user?: any
	loginUrl?: string
}

export type PiziRoute = Omit<RouteObject, 'children'> & {
	icon?: IconName,
	title?: string,
	noMenu?: boolean
	hideInMenu?: boolean
	authenticate?: boolean
	children?: PiziRoute[]
}

export function getMenuAppProps(props: MenuAppProps){
	const noMenuRoutes = []
	const menuRoutes = []
	props = InitProps(props)
	for(const route of props.routes){
		if(route.authenticate && route.element) route.element = <ProtectedRoute loginUrl={props.loginUrl} user={props.user}>{route.element}</ProtectedRoute>
		route.noMenu ? noMenuRoutes.push(route) : menuRoutes.push(route)
	}
	props.routes = [{
		errorElement: <ErrorScreen/>,
		children: [{
			element: <MenuAppLayout {...props}/>,
			children: menuRoutes
		},
		{
			children: noMenuRoutes
		}]
	}]
	return props
}

export async function getMenuAppPropsFromServer(props: MenuAppProps, req: Request){
	props = getMenuAppProps(props)
	const handler = createStaticHandler(props.routes as RouteObject[])
	props.context = await handler.query(req) as StaticHandlerContext
	return props
}

export const MenuAppLayout: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>> = (menuBarProps) => <>
	<MenuBar {...menuBarProps}/>
	<div className="pizi-menu-app-container">
		<Outlet/>
	</div>
</>

interface IProtectedRoute extends React.PropsWithChildren {
	user?: any
	loginUrl?: string
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({user, children, loginUrl = "/login"}) => <>
	{ user ? children : location.href = loginUrl}
</>

/**
 * MenuBar UI component
 */
export const MenuApp: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>> = React.memo((props) => {
	const browserRouterOptions: Parameters<typeof createBrowserRouter>[1] = {}
	if(props.context){
		browserRouterOptions.hydrationData = {
			loaderData: props.context.loaderData,
			actionData: props.context.actionData,
			errors: 	props.context.errors
		}
	} else {
		props = getMenuAppProps(props)
	}
	
	return 	<div className="pizi-menu-app">
				{ 
					isBrowser() ? 
					<RouterProvider router={createBrowserRouter(props.routes as RouteObject[], browserRouterOptions)}/>
					: 
					<StaticRouterProvider router={createStaticRouter(props.routes as RouteObject[], props.context!)} context={props.context!} hydrate={false}/>
				}
	        </div>
})