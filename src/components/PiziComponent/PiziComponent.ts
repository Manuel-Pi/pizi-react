import { CreateClassName } from '../../utils/ClassNameHelper';

export type Theme = 'default' | 'alt'
export type Appeareance = 'fill' | 'border' | 'simple'
export type Size = 'small' | 'medium' | 'large'

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
	display?: boolean
	theme?: Theme
	appearance?: Appeareance
	size?: Size
}

export const defaultProps: ComponentProps = {
	display: true,
	theme: 'default',
	appearance: 'fill',
	size: 'medium'
}

export const GetComponentClassNames = (classname: string, {
	theme = defaultProps.theme, 
	appearance = defaultProps.appearance, 
	size = defaultProps.size,
	display = defaultProps.display,
	className
}: ComponentProps) => CreateClassName((className ? className + " " : "") + classname, {
	hidden: !display,
	["theme_" + theme]: theme,
	[appearance]: appearance,
	[size]: size
})