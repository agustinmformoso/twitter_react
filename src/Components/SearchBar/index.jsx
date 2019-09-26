import React from 'react'

const SearchBar = () => {
    return (
        <div className="searchbar">
            <i className="fas fa-search searchbar__i"></i>
            <input className="searchbar__input" type="text" placeholder="Buscar en Twitter" />
        </div>
    )
}

export default SearchBar
