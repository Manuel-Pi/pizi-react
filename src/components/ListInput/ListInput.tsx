import React, { useState, useRef, useEffect} from 'react';
import './list-input.less';
import { ComponentProps, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { FormInput, FormInputProps } from '../PiziComponent/FormInput';
import { Button } from '../Button/Button';

export interface ListInputProps extends FormInputProps{
	defaultValue?: string
	values: string[] | ValueObject[]
	type?: 'horizontal' | 'vertical'
}

interface ValueObject{
	value: string
	label: string
}

/**
 * ListInput UI component
 */
export const ListInput: React.FC<ListInputProps & React.HTMLAttributes<HTMLDivElement>> = ({
	values,
	type = 'horizontal',
	...props
}) => {

	const valueIsValueObject = (values[0] as ValueObject)?.value !== undefined
	const valueList: ValueObject[] = valueIsValueObject ? values as ValueObject[] : (values as string[]).map(value => {
		return {value, label: value}
	});

	const getIndex = (value: string) => valueList.reduce((acc, item, index) => acc = item.value === value ? index : acc, 0)
	const[value, setValue] = useState(getIndex(props.defaultValue));
	const ulRef = useRef();

	function next(){
        const val = value + 1 > (valueList.length - 1) ? valueList.length - 1 : value + 1
        setValue(val);
    }

    function previous(){
        const val = value - 1 < 0 ? 0 : value - 1;
        setValue(val);
	}

	let component = null;

	switch(type){

		case 'horizontal':
			component = 	<>
								<Button icon="chevron-left" onClick={() => previous()} disabled={value <= 0} appearance="simple"/>
								<span>
									<ul className="values" style={{left: -(ulRef.current ? (ulRef.current as HTMLElement).children[0].getBoundingClientRect().width * value: 0)  + "px"}} ref={ulRef}>
										{valueList.map(val => <li>{val.label}</li>)}
									</ul>
									<select value={valueList[value]?.value}>
										{valueList.map(val => <option value={val.value}>{val.label}</option>)}
									</select>
								</span>
								<Button icon="chevron-right" onClick={() => next()} disabled={value >= (values.length - 1)} appearance="simple"/>
							</>
			break

		case 'vertical':
			component = 	<>
								<div className="pizi-list-input__vertical">
									<ul style={{top: (ulRef.current ? -(ulRef.current as HTMLElement).children[0].getBoundingClientRect().height * value: 0)  + "px"}} ref={ulRef}>
										{valueList.map(val => <li>{val.label}</li>)}
									</ul>
									<select value={valueList[value]?.value}>
										{valueList.map(val => <option value={val.value}>{val.label}</option>)}
									</select>
								</div>
								<div className="pizi-list-input__vertical__buttons">
									<Button icon="chevron-up" onClick={() => previous()} disabled={value <= 0} appearance="simple"/>
									<Button icon="chevron-down" onClick={() => next()} disabled={value >= (values.length - 1)} appearance="simple"/>
								</div>
							</>
			break
	}

	useEffect(() => {

	}, [])
	

	return 	<FormInput inputName="pizi-list-input" 
				className={CreateClassName(GetComponentClassNames("", {...props, appearance: 'border'}), {
					[type]: type
				})}
				{...{color: props.color, label: props.label}}>
				{component}
			</FormInput>
};