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
}

/**
 * NumberInput UI component
 */
export const NumberInput: React.FC<NumberInputProps & React.HTMLAttributes<HTMLDivElement>> = ({
	step = 1,
	min = 0,
	max,
	...props
}) => {

	const[value, setValue] = useState(props.defaultValue || 0);

	function increment(){
        const val = value + step > max ? max : value + step
        setValue(val);
    }

    function decrement(){
        const val = value - step < min ? min : value - step;
        setValue(val);
    }

	return 	<FormInput inputName="pizi-number-input" 
				className={CreateClassName(GetComponentClassNames("", {...props, appearance: 'border'}), {})}
				{...{color: props.color, label: props.label}}>
				<Button icon="minus" onClick={() => decrement()} disabled={min !== null && value <= min} appearance="simple"/>
                <span>{value}</span>
				<Button icon="plus" onClick={() => increment()} disabled={max !== undefined && value >= max} appearance="simple"/>
			</FormInput>
};