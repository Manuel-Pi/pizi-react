import React from 'react'
import { Button, ButtonProps } from '../Button/Button'
import { CleanProps, ComponentProps, GetComponentClassNames, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import './button-group.less'

export interface ButtonGroupProps extends ComponentProps<HTMLDivElement>{}

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
	props = InitProps(props)
	return 	<div {...CleanProps(props)} className={GetComponentClassNames("pizi-button-group", props)}>
				{
					React.Children.map(props.children, child => {
						if(!React.isValidElement(child) || child.type !== Button) return child
						return React.cloneElement(child as React.ReactElement<ButtonProps>, {
							color: child.props.color || props.color,
							size: child.props.size || props.size,
							alt: child.props.alt || props.appearance === "fill",
							appearance: child.props.appearance || (child.props.icon && 'simple')
						})
					})
				}
			</div>
}

