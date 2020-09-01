import React from 'react'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button/Button'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ButtonGroup> =  {
	title: 'Controls/Button Group',
	component: ButtonGroup,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: defaultProps.color
		},
		appearance: {
		  defaultValue: defaultProps.appearance
		},
		size: {
		  defaultValue: defaultProps.size
		}
	}
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

const Template = ({...args}) => <ButtonGroup {...args} >
									<Button icon="plus" />
									<Button icon="minus" />
									<Button icon="info" />
									<Button align="right">Confirmer</Button>
									<Button appearance="border">Annuler</Button>
								</ButtonGroup>

export const Default: Story = {
	render: Template,
  	args:{
    	appearance: 'fill'
  	}
}