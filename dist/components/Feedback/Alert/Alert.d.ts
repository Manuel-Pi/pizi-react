import React from 'react';
import './alert.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
export interface AlertProps extends ComponentProps {
    timeout?: number;
    content?: any;
}
/**
 * Alert UI component
 */
export declare const Alert: React.FC<AlertProps & React.HTMLAttributes<HTMLDivElement>>;
export interface AlertsProps {
    alerts: AlertProps[];
}
export declare const Alerts: React.FC<AlertsProps & React.HTMLAttributes<HTMLDivElement>>;
