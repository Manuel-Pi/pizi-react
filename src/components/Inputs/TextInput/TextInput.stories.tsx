import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { TextInput } from './TextInput'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextInput> = {
	title: 'Inputs/TextInput',
	component: TextInput,
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
type Story = StoryObj<typeof TextInput>

const Template = ({...args}) => <TextInput {...args}></TextInput>

export const Default: Story = {
	render: Template,
	args: {
		label:"Label du text input",
		placeholder: "type value here ...",
		onKeyEnter: () => {
			console.log("pressed enter")
		}
	}
}

export const Password: Story = {
	render: Template,
	args: {
		label:"Label du text input",
		placeholder: "type value here ...",
		type: "password",
		onKeyEnter: () => {
			console.log("pressed enter")
		}
	}
}
