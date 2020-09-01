import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { List } from './List'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof List> =  {
	title: 'Typography/List',
	component: List,
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
type Story = StoryObj<typeof List>

const Template = (args: any) => <>
	<List {...args}/>
</>

export const Default: Story = {
	render: Template,
	args: {
		items: ["Item exemple 1", "Item exemple 2", "Item exemple 3"]
	}
}

export const Circle: Story = {
	render: Template,
	args: {
		styleType: 'circle',
		items: ["Item exemple 1", "Item exemple 2", "Item exemple 3"]
	}
}

export const CircleDot: Story = {
	render: Template,
	args: {
		styleType: 'circle-dot',
		items: ["Item exemple 1", "Item exemple 2", "Item exemple 3"]
	}
}

export const Donut: Story = {
	render: Template,
	args: {
		styleType: 'donut',
		items: ["Item exemple 1", "Item exemple 2", "Item exemple 3"]
	}
}