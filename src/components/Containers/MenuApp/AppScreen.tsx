import { IconName } from "@fortawesome/free-solid-svg-icons"

export interface AppScreenProps {
	title: string
	icon: IconName
	hideInMenu?: boolean
	path?: string | undefined
	noMenu?: boolean
}
