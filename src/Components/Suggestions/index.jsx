import React, { useContext } from 'react'
import { Button } from '..'
import { GLOBAL } from '../../Config/global'
import { UserContext } from '../../Store/userContext';

const Suggestions = () => {
    const [user, setUser] = useContext(UserContext)

    return (
        <div className="suggestions">
            <div className="suggestions__title">
                <h2>{GLOBAL.SUGGESTIONS.WHO_TO_FOLLOW}</h2>
            </div>
            {
                user.slice(0, 3).map(u => (
                    <div className="suggestions__follow-suggestion">
                        <div className="suggestions__follow-suggestion__profile-picture">
                            <img className="suggestions__follow-suggestion__profile-picture__img" src={u.url} alt={u.url} width="50" />
                        </div>
                        <div className="suggestions__follow-suggestion__flex">
                            <div className="suggestions__follow-suggestion__flex__account">
                                <p className="suggestions__follow-suggestion__flex__account__p">{u.name}</p>
                                <span className="suggestions__follow-suggestion__flex__account__span">{u.account}</span>
                            </div>
                            <div className="suggestions__follow-suggestion__flex__follow">
                                <Button className="suggestions__follow-suggestion__flex__follow__button" description="Seguir" />
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="suggestions__show-more">
                <a className="suggestions__show-more__a" href="#!">{GLOBAL.SUGGESTIONS.SHOW_MORE}</a>
            </div>
        </div>
    )
}

export default Suggestions
