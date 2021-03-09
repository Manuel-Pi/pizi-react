import React, { useState } from 'react';
import './switch.less';
import { ComponentProps, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { FormInput, FormInputProps } from '../PiziComponent/FormInput';

export interface SwitchProps extends FormInputProps{
	onChange?: (value: boolean) => void
	defaultValue?: boolean
}

/**
 * Switch UI component
 */
export const Switch: React.FC<SwitchProps & React.HTMLAttributes<HTMLDivElement>> = ({
	defaultValue = false,
	...props
}) => {

	const [checked, setChecked] = useState(defaultValue);

	return 	<FormInput 	inputName="pizi-switch" 
						className={CreateClassName(GetComponentClassNames("", {...props, appearance: 'border'}), {checked})}
						{...{color: props.color, label: props.label}}>
				<input type="checkbox" onChange={e => setChecked(e.currentTarget.checked)} checked={checked}/>
				<div className={GetComponentClassNames("pizi-switch__input__checked", {...props, appearance: 'fill'})}></div>
			</FormInput>
};