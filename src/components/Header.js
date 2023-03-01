import React from 'react'
import Select from './Select'
import Search from './Search'
import { sortByOptions } from '../constants'

import './Header.scss'

const Header = () => {
    // Header section where we can find two options 
    // the select and the search elements
    return (
        <div className='headSection'>
            <div className='headContent'>
                <Select options={sortByOptions} />
                <Search />
            </div>
        </div>
    )
}

export default Header