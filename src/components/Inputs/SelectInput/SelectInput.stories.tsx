import React, { useState } from 'react'
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

const TemplateOnChange = (args: any) => {
	const [value, setValue] = useState("")
	return 	<>
				<SelectInput {...args} onChange={setValue}></SelectInput>
				<>{value}</>
			</>
}

const TemplateLoading = (props) => {
	const [options, setOptions] = useState(props.options)
	setTimeout(() => {
		setOptions([
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
		])
	}, 2000)
	return <SelectInput {...props} loading={!options.length} options={options}></SelectInput>
} 


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

export const Loading: Story = {
	render: TemplateLoading,
	args: {
		multiple: true,
		itemsSize: 5,
		label: "List of items",
		options: [],
		loading: true
	}
}

export const OnChange: Story = {
	render: TemplateOnChange,
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
				label: "item 3"
			},
			{
				label: "item 4"
			},
			{
				label: "item 5"
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