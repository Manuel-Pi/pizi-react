import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { ButtonGroup, ButtonGroupProps } from './ButtonGroup'
import { Button } from '../Button/Button';
import { defaultProps } from '../PiziComponent/PiziComponent';

export default {
	title: 'Button Group',
	component: ButtonGroup,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		theme: {
		  defaultValue: defaultProps.theme
		},
		appearance: {
		  defaultValue: defaultProps.appearance
		},
		buttonAppearance: {

		},
		size: {
		  defaultValue: defaultProps.size
		}
	}
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} >
														<Button icon="plus" />
														<Button icon="minus" />
														<Button icon="info" />
														<Button align="right">Confirmer</Button>
														<Button appearance="border">Annuler</Button>
													</ButtonGroup>

export const Default = Template.bind({});
Default.args = {
	appearance: 'fill'
};





