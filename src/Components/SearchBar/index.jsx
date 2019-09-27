import React, { useState, useEffect, useRef } from 'react'
import { Button } from '..'
import accounts from '../../Store/accounts.json'

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

    const renderAccounts = (accounts) => {
        return (
            <div className="searchbar__dropdown__accounts-container__account-search">
                <div className="searchbar__dropdown__accounts-container__account-search__profile-picture">
                    <img className="searchbar__dropdown__accounts-container__account-search__profile-picture__img" src={accounts.url} alt={accounts.url} width={50} />
                </div>
                <div className="searchbar__dropdown__accounts-container__account-search__account">
                    <span className="searchbar__dropdown__accounts-container__account-search__account__span">{accounts.name.substring(0, 20)}</span>
                    <p className="searchbar__dropdown__accounts-container__account-search__account__p">{accounts.account}</p>
                </div>
            </div>
        )
    }

    const renderHashtags = (accounts) => {
        return (
            <div className="searchbar__dropdown__hashtag-search">
                <p className="searchbar__dropdown__hashtag-search__p">{accounts.hashtag}</p>
                {accounts.isTrend && <span className="searchbar__dropdown__hashtag-search__span">Tendencias</span>}
            </div>
        )
    }

    const filteredAccounts = accounts.accounts.filter(i => {
        return i.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || i.account.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })

    const filteredTrends = accounts.trends.filter(i => {
        return i.hashtag.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })

    return (
        <div ref={node} className="searchbar">
            <div className={`searchbar__search ${isActive}`} onClick={(e) => setOpen(!open)}>
                <i className="fas fa-search searchbar__search__i"></i>
                <input onChange={handleChange} className="searchbar__search__input" type="text" placeholder="Buscar en Twitter" />
                {
                    search && isActive ? <Button className="searchbar__search__input__button" icon={<i class="fas fa-times-circle searchbar__search__input__button__i"></i>}></Button> : null
                }
            </div>
            {open && (
                <div className="searchbar__dropdown">
                    {
                        search === '' ?
                        <p className="searchbar__dropdown__p">Intenta buscar personas, temas o palabras clave</p>
                        : null
                    }
                    {
                        search ?
                        filteredTrends.slice(0, 3).map(i => {
                            return renderHashtags(i);
                        })
                        : null
                    }
                    <div className="searchbar__dropdown__accounts-container">
                        {
                            search ?
                            filteredAccounts.map(i => {
                                return renderAccounts(i);
                            })
                            : null
                        }
                    </div>
                    {
                        search &&
                        filteredAccounts ? <p className="searchbar__dropdown--go-to">Ir a @{search}</p>
                        : null
                    }
                </div>
            )}
        </div>
    )
}

export default SearchBar
