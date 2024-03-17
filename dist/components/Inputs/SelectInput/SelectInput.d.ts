import React from 'react';
import './select-input.less';
import { FormInputProps } from '../../../utils/PiziComponent/FormInput';
import { SpinnerProps } from '../../Feedback/Spinner/Spinner';
export interface SelectInputProps extends FormInputProps<HTMLSelectElement> {
    multiple?: boolean;
    itemsSize?: number;
    options: {
        label: string;
        value?: string;
        selected?: boolean;
    }[];
    loading?: boolean;
    loadingIcon?: SpinnerProps["type"];
    onChange?: (value: string) => void;
}
/**
 * SelectInput UI component
 */
export declare const SelectInput: React.FC<SelectInputProps>;
