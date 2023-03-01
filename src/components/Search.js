import React, {useContext, useState} from 'react'
import { AppContext } from '../context/AppContext'
import { mainIcons } from '../assets/SectionIcons'

import './Search.scss'

const Search = () => {
    // Search element is to find the typed text in the user list
    // You can search by Name or by Country
    
    const defaultValue = 'Search by name or country...'
    const [value, setValue] = useState(defaultValue)
    const {
        setUserListContext,
        userList,
        userListCopy,
    } = useContext(AppContext)

    // Handle the input text
    const handleOnChange = (e) => {
        const inputValue = e.target.value.toLowerCase()

        // Wait until to has at least the three caracters to start to search 
        if (inputValue.length > 3) {
            const data = userList.filter((item) => {
                const name = item.name.toLowerCase()
                const country = item.country.toLowerCase()
                // Using the name and the country fields for searching
                return name.indexOf(inputValue) !== -1 || country.indexOf(inputValue) !== -1
            })

            setUserListContext(data)
        } else {
            setUserListContext(userListCopy)
        }

        setValue(inputValue)
    }
    
    const handleOnFocus = () => {
        setValue('')
    }
    // Restore the list on focus out
    const handleOnBlur = () => {
        setUserListContext(userListCopy)
        setValue(defaultValue)
    }

    return (
        <div className='searchContent'>
            <input
                className='find'
                type='text'
                id='find'
                name='find'
                value={value}
                onChange={handleOnChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
            />
            <img className='findIcon' src={mainIcons.iconSearch} alt='Edit user' />
        </div>
    )
}

export default Search
