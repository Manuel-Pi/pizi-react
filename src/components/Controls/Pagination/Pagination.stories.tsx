import React from 'react'
import { Pagination } from './Pagination'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Table } from '../../Data/Table/Table'
import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Pagination> =  {
	title: 'Controls/Pagination',
	component: Pagination,
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
		itemPerPage: {
			defaultValue: 10
		}
	}
}
  
export default meta
type Story = StoryObj<typeof Pagination>

const header = ["header 1", "header 2", "header 3", "header 4"]

const createData = (lines = 100, columns = 4) => {
	let data = [];
	for(let i = 0; i < lines; i++){
		const dataLine = [];
		for(let j = 0; j < columns; j++) dataLine.push("data fake test " + i + "" + j)
		data.push(dataLine);
	}
	return data
}

const Template = (props: any) => {
	const [paginatedData, setData] = useState(props.data)
	return 	<>
				<Table header={header} data={paginatedData}></Table>
				<div style={{height:"10px"}}></div>
				<Pagination {...props} onChange={setData}/>
			</>
}

export const Default: Story = {
	render: Template,
	args: {
		data: createData()
	}
}