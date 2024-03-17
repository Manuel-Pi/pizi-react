import React, { createElement } from 'react';
import './list.less'
import { type ComponentProps, GetComponentClassNames } from '../../../utils/PiziComponent/PiziComponent'
import { getClassName } from 'pizi-utils/dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons';

export interface ListProps extends ComponentProps<HTMLUListElement>{
	type?: 'ul' | 'ol'
	styleType?: 'dot' | 'circle' | 'donut' | 'circle-dot' | 'square' | 'empty-square' | 'arrow' | 'chevron' | 'caret'
	items: string[] | React.ReactElement[]
}

function getIcon(styleType: ListProps["styleType"]): [IconPrefix, IconName]{
	switch(styleType){
		case 'caret':
			return ['fas', 'caret-right']
		case 'chevron':
			return ['fas', 'angle-right']
		case 'arrow':
			return ['fas', 'arrow-right']
		case 'square':
			return ['fas', 'square']
		case 'empty-square':
			return ['far', 'square']
		case 'donut':
			return ['fas', 'circle-dot']
		case 'circle-dot':
			return ['far', 'circle-dot']
		case 'circle':
			return ['far', 'circle']
		case 'dot':
		default: 
			return ['fas', 'circle']
	}
}

/**
 * List UI component
 */
export const List: React.FC<ListProps> = ({
	appearance = 'simple',
	type = 'ul',
	styleType = 'dot',
	items = [],
	color = 'main',
	...props
}) => {

	const ulMarker = <FontAwesomeIcon className={getClassName('bullet', color)} icon={getIcon(styleType)} />
	const olMarker = (index: number) => <span className={getClassName('bullet', color)}>{index}</span>

	return createElement(type, {
		className: getClassName(GetComponentClassNames("pizi-list", {appearance, ...props}), type),
		...props 
	}, items.map((item, index) => <li key={index}>
									{
										type === 'ul' ? ulMarker : olMarker(index + 1)
									}
									{item}
								</li>))	
}