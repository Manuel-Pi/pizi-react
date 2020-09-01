import React, { Children, ReactElement, cloneElement } from 'react'
import './menuapp.less'
import { ComponentProps, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import { MenuBar, MenuBarProps } from './MenuBar'
import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { AppScreenProps } from './AppScreen'
import { ErrorScreen } from './ErrorScreen'

export interface MenuAppProps extends ComponentProps, Omit<MenuBarProps, "routes">{}

export type PiziRoute = RouteObject & {
	hideInMenu?: boolean
	icon: IconName,
	title: string,
	noMenu: boolean
}

function createRoutesFromChildren(children: React.ReactNode, parent?: ReactElement): [PiziRoute[], ReactElement[]]{
	const routes: PiziRoute[] = []
	const extraElements: ReactElement[] = []
	React.Children.forEach(children, child => {
		if(!React.isValidElement(child)) throw new Error("Cannot allow non valid react element children inside menubar!")
		if(child.props.path){
			const screenProps = child.props as AppScreenProps
			const [subRoutes] = createRoutesFromChildren(child.props.children, child)
			const element = subRoutes.length ? cloneElement(child, child.props, <Outlet/>) : child
			routes.push({
				path: (parent?.props.path || "") + screenProps.path,
				icon: screenProps.icon,
				title: screenProps.title,
		  		element,
				hideInMenu: screenProps.hideInMenu,
				noMenu: !!screenProps.noMenu,
				children: subRoutes
			})
		} else {
			extraElements.push(child)
		}
	})
	return [routes, extraElements]
}

/**
 * MenuBar UI component
 */
export const MenuApp: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>> =  React.memo((props) => {
	props = InitProps(props)
	const [routes, extraElements] = createRoutesFromChildren(props.children)

	const Layout: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>> = (p) => <>
		<MenuBar routes={routes} {...props}>
			{extraElements}
		</MenuBar>
		<div className="pizi-menu-app-container">
			{Children.map(p.children, child => child)}
		</div>
	</>

	const noMenuRoutes = []
	const menuRoutes = []
	for(const route of routes) route.noMenu ? noMenuRoutes.push(route) : menuRoutes.push(route)

	const router = createBrowserRouter([{
		errorElement: <ErrorScreen/>,
		children: [{
			element: <Layout><Outlet/></Layout>,
			children: menuRoutes
		},
		{
			children: noMenuRoutes
		}]
	}])

	return 	<div className={"pizi-menu-app"}>
				<RouterProvider router={router}/>
	        </div>
})