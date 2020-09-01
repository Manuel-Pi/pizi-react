import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { [FTName] } from './[FTName]'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof [FTName]> =  {
	title: '[FTName]',
	component: [FTName],
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
type Story = StoryObj<typeof [FTName]>

const Template = (args: any) => <>
	<[FTName] {...args}></[FTName]>
</>


export const Default: Story = {
	render: Template
}