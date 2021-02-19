import React from 'react';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { ComponentProps, GetComponentClassNames, defaultProps } from '../PiziComponent/PiziComponent';
import './heading.less';

export interface HeadingProps extends Omit<ComponentProps, 'size'>{
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * Primary UI component for user interaction
 */
export const Heading: React.FC<HeadingProps> = ({
    tag,
    appearance = 'simple',
	...props
}) => {
    const Tag = tag;
	return  <Tag className={CreateClassName(GetComponentClassNames('pizi-heading', {appearance, ...props}), {})}> 
		        {props.children}
	        </Tag>
};
