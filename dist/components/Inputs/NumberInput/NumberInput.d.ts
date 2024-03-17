import React from 'react';
import './number-input.less';
import { FormInputProps } from '../../../utils/PiziComponent/FormInput';
export interface NumberInputProps extends FormInputProps<HTMLInputElement> {
    step?: number;
    max?: number;
    min?: number;
    defaultValue?: number;
    toFixed?: number;
    onChange?: (value: number) => void;
}
/**
 * NumberInput UI component
 */
export declare const NumberInput: React.FC<NumberInputProps>;
