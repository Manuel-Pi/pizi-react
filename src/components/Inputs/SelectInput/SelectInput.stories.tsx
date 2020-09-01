import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { SelectInput } from './SelectInput'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SelectInput> =  {
	title: 'inputs/SelectInput',
	component: SelectInput,
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
type Story = StoryObj<typeof SelectInput>

const Template = (args: any) => <>
	<SelectInput {...args}></SelectInput>
</>


export const Default: Story = {
	render: Template,
	args: {
		label: "List of items",
		options: [
			{
				label: "item 1"
			},
			{
				label: "item 2",
				selected: true
			},
			{
				label: "item 3",
				selected: true
			},
			{
				label: "item 4"
			},
			{
				label: "item 5",
				selected: true
			},
			{
				label: "item 6"
			},
			{
				label: "item 7"
			}
		]
	}
}

export const Multiple: Story = {
	render: Template,
	args: {
		multiple: true,
		label: "List of items",
		options: [
			{
				label: "item 1"
			},
			{
				label: "item 2",
				selected: true
			},
			{
				label: "item 3",
				selected: true
			},
			{
				label: "item 4"
			},
			{
				label: "item 5",
				selected: true
			},
			{
				label: "item 6"
			},
			{
				label: "item 7"
			}
		]
	}
}