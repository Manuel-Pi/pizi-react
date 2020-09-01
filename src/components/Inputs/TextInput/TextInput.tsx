import React, { useState, useEffect, Ref} from 'react';
import './text-input.less';
import { ClassNameHelper } from '../../../utils/Utils';
import { FormInput, FormInputProps } from '../../../utils/PiziComponent/FormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../Controls/Button/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faEye} from '@fortawesome/free-regular-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons/faEyeSlash';

export interface TextInputProps extends FormInputProps{
	defaultValue?: string
	type?: string
	valdationRegex?: RegExp
	valdationMessage?: string
	onChange?: (value: string) => void 
	onError?: (hasError: boolean) => void
	onKeyEnter?: () => void
	forwardRef?: Ref<HTMLInputElement>
}

export const InputValidation = {
	text: {
		regex: /^\w*$/,
		message: "this value is not allowed!"
	},
	password: {
		regex: /^[^\s]{8,}$/,
		message: "8 character minimum"
	},
	email: {
		regex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
		message: "email not valid"
	},
	code: {
		regex: /^\d{6}$/,
		message: "6 numbers"
	},
}

/**
 * TextInput UI component
 */
export const TextInput: React.FC<TextInputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "onError">> = ({
	type = 'text',
	valdationRegex,
	valdationMessage = "this value is not allowed!",
	onChange = (value: string) => null,
	onError = (hasError: boolean) => null,
	onKeyEnter = () => null,
	defaultValue = "",
	forwardRef= null,
	display,
	...props
}) => {

	const [value, setValue] = useState(defaultValue)
	const [error, setError] = useState(props.error)
	const [inputType, setType] = useState(type)

	const validate = () => {
		if(props.readOnly) return
		// Check for error
		let hasError = false;
		let regExp = valdationRegex;
		switch(type){
			case "text":
				regExp = regExp || /^\w*$/
				hasError = !value || !value.match(regExp)
		}
		setError(hasError ? valdationMessage : undefined)
		onError(hasError)
	}

	useEffect(() => setValue(defaultValue), [defaultValue])
	useEffect(() => setError(props.error), [props.error])
	useEffect(() => setType(type), [type])

	return 	<FormInput inputName="pizi-text-input" 
				className={ClassNameHelper({color: props.color}, props.className)}
				{...{color: props.color, label: props.label, error, appearance: props.appearance, display: display}}>
				<input 	{...props as React.HTMLAttributes<HTMLInputElement>}
						type={inputType} 
						ref={forwardRef}
						name={props.inputName}
						className={ClassNameHelper({password: type === "password"})}
						value={value} 
						autoFocus={props.autoFocus}
						onBlur={validate}
						onChange={(e) => {
							setValue(e.currentTarget.value)
							error && validate()
							onChange(e.currentTarget.value)
						}}
						placeholder={props.placeholder}
						readOnly={props.readOnly}
						onKeyDown={event => {
							if(event.key === 'Enter') onKeyEnter()
						}}/>
					<Button display={type === "password" && !!value} icon={inputType === "password" ? faEye: faEyeSlash} appearance="simple" color="teritary" className='password-show-button' onClick={() => setType(inputType === "password" ? "text": "password")}/>
			</FormInput>
}