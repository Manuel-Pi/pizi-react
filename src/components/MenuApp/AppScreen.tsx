import { RouteComponentProps } from '@reach/router';
import React from 'react';

export interface AppScreenProps extends RouteComponentProps{
	title: string
	icon: string
}
