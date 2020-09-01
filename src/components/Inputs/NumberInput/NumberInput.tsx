import React, { useEffect, useState } from 'react';
import './number-input.less';
import { ComponentProps, GetComponentClassNames } from '../../../utils/PiziComponent/PiziComponent';
import { ClassNameHelper } from '../../../utils/Utils';
import { FormInput, FormInputProps } from '../../../utils/PiziComponent/FormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../Controls/Button/Button';

export interface NumberInputProps extends FormInputProps{
	step?: number
	max?: number
	min?: number
	defaultValue?: number
	toFixed?: number
	onChange?: (value:number) => void
}

/**
 * NumberInput UI component
 */
export const NumberInput: React.FC<NumberInputProps & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">> = ({
	step = 1,
	min = 0,
	max = 100,
	toFixed = 0,
	onChange = () => null,
	...props
}) => {

	const[value, setValue] = useState(props.defaultValue || 0);

	const setCleanValue = (value: number) => {
		if(value > max) value = max
		if(value < min) value = min
		value = parseFloat(value.toFixed(toFixed))
		setValue(value)
		onChange(value)
	}

	useEffect(() => {
		setCleanValue(value)
	}, [min, max])

	return 	<FormInput inputName="pizi-number-input"
				{...{color: props.color, label: props.label}}>
				<Button icon="minus" onClick={() => setCleanValue(value - step)} disabled={props.readOnly || (min !== null && value <= min)} appearance="simple"/>
				<input 	type="number" 
						name={props.inputName}
						readOnly={props.readOnly} 
						value={value} 
						onChange={e => setCleanValue(parseFloat(e.currentTarget.value))} 
						step={step} 
						min={min} 
						max={max}/>
				<Button icon="plus" onClick={() => setCleanValue(value + step)} disabled={props.readOnly || (max !== undefined && value >= max)} appearance="simple"/>
			</FormInput>
};