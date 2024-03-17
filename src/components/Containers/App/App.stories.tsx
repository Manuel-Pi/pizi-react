import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { App } from './App'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof App> =  {
	title: 'App',
	component: App,
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
type Story = StoryObj<typeof App>

const Template = (args: any) => <>
	<App {...args}></App>
</>


export const Default: Story = {
	render: Template
}