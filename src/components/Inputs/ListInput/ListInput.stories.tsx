import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { ListInput } from './ListInput'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ListInput> = {
	title: 'Inputs/ListInput',
	component: ListInput,
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
type Story = StoryObj<typeof ListInput>

const Template = (args: any) => <ListInput values={[]} {...args}></ListInput>

export const Horizontal: Story = {
	render: Template,
	args: {
		label: "Label for list input",
		type: 'horizontal',
		values: ["uno", "dos", "tres", "quatro", "cinco", "seis", "siete", "ocho", "nueve", "asdasdasdasd sadasd sad"],
		defaultValue: "seis"
	}
}

export const Vertical: Story = {
	render: Template,
	args: {
		label: "Label for list input",
		type: 'vertical',
		values: ["uno", "dos", "tres", "quatro", "cinco", "seis", "siete", "ocho", "nueve", "asdasdasdasd sadasd sad"],
		defaultValue: "seis"
	}
}