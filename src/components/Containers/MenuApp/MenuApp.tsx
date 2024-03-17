import React from 'react'
import './menuapp.less'
import { InitProps } from '../../../utils/PiziComponent/PiziComponent'
import { MenuBar, type MenuBarProps } from './MenuBar'
import { Outlet, type RouteObject, createBrowserRouter, type StaticHandlerContext, createStaticHandler, StaticRouterProvider, createStaticRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import type { IconName } from '@fortawesome/fontawesome-svg-core'
import { ErrorScreen } from './ErrorScreen'
import { isBrowser } from 'pizi-utils/dom'

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
export const MenuApp: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>> = React.memo(({routes, user}) => {

	
	return 	<div className="pizi-menu-app">
				<MenuAppLayout routes={routes} user={user}/>
	        </div>
})