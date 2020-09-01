
import "../src/styles/main.less"
import * as Icons from '@fortawesome/free-solid-svg-icons'
import * as BrandIcons from '@fortawesome/free-brands-svg-icons'
import * as RegularIcons from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const iconList = Object
	.keys(Icons)
	.filter(key => key !== "fas" && key !== "prefix")
	.map(icon => Icons[icon])

const brandIconList = Object
	.keys(BrandIcons)
	.filter(key => key !== "fab" && key !== "prefix")
	.map(icon => BrandIcons[icon])

const RegularIconsList = Object
	.keys(RegularIcons)
	.filter(key => key !== "far" && key !== "prefix")
	.map(icon => RegularIcons[icon])

library.add(...iconList, ...brandIconList, ...RegularIconsList)

export const parameters = {
	layout: "fullscreen",
	backgrounds: {
		default: 'dark',
		values: [
			{
				name: 'dark',
				value: '#111',
			},
			{
				name: 'main',
				value: 'peru',
			},
			{
				name: 'grey',
				value: '#444',
			}
		],
	},
	reactRouter: {
		location: {
			path: "/"
		}
	},
}

export const decorators = []