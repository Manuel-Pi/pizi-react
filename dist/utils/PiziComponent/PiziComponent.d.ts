/// <reference types="react" />
import { FormInputProps } from './FormInput';
export type Theme = 'default' | 'alt';
export type Appeareance = 'fill' | 'border' | 'simple';
export type Size = 'small' | 'medium' | 'large';
export type Color = 'main' | 'secondary' | 'teritary' | 'success' | 'warn' | 'error' | 'blue';
export interface ComponentProps<T = HTMLElement> extends React.HTMLAttributes<T> {
    display?: boolean;
    appearance?: Appeareance;
    size?: Size;
    color?: Color;
    className?: string;
    alt?: boolean;
}
export declare const defaultProps: any;
export declare const GetComponentClassNames: (classname: string | undefined, props: ComponentProps | FormInputProps, ...args: (string | {
    [key: string]: any;
} | undefined)[]) => string;
export declare const GetAltColor: (color?: string) => "main" | "secondary" | "success";
export declare const InitProps: (props: any) => any;
export declare const GetAltColorFromTest: (test: boolean, color?: Color) => Color;
export declare const GetProps: (props: any, keys?: string[]) => any;
export declare const CleanProps: ({ appearance, color, size, display, alt, ...allowedProps }: any) => any;
