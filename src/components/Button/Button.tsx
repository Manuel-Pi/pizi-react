import { IconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { ComponentProps, GetComponentClassNames, defaultProps } from '../PiziComponent/PiziComponent';
import './button.less';

export interface ButtonProps extends ComponentProps{
	icon?: IconName
	iconLeft?: IconName
	iconRight?: IconName
	align?: 'right' | 'left'
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
	icon,
	iconLeft,
	iconRight,
	align,
	...other
}) => {
	const props = {...defaultProps, ...other};
	return <button
		type="button"
		{...props}
		className={CreateClassName(GetComponentClassNames("pizi-button", {...props}), {
			"main": !props.color,
			"icon": icon,
			[align]: align
		})}>
		{iconLeft && <FontAwesomeIcon icon={iconLeft} className="left"/>}
		{icon && <FontAwesomeIcon icon={icon} />}
		{!icon && props.children}
		{iconRight && <FontAwesomeIcon icon={iconRight} className="right" />}
	</button>
};
