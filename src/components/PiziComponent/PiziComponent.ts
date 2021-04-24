import { CreateClassName } from '../../utils/ClassNameHelper';

export type Theme = 'default' | 'alt'
export type Appeareance = 'fill' | 'border' | 'simple'
export type Size = 'small' | 'medium' | 'large'
export type Color = 'main' | 'secondary' | 'success' | 'warn' | 'error' | 'blue'

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
	display?: boolean
	appearance?: Appeareance
	size?: Size
	color?: Color
}

export const defaultProps: any = {
	display: true,
	appearance: 'fill',
	size: 'medium',
	color: 'main'
}

export const GetComponentClassNames = (classname: string = "", {
	appearance = defaultProps.appearance, 
	size = defaultProps.size,
	display = defaultProps.display,
	color,
	className
}: ComponentProps) => CreateClassName((classname + " " + (className ? className : "")).trim(), {
	hidden: !display,
	[appearance]: appearance,
	[size]: size,
	[color]: color
})

export const GetAltColor = (color: string) => {
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

export const SetDefaultProps = (props: any) => {
	Object.keys(props).forEach(prop => {

		if(props[prop] !== undefined && defaultProps[prop] !== undefined) props[prop] = defaultProps[prop];
	});
	props = {...props, ...defaultProps}; 
}