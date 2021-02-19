import React from 'react';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { Button } from '../Button/Button';
import { Appeareance, ComponentProps, defaultProps, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import './button-group.less';

export interface ButtonGroupProps extends ComponentProps{
	buttonAppearance?: Appeareance
}

/**
 * Primary UI component for user interaction
 */
export const ButtonGroup: React.FC<ButtonGroupProps & React.HTMLAttributes<HTMLDivElement>> = ({
	buttonAppearance,
	...props
}) => {

	return 	<div className={CreateClassName(GetComponentClassNames("pizi-button-group", props), {})}>
				{React.Children.map(props.children, child => {
					if(React.isValidElement(child) && child.type === Button) {
						return React.cloneElement(child, {
							theme: child.props.theme || props.appearance === "fill" && (props.theme === "default" ? "alt" : "default") || props.theme,
							size: child.props.size || props.size,
							appearance: child.props.appearance || buttonAppearance || (child.props.icon && 'simple'),
						});
					} else {
						return child;
					}
				})}
			</div>
}