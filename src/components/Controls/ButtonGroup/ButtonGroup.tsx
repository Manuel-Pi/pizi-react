import React from 'react'
import { Button, type ButtonProps } from '../Button/Button'
import { CleanProps, type ComponentProps, GetComponentClassNames, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import './button-group.less'

export interface ButtonGroupProps extends ComponentProps<HTMLDivElement>{}

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
	props = InitProps(props)
	return 	<div {...CleanProps(props)} className={GetComponentClassNames("pizi-button-group", props)}>
				{
					React.Children.map(props.children, child => {
						if(!React.isValidElement(child) || child.type !== Button) return child
						const button = child as React.ReactElement<ButtonProps>
						return React.cloneElement(button, {
							color: button.props.color || props.color,
							size: button.props.size || props.size,
							alt: button.props.alt || props.appearance === "fill",
							appearance: button.props.appearance || (button.props.icon && 'simple')
						})
					})
				}
			</div>
}

