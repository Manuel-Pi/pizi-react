import React, { ReactNode, useEffect, useRef, useState } from 'react';
import './select-input.less'
import { FormInput, FormInputProps } from '../../../utils/PiziComponent/FormInput'
import { ClassNameHelper, autoHeight } from '../../../utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Spinner, SpinnerProps } from '../../Feedback/Spinner/Spinner';

export interface SelectInputProps extends FormInputProps<HTMLSelectElement>{
	multiple?: boolean
	itemsSize?: number
	options: {
		label: string,
		value?: string,
		selected?: boolean
	}[]
	loading?: boolean
	loadingIcon?: SpinnerProps["type"]
	onChange?: (value: string) => void
}

/**
 * SelectInput UI component
 */
export const SelectInput: React.FC<SelectInputProps> = ({
	loadingIcon = 'circle-notch',
	...props
}) => {

	const [options, setOptions] = useState(props.options)
	const selectRef = useRef(null)

	useEffect(() => {
		if(props.multiple && !props.itemsSize) autoHeight(selectRef)
	}, [selectRef, props.itemsSize, props.options])

	useEffect(() => {
		setOptions(props.options)
	}, [props.options])

	return 	<FormInput inputName="pizi-select-input" 
				className={ClassNameHelper({
					"read-only": props.readOnly, 
					multiple: props.multiple
				})}
				{...props}>
				
				<select multiple={props.multiple} size={props.multiple ? props.itemsSize || options.length : 1} ref={selectRef} onChange={e => props.onChange && props.onChange(e.target.value)}>
					{
						options.map((option, index) => <option key={index} disabled={props.readOnly} 
															className='animate__animated animate__fadeIn animate__faster'
															style={{animationDelay: index * 0.05 + 's'}}
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
				{ !props.loading && !props.multiple && <FontAwesomeIcon icon="chevron-down" className='caret main'/>}
				{ props.loading && <Spinner type={ loadingIcon } size='large'/> }
			</FormInput>
}