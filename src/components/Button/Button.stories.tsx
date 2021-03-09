import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './Button'
import { defaultProps } from '../PiziComponent/PiziComponent';

export default {
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
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >Test Button</Button>

export const Default = Template.bind({});
Default.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Icon = Template.bind({});
Icon.args = {
  icon: "check"
};

export const IconRight = Template.bind({});
IconRight.args = {
  iconRight: "check"
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  iconLeft: "check"
};




