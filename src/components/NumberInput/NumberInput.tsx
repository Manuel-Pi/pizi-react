import React, { useState } from 'react';
import './number-input.less';
import { ComponentProps, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { FormInput, FormInputProps } from '../PiziComponent/FormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Button/Button';

export interface NumberInputProps extends FormInputProps{
	step?: number
	max?: number
	min?: number
	defaultValue?: number
	allowEdition?: boolean
	toFixed?: number
}

/**
 * NumberInput UI component
 */
export const NumberInput: React.FC<NumberInputProps & React.HTMLAttributes<HTMLDivElement>> = ({
	step = 1,
	min = 0,
	max = 100,
	allowEdition,
	toFixed = 0,
	...props
}) => {

	const[value, setValue] = useState(props.defaultValue || 0);

	const setCleanValue = (value: number) => {
		if(value > max) value = max
		if(value < min) value = min
		setValue(parseFloat(value.toFixed(toFixed)))
	}

	return 	<FormInput inputName="pizi-number-input" 
				className={CreateClassName(GetComponentClassNames("", {...props, appearance: 'border'}), {})}
				{...{color: props.color, label: props.label}}>
				<Button icon="minus" onClick={() => setCleanValue(value - step)} disabled={min !== null && value <= min} appearance="simple"/>
				<input 	type="number" 
						readOnly={!allowEdition} 
						value={value} 
						onChange={e => setCleanValue(parseFloat(e.currentTarget.value))} 
						step={step} 
						min={min} 
						max={max}/>
				<Button icon="plus" onClick={() => setCleanValue(value + step)} disabled={max !== undefined && value >= max} appearance="simple"/>
			</FormInput>
};