import React, { useState } from 'react';
import './checkbox.less'
import { ComponentProps, GetComponentClassNames } from '../../../utils/PiziComponent/PiziComponent'
import { ClassNameHelper } from '../../../utils/Utils'
import { FormInput, FormInputProps } from '../../../utils/PiziComponent/FormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface CheckBoxProps extends FormInputProps{
	onChange?: (value: boolean) => void
	defaultValue?: boolean
}

/**
 * CheckBox UI component
 */
export const CheckBox: React.FC<CheckBoxProps & React.HTMLAttributes<HTMLDivElement>> = ({
	defaultValue = false,
	onChange = () => null,
	...props
}) => {

	const [checked, setChecked] = useState(defaultValue)
	const inputId = 'pizi-checkbox' + (Math.floor(Math.random() * 1000))

	return 	<FormInput 	inputName="pizi-checkbox" 
						labelPosition={props.labelPosition}
						className={ClassNameHelper({checked: checked, inline: props.labelPosition})}
						{...{color: props.color, label: props.label}}
						inputId={inputId}>
				<input type="checkbox" 
						id={inputId}
						onChange={e => {
							if(props.readOnly) return
							setChecked(e.currentTarget.checked)
							onChange(e.currentTarget.checked)
						}}
						checked={checked} 
						readOnly={props.readOnly}
						name={props.inputName}/>
				{checked && <FontAwesomeIcon icon="check" className={"checkbox__input__checked"}/>}
			</FormInput>
}