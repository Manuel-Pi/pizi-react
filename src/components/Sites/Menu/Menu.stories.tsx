import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Menu } from './Menu'
import { Meta, StoryObj } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const meta: Meta<typeof Menu> =  {
	title: 'Menu',
	component: Menu,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: defaultProps.color
		}
	}
}
  
export default meta
type Story = StoryObj<typeof Menu>

const Template = (args: any) => <>
	<Menu {...args}></Menu>
</>

export const Default: Story = {
	render: Template,
	args: {
		icon: <FontAwesomeIcon icon={"cog"}/>,
		title: "Test Menu",
		links: [{title: "Test Menu", link: "", icon: "star"}]
	}
}