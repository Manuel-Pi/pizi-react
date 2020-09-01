import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { CheckBox } from './CheckBox'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CheckBox> =  {
	title: 'Inputs/CheckBox',
	component: CheckBox,
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
type Story = StoryObj<typeof CheckBox>

const Template = (args: any) => <>
	<CheckBox {...args}></CheckBox>
</>


export const Default: Story = {
	render: Template,
	args: {
		label: "This is a checkbox"
	}
}

export const LabelRight: Story = {
	render: Template,
	args: {
		label: "This is a checkbox",
		labelPosition: "right"
	}
}