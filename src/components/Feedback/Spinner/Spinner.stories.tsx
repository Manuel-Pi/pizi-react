import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Spinner } from './Spinner'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Spinner> =  {
	title: 'Feedback/Spinner',
	component: Spinner,
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
type Story = StoryObj<typeof Spinner>

const Template = (args: any) => <>
	<Spinner type="spinner" {...args}></Spinner>
</>


export const Default: Story = {
	render: Template,
	args: {}
}