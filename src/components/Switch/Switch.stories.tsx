import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { defaultProps } from '../PiziComponent/PiziComponent';
import { Switch } from './Switch';

export default {
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
} as Meta;


const Template: Story<any> = ({...args}) => <Switch {...args}></Switch>


export const Default = Template.bind({});
Default.args = {
	label:"Label du switch",
	defaultValue: true
};