import React, { useState, useRef, useEffect} from 'react'
import './list-input.less'
import { ClassNameHelper } from '../../../utils/Utils'
import { FormInput, FormInputProps } from '../../../utils/PiziComponent/FormInput'
import { Button } from '../../Controls/Button/Button'

export interface ListInputProps extends FormInputProps{
	defaultValue?: string
	values: string[] | ValueObject[]
	type?: 'horizontal' | 'vertical'
	onChange?: (valeu:string) => void
}

interface ValueObject{
	value: string
	label: string
}

/**
 * ListInput UI component
 */
export const ListInput: React.FC<ListInputProps & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">> = ({
	values,
	type = 'horizontal',
	onChange = () => null,
	...props
}) => {

	const valueIsValueObject = (values[0] as ValueObject)?.value !== undefined
	const valueList: ValueObject[] = valueIsValueObject ? values as ValueObject[] : (values as string[]).map(value => {
		return {value, label: value}
	})

	const getIndex = (value?: string) => valueList.reduce((acc, item, index) => acc = item.value === value ? index : acc, 0)
	const[value, setValue] = useState(getIndex(props.defaultValue))
	const[left, setLeft] = useState(0)
	const ulRef = useRef(null)

	function next(){
        const val = value + 1 > (valueList.length - 1) ? valueList.length - 1 : value + 1
        setValue(val)
    }

    function previous(){
        const val = value - 1 < 0 ? 0 : value - 1
        setValue(val)
	}

	let component = null

	useEffect(() => {
		setLeft(-(ulRef.current && (ulRef.current as HTMLElement).children[0] ? (ulRef.current as HTMLElement).children[0].getBoundingClientRect().width * value: 0))
		onChange(valueList[value]?.value)
	},[value])

	useEffect(() => {
		let isMounted = true
		setTimeout(() => {
			if(!isMounted) return
			setLeft(-(ulRef.current && (ulRef.current as HTMLElement).children[0] ? (ulRef.current as HTMLElement).children[0].getBoundingClientRect().width * value: 0))
		}, 600)
		return () => {isMounted = false}
	},[])

/*
	const resizeObserver = new ResizeObserver((entries) => {
		const { width } = entries[0].contentRect
		setLeft(-(ulRef.current ? width * value: 0))
		console.log('Size changed ' + width)
	})

	useEffect(() => {
		const li = (ulRef.current as HTMLElement).children[0]
		if(li) resizeObserver.observe(li)
	},[])
*/

	switch(type){

		case 'horizontal':
			component = 	<>
								<Button icon="chevron-left" size={props.size} onClick={() => previous()} disabled={props.readOnly || value <= 0} appearance="simple"/>
								<span>
									<ul className="values" style={{left: left + "px"}} ref={ulRef}>
										{valueList.map((val) => <li key={val.label}>{val.label}</li>)}
									</ul>
									<select value={valueList[value]?.value} onChange={() => null}>
										{valueList.map(val => <option key={val.label} value={val.value}>{val.label}</option>)}
									</select>
								</span>
								<Button icon="chevron-right" size={props.size} onClick={() => next()} disabled={props.readOnly || value >= (values.length - 1)} appearance="simple"/>
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
									<Button icon="chevron-up" size={props.size} onClick={() => previous()} disabled={props.readOnly || value <= 0} appearance="simple"/>
									<Button icon="chevron-down" size={props.size} onClick={() => next()} disabled={props.readOnly || value >= (values.length - 1)} appearance="simple"/>
								</div>
							</>
			break
	}

	return 	<FormInput inputName="pizi-list-input" 
				className={ClassNameHelper({
					[type]: !!type
				})}
				{...props}>
				{component}
			</FormInput>
}