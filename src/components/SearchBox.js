import React, { useState } from 'react'
const SearchBox = (props) => {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault()
        props.onSearch(query)
    }
    return (
        <div className='searchbox'>
            <form onSubmit={handleSearch}>
                <input type='text' placeholder='serach github user'
                    value={query} onChange={(event) => setQuery(event.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SearchBox