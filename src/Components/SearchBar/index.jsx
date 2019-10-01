import React, { useState, useEffect, useRef, useContext } from 'react'
import { Button } from '..'
import { UserContext } from '../../Store/userContext'
import { TrendContext } from '../../Store/trendContext'
import useDropdown from '../../Hooks/useDropdown'
import { GLOBAL } from '../../Config/global'

const SearchBar = () => {
    const [user, setUser] = useContext(UserContext)
    const [trend, setTrend] = useContext(TrendContext)
    const [search, setSearch] = useState('')
    const { node, open, setOpen, isActive } = useDropdown()
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClose = () => {
        setSearch('')
    }

    const renderAccounts = (user) => {
        return (
            <div className="searchbar__dropdown__accounts-container__account-search">
                <div className="searchbar__dropdown__accounts-container__account-search__profile-picture">
                    <img className="searchbar__dropdown__accounts-container__account-search__profile-picture__img" src={user.url} alt={user.url} width={50} />
                </div>
                <div className="searchbar__dropdown__accounts-container__account-search__account">
                    <span className="searchbar__dropdown__accounts-container__account-search__account__span">{user.name.substring(0, 20)}</span>
                    <p className="searchbar__dropdown__accounts-container__account-search__account__p">{user.account}</p>
                </div>
            </div>
        )
    }

    const renderHashtags = (trend) => {
        return (
            <div className="searchbar__dropdown__hashtag-search">
                <p className="searchbar__dropdown__hashtag-search__p">{trend.hashtag}</p>
                {trend.isTrend && <span className="searchbar__dropdown__hashtag-search__span">{GLOBAL.SEARCHBAR.TRENDS}</span>}
            </div>
        )
    }

    const filteredAccounts = user.filter(i => {
        return i.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || i.account.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })

    const filteredTrends = trend.filter(i => {
        return i.hashtag.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })

    return (
        <div ref={node} className="searchbar">
            <div className={`searchbar__search ${isActive}`} onClick={(e) => setOpen(!open)}>
                <i className="fas fa-search searchbar__search__i"></i>
                <input autoComplete="off" name="busqueda" value={search} onChange={handleChange} className="searchbar__search__input" type="text" placeholder="Buscar en Twitter" />
                {
                    search && isActive ? <Button className="searchbar__search__input__button" icon={<i onClick={() => handleClose()} className="fas fa-times-circle searchbar__search__input__button__i"></i>}></Button> : null
                }
            </div>
            {open && (
                <div className="searchbar__dropdown">
                    {
                        search === '' ?
                        <p className="searchbar__dropdown__p">{GLOBAL.SEARCHBAR.DROPTDOWN}</p>
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
                        filteredAccounts ? <p className="searchbar__dropdown--go-to">{GLOBAL.SEARCHBAR.GO_TO}{search}</p>
                        : null
                    }
                </div>
            )}
        </div>
    )
}

export default SearchBar
