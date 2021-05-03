import React, { useState } from 'react';
import './text-input.less';
import { GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { FormInput, FormInputProps } from '../PiziComponent/FormInput';

export interface TextInputProps extends Omit<FormInputProps, 'inputName'>{
	defaultValue?: string
	type?: string
	valdationRegex?: RegExp
	valdationMessage?: String
}

/**
 * TextInput UI component
 */
export const TextInput: React.FC<TextInputProps & React.HTMLAttributes<HTMLDivElement>> = ({
	type = 'text',
	valdationRegex,
	valdationMessage = "this value is not allowed!",
	...props
}) => {

	const [value, setValue] = useState(props.defaultValue);
	const [error, setError] = useState(null);

	const handleChange = (newValue: string) => {
		let hasError = false;
		let regExp = valdationRegex;
		switch(type){
			case "text":
				regExp = regExp || /^\w*$/
				hasError = !newValue.match(regExp)
		}
		setError(hasError ? valdationMessage : null);
		setValue(newValue);
	}

	return 	<FormInput inputName="pizi-text-input" 
				className={CreateClassName(GetComponentClassNames("", {...props, appearance: 'border'}))}
				{...{color: props.color, label: props.label, error}}>
				<input 	type={type} 
						value={value} 
						onChange={e => handleChange(e.currentTarget.value)} 
						placeholder={props.placeholder}
						readOnly={props.readOnly}/>
			</FormInput>
};