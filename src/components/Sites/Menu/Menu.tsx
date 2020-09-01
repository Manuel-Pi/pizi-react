import React from 'react';
import './menu.less'
import { ComponentProps, GetComponentClassNames, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import { ClassNameHelper } from '../../../utils/Utils'
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface MenuProps extends ComponentProps{
	title: string
	icon: React.ReactElement
	links: {title: string, link: string, icon: IconName}[]
}

/**
 * Menu UI component
 */
export const Menu: React.FC<MenuProps & React.HTMLAttributes<HTMLDivElement>> = ({
	links = [],
	icon,
	title,
	...props
}) => {
	props = InitProps(props)
	return 	<header className={ClassNameHelper(GetComponentClassNames("pizi-menu", {...props, appearance: undefined}))}>
				<div className="icon">{icon}</div>
				<div className="title">{title}</div>
				<ul className="menu">
					{ links.map( link => <li><FontAwesomeIcon icon={link.icon}/>{link.title}</li>)}
				</ul>
	        </header>
}