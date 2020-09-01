import React from 'react';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
import './button.less';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface ButtonProps extends ComponentProps {
    icon?: IconProp;
    iconLeft?: IconProp;
    iconRight?: IconProp;
    align?: 'right' | 'left' | 'center';
}
export declare const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;
