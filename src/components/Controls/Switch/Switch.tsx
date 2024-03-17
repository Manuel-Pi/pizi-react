import React, { useEffect, useId, useState } from 'react';
import './switch.less';
import { ClassNameHelper } from '../../../utils/Utils';
import { FormInput, FormInputProps } from '../../../utils/PiziComponent/FormInput'

export interface SwitchProps extends FormInputProps{
	onChange?: (value: boolean) => void
	defaultValue?: boolean
}

let switchId = 0
function getNextId(){
	switchId++
	return switchId
}

/**
 * Switch UI component
 */
export const Switch: React.FC<SwitchProps & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">> = ({
	defaultValue = false,
	onChange = () => null,
	...props
}) => {

	const [checked, setChecked] = useState(defaultValue)
	const inputId = useId()

	return 	<FormInput 	inputName="pizi-switch" 
						className={ClassNameHelper({checked: checked})}
						{...{color: props.color, label: props.label}}
						labelPosition={props.labelPosition}
						inputId={inputId}>
				<div className="pizi-switch__input__container">
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
					<div className={ClassNameHelper("pizi-switch__input__checked", props.color)}></div>
				</div>
			</FormInput>
};