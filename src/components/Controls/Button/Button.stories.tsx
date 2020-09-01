import React from 'react'
import { Button } from './Button'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> =  {
  title: 'Controls/Button',
  component: Button,
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
    },
    icon:{},
    iconLeft: {},
    iconRight: {},
    align:{}
  }
}

export default meta
type Story = StoryObj<typeof Button>

const Template = ({...args}) => <Button {...args} >Test Button</Button>

export const Default: Story = {
	render: Template
}

export const Disabled: Story = {
	render: Template,
  args:{
    disabled: true
  }
}

export const Icon: Story = {
	render: Template,
  args:{
    icon: "check"
  }
}

export const IconRight: Story = {
	render: Template,
  args:{
    iconRight: "check"
  }
}

export const IconLeft: Story = {
	render: Template,
  args:{
    iconLeft: "check"
  }
}