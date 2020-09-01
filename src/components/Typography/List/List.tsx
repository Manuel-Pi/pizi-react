import React, { createElement } from 'react';
import './list.less'
import { ComponentProps, GetComponentClassNames, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import { ClassNameHelper } from '../../../utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons';

export interface ListProps extends ComponentProps{
	type?: 'ul' | 'ol'
	styleType?: 'dot' | 'circle' | 'donut' | 'circle-dot' | 'square' | 'empty-square' | 'arrow' | 'chevron' | 'caret'
	items: string[] | React.JSX.Element[]
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
export const List: React.FC<ListProps & React.HTMLAttributes<HTMLUListElement>> = ({
	appearance = 'simple',
	type = 'ul',
	styleType = 'dot',
	items = [],
	color = 'main',
	...props
}) => {

	const ulMarker = <FontAwesomeIcon className={ClassNameHelper('bullet', color)} icon={getIcon(styleType)} />
	const olMarker = (index: number) => <span className={ClassNameHelper('bullet', color)}>{index}</span>

	return createElement(type, {
		className: ClassNameHelper(GetComponentClassNames("pizi-list", {appearance, ...props}), type),
		...props 
	}, items.map((item, index) => <li key={index}>
									{
										type === 'ul' ? ulMarker : olMarker(index + 1)
									}
									{item}
								</li>))	
}