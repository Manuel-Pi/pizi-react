import React from 'react';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { Button } from '../Button/Button';
import { Appeareance, ComponentProps, defaultProps, GetAltColor, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import './button-group.less';

export interface ButtonGroupProps extends ComponentProps{
}

/**
 * Primary UI component for user interaction
 */
export const ButtonGroup: React.FC<ButtonGroupProps & React.HTMLAttributes<HTMLDivElement>> = ({
	...other
}) => {
	const props: ButtonGroupProps = {...defaultProps, ...other};
	return 	<div {...props} className={CreateClassName(GetComponentClassNames("pizi-button-group", {...props}), {})}>
				{React.Children.map(props.children, child => {
					if(React.isValidElement(child) && child.type === Button) {
						return React.cloneElement(child, {
							color: child.props.color || props.appearance === "fill" && GetAltColor(props.color) || props.color,
							size: child.props.size || props.size,
							appearance: child.props.appearance || (child.props.icon && 'simple'),
						});
					} else {
						return child;
					}
				})}
			</div>
}