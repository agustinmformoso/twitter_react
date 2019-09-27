import React, { useState, useEffect, useRef } from 'react'

const SearchBar = () => {

    /* Heredar width del padre del dropdown */
    /* Clase --active  */

    const node = useRef()
    const [open, setOpen] = useState(false)
    const [isActive, setIsActive] = useState('')
    const [search, setSearch] = useState('')

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {  
            setIsActive('searchbar__search--active')
            return;
        }
        
        setOpen(false)
        setIsActive('')
    }

    const handleChange = (e) => {
        setSearch(e.target.value)

        console.log(search)
    }
    


    useEffect(() => {
            

        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick);
               
        }
    }, [])

    

    return (
        <div ref={node} className="searchbar">
            <div className={`searchbar__search ${isActive}`} onClick={(e) => setOpen(!open)}>
                <i className="fas fa-search searchbar__search__i"></i>
                <input onChange={handleChange} className="searchbar__search__input" type="text" placeholder="Buscar en Twitter" />
            </div>
            {open && (
                <div className="searchbar__dropdown">
                    <p className="searchbar__dropdown__p">Intenta buscar personas, temas o palabras clave</p>
                </div>
            )}
        </div>
    )
}

export default SearchBar
