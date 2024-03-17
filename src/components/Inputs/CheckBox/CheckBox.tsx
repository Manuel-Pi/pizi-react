import React, { useId, useState } from 'react'
import './checkbox.less'
import { ClassNameHelper } from '../../../utils/Utils'
import { FormInput, FormInputProps } from '../../../utils/PiziComponent/FormInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { registerIcons } from "../../../utils/Utils"
registerIcons(faCheck)

export interface CheckBoxProps extends FormInputProps<HTMLInputElement>{
	onChange?: (value: boolean) => void
	defaultValue?: boolean
}

/**
 * CheckBox UI component
 */
export const CheckBox: React.FC<CheckBoxProps> = ({
	defaultValue = false,
	onChange = () => null,
	...props
}) => {

	const [checked, setChecked] = useState(defaultValue)
	const inputId = useId()

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
				{checked && <FontAwesomeIcon icon="check" className={"checkbox__input__checked animate__animated animate__bounceIn animate__faster"}/>}
			</FormInput>
}