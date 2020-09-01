import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Switch } from './Switch'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Switch> =  {
	title: 'Controls/Switch',
	component: Switch,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: null
		},
		appearance: {
		  defaultValue: defaultProps.appearance
		}
	}
}
  
export default meta
type Story = StoryObj<typeof Switch>

const Template = ({...args}) => <Switch {...args}></Switch>

export const Default: Story = {
	render: Template,
	args: {
		label:"Label du switch",
		defaultValue: true
	}
}

export const LabelRight: Story = {
	render: Template,
	args: {
		label:"Label du switch",
		defaultValue: true,
		labelPosition: "right"
	}
}