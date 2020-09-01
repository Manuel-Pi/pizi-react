import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CleanProps, ComponentProps, GetComponentClassNames, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import './button.less'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface ButtonProps extends ComponentProps{
	icon?: IconProp
	iconLeft?: IconProp
	iconRight?: IconProp
	align?: 'right' | 'left' | 'center'
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
	icon,
	iconLeft,
	iconRight,
	align,
	...props
}) => {
	props = InitProps(props)
	return <button
			{...CleanProps(props)}
			type="button"
			className={GetComponentClassNames("pizi-button", props, { "icon": !!icon }, align, props.className)}>
		{iconLeft && <FontAwesomeIcon icon={iconLeft} className="left" />}
		{icon && <FontAwesomeIcon icon={icon} />}
		{!icon && props.children}
		{iconRight && <FontAwesomeIcon icon={iconRight} className="right" />}
	</button>
}
