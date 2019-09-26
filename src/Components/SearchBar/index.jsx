import React, { useState } from 'react'

const SearchBar = () => {
    const [isClicked, setIsClicked] = useState()
    const [dropdown, setDropdown] = useState()


    const handleClick = (isClicked) => {
        setIsClicked(true)

        if (isClicked) {
            setDropdown((
                <div className="searchbar__dropdown">
                    <p className="searchbar__dropdown__p">Intenta buscar personas, temas o palabras clave</p>
                </div>
            ))
        }
    }

    return (
        <div onClick={handleClick} className="searchbar">
            <div className="searchbar__search">
                <i className="fas fa-search searchbar__search__i"></i>
                <input className="searchbar__search__input" type="text" placeholder="Buscar en Twitter" />
            </div>
            {dropdown}
        </div>
    )
}

export default SearchBar
