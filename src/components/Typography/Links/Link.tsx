import React from 'react'
import { CleanProps, ComponentProps, GetComponentClassNames, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import './link.less'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

export interface LinkProps extends ComponentProps<HTMLAnchorElement>, Omit<RouterLinkProps, 'color'>{
}

export const Link: React.FC<LinkProps> = (props) => {
	props = InitProps({ color: "white", appearance: "simple", ...props})
	return  <RouterLink {...CleanProps(props)} className={GetComponentClassNames('pizi-link', props)}> 
		        {props.children}
	        </RouterLink>
}
