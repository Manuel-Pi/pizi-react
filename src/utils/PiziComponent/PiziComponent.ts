import { ClassNameHelper, filterObject } from '../Utils'
import { FormInputProps } from './FormInput'

export type Theme = 'default' | 'alt'
export type Appeareance = 'fill' | 'border' | 'simple'
export type Size = 'small' | 'medium' | 'large'
export type Color = 'main' | 'secondary' | 'teritary' | 'success' | 'warn' | 'error' | 'blue' 

export interface ComponentProps<T = HTMLElement> extends React.HTMLAttributes<T>{
	display?: boolean
	appearance?: Appeareance
	size?: Size
	color?: Color
	className?: string
	alt?: boolean
}

export const defaultProps: any = {
	display: true,
	appearance: 'fill',
	size: 'medium',
	color: 'main'
}

export const GetComponentClassNames = (classname: string = "", props: ComponentProps | FormInputProps, ...args: (string | {[key: string]: any} | undefined)[]) => {
	props = { ...defaultProps, ...props }
	if(props.alt) props.color = GetAltColor(props.color)
	return ClassNameHelper(classname, props.className, props.appearance, props.size, props.color, {
		hidden: !props.display
	}, ...args)
}

export const GetAltColor = (color: string = defaultProps.color) => {
	switch(color){
		case "main":
		return "secondary"
		case "secondary":
		return "main"
		case "success-alt":
		return "success"
		default:
		return "secondary"
	}
}

export const InitProps = (props: any) => ({...defaultProps, ...props})

export const GetAltColorFromTest = (test: boolean, color: Color = defaultProps.color)=> test ? GetAltColor(color) : color

export const GetProps = (props: any, keys: string[] = Object.keys(defaultProps)) => filterObject(props, keys)

export const CleanProps = ({appearance, color, size, display, alt, ...allowedProps}: any) => allowedProps