import React from 'react';
import './json.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
export interface JsonProps extends ComponentProps<HTMLDivElement> {
    json: any;
}
/**
 * Json UI component
 */
export declare const Json: React.FC<JsonProps>;
