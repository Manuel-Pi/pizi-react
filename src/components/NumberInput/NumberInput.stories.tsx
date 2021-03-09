import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { defaultProps } from '../PiziComponent/PiziComponent';
import { NumberInput } from './NumberInput';

export default {
	title: 'Forms/NumberInput',
	component: NumberInput,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: defaultProps.color
		},
		appearance: {
		  defaultValue: defaultProps.appearance
		}
	}
} as Meta;


const Template: Story<any> = ({...args}) => <NumberInput {...args}></NumberInput>


export const Default = Template.bind({});
Default.args = {
	label:"Label du number input",
};