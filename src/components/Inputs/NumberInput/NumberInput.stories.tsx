import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { NumberInput } from './NumberInput'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NumberInput> = {
	title: 'Inputs/NumberInput',
	component: NumberInput,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: defaultProps.color
		},
		appearance: {
		  defaultValue: defaultProps.appearance
		}
	}
}

export default meta
type Story = StoryObj<typeof NumberInput>

const Template = (args: any) => <NumberInput {...args}></NumberInput>

export const Default: Story = {
	render: Template,
	args: {
		label:"Label du number input"
	}
}