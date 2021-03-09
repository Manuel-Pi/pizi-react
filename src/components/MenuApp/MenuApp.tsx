import React, { ReactElement, useState } from 'react';
import './menuapp.less';
import { ComponentProps, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Button } from '../Button/Button';
import { Link, RouteComponentProps, Router } from '@reach/router';
import { MenuBar } from './MenuBar';

export interface MenuAppProps extends ComponentProps{
}

/**
 * MenuBar UI component
 */
export const MenuApp: React.FC<MenuAppProps & React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {

	const screens = React.Children && React.Children.map(props.children, (child, index) => {
		if(!React.isValidElement(child)) throw new Error("Cannot allow non valid react element children inside menubar!")
		return React.cloneElement(child)
	})

	return 	<div className={CreateClassName("pizi-menu-app")}>
				<MenuBar screens={screens} {...props}/>
				<Router primary={false} className="pizi-menu-app-container">
					{screens}
				</Router>
	        </div>
};