import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { sortBy } from '../utils'

import './Select.scss'

const Select = ({options}) => {
    const {
        setUserListContext,
        userList,
        userListCopy,
    } = useContext(AppContext)

    const handleOnChange = (e) => {
        const valueSelected = e.target.value
        // sortBy is method to sort the list
        if(valueSelected) {
            const sorted = sortBy(e.target.value, userList)
            setUserListContext([...sorted])
        } else {
            setUserListContext([...userListCopy])
        }
    }

    const handleOnBlur = (e) => {
        e.target[0].selected = true
        setUserListContext([...userListCopy])
    }

    return (
        <select className='select' name="filter" id="filter" defaultValue={''} onChange={handleOnChange} onBlur={handleOnBlur}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.text}</option>
            ))}
        </select>
    )
}

export default Select
