import React from 'react'
import { CleanProps, ComponentProps, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import './link.less'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import { ClassNameHelper } from '../../../utils/Utils'

export interface LinkProps extends ComponentProps<HTMLAnchorElement>, Omit<RouterLinkProps, 'color'>{
}

export const Link: React.FC<LinkProps> = (props) => {
	return  <RouterLink {...CleanProps(props)} className={ClassNameHelper('pizi-link')}> 
		        {props.children}
	        </RouterLink>
}
