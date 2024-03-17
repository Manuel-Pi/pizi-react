import React from 'react'
import { CleanProps, type ComponentProps } from '../../../utils/PiziComponent/PiziComponent'
import './link.less'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router'
import { getClassName } from 'pizi-utils/dom'

export interface LinkProps extends ComponentProps<HTMLAnchorElement>, Omit<RouterLinkProps, 'color'>{
}

export const Link: React.FC<LinkProps> = (props) => {
	return  <RouterLink {...CleanProps(props)} className={getClassName('pizi-link')}> 
		        {props.children}
	        </RouterLink>
}
