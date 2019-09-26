import React from 'react'
import { Button } from '..'

const Suggestions = () => {
    return (
        <div className="suggestions">
            <div className="suggestions__title">
                <h2>A quién seguir</h2>
            </div>
            <div className="suggestions__follow-suggestion">
                <div className="suggestions__follow-suggestion__profile-picture">
                    <img />
                </div>
                <div className="suggestions__follow-suggestion__account">
                    <p className="suggestions__follow-suggestion__account__p">Account Name</p>
                    <span className="suggestions__follow-suggestion__account__span">@account_name</span>
                </div>
                <div className="suggestions__follow-suggestion__follow">
                    <Button className="suggestions__follow-suggestion__follow__button" description="Seguir" />
                </div>
            </div>
            <div className="suggestions__show-more">
                <a className="suggestions__show-more__a" href="#!">Mostrar más</a>
            </div>
        </div>
    )
}

export default Suggestions
