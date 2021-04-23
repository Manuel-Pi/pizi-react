import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { defaultProps } from '../PiziComponent/PiziComponent';
import { TextInput } from './TextInput';

export default {
	title: 'Forms/TextInput',
	component: TextInput,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: defaultProps.color
		}
	}
} as Meta;


const Template: Story<any> = ({...args}) => <TextInput {...args}></TextInput>


export const Default = Template.bind({});
Default.args = {
	label:"Label du text input",
	placeholder: "type value here ..."
};