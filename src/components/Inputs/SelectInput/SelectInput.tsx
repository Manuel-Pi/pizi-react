import React, { useEffect, useRef, useState } from 'react';
import './select-input.less'
import { FormInput, FormInputProps } from '../../../utils/PiziComponent/FormInput'
import { ClassNameHelper, autoHeight } from '../../../utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface SelectInputProps extends FormInputProps{
	multiple?: boolean
	itemsSize?: number
	options: {
		label: string,
		value?: string,
		selected?: boolean
	}[]
}

/**
 * SelectInput UI component
 */
export const SelectInput: React.FC<SelectInputProps & React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {

	const [options, setOptions] = useState(props.options)

	const selectRef = useRef(null)

	useEffect(() => {
		if(!props.itemsSize) autoHeight(selectRef)
	}, [selectRef, props.itemsSize, props.options])

	useEffect(() => {
		setOptions(props.options)
	}, [props.options])

	return 	<FormInput inputName="pizi-select-input" 
				className={ClassNameHelper({"read-only": props.readOnly})}
				{...props}>
				<select multiple={props.multiple} size={props.multiple ? props.itemsSize || options.length : 1} ref={selectRef}>
					{
						options.map((option, index) => <option key={index} disabled={props.readOnly} 
															selected={option.selected} 
															value={option.value || option.label}
															onMouseDown={e => {
																e.preventDefault()
																const opt = [...options]
																opt[index].selected = !opt[index].selected
																setOptions(opt)
																return false
															}}>{option.label}</option>)
					}
				</select>
				{ !props.multiple && <FontAwesomeIcon icon="chevron-down" className='caret main'/>}
			</FormInput>
}