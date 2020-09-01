import React, { useState, useEffect } from 'react'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { ComponentProps, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import './pagination.less'

export interface PaginationProps extends Omit<ComponentProps, "onChange">{
    data?: {[key: string]:any}[]
    itemPerPage?: number
    defaultPage?: number
    onChange?: (data: {[key: string]:any}[]) => void
}

export const Pagination: React.FC<PaginationProps & React.HTMLAttributes<HTMLDivElement>> = ({
    data = [],
    defaultPage = 1,
    itemPerPage = 10,
    onChange = () => {},
	...props
}) => {
    props = InitProps(props)
    const [currentPage, setCurrentPage] = useState(defaultPage)

    const setPagination = (page: number) => {
        if(page < 1) page = 1
        if(page > data.length / itemPerPage) page = data.length / itemPerPage
        setCurrentPage(page)
    }

    useEffect(() => {
        let start = (currentPage - 1) * itemPerPage
        start = start < 0 ? 0 : start
        let end = currentPage * itemPerPage
        end = end > data.length ? data.length : end
        onChange(data.slice(start, end))
    }, [currentPage, data])

	return  <ButtonGroup className={"pizi-pagination"} {...props}>
                <Button icon="angle-double-left" disabled={currentPage === 1} onClick={() => setPagination(1)}/>
                <Button icon="angle-left" disabled={currentPage === 1} onClick={() => setPagination(currentPage - 1)}/>
                <span className="current-page">{currentPage}</span>
                <Button icon="angle-right" disabled={currentPage === data.length / itemPerPage}  onClick={() => setPagination(currentPage + 1)}/>
                <Button icon="angle-double-right" disabled={currentPage === data.length / itemPerPage} onClick={() => setPagination(data.length)}/>
            </ButtonGroup>
}

Pagination.defaultProps = {
    appearance: "simple"
}