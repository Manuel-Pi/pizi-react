import React, { Ref } from 'react';
import './text-input.less';
import { FormInputProps } from '../../../utils/PiziComponent/FormInput';
export interface TextInputProps extends FormInputProps {
    defaultValue?: string;
    type?: string;
    valdationRegex?: RegExp;
    valdationMessage?: string;
    onChange?: (value: string) => void;
    onError?: (hasError: boolean) => void;
    onKeyEnter?: () => void;
    forwardRef?: Ref<HTMLInputElement>;
}
export declare const InputValidation: {
    text: {
        regex: RegExp;
        message: string;
    };
    password: {
        regex: RegExp;
        message: string;
    };
    email: {
        regex: RegExp;
        message: string;
    };
    code: {
        regex: RegExp;
        message: string;
    };
};
/**
 * TextInput UI component
 */
export declare const TextInput: React.FC<TextInputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "onError">>;
