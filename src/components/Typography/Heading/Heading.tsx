import React from 'react'
import { ComponentProps, GetComponentClassNames } from '../../../utils/PiziComponent/PiziComponent'
import './heading.less'

export interface HeadingProps extends Omit<ComponentProps, 'size'>{
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading: React.FC<HeadingProps> = ({
    tag,
    appearance = 'simple',
	...props
}) => {
	//props = InitProps(props)
    const Tag = tag
	return  <Tag className={GetComponentClassNames('pizi-heading', {appearance, ...props})}> 
		        {props.children}
	        </Tag>
}
