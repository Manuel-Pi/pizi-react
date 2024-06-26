import React from 'react';
import './checkbox.less';
import { FormInputProps } from '../../../utils/PiziComponent/FormInput';
export interface CheckBoxProps extends FormInputProps<HTMLInputElement> {
    onChange?: (value: boolean) => void;
    defaultValue?: boolean;
}
/**
 * CheckBox UI component
 */
export declare const CheckBox: React.FC<CheckBoxProps>;
