import React from 'react'
import { Button } from '..'

const Suggestions = () => {
    const url ='https://pbs.twimg.com/profile_images/1113629235082608641/fkvxiwJk_400x400.png'

    return (
        <div className="suggestions">
            <div className="suggestions__title">
                <h2>A quién seguir</h2>
            </div>
            <div className="suggestions__follow-suggestion">
                <div className="suggestions__follow-suggestion__profile-picture">
                    <img className="suggestions__follow-suggestion__profile-picture__img" src={url} alt={url} width="50" />
                </div>
                <div className="suggestions__follow-suggestion__flex">
                    <div className="suggestions__follow-suggestion__flex__account">
                        <p className="suggestions__follow-suggestion__flex__account__p">Account Name</p>
                        <span className="suggestions__follow-suggestion__flex__account__span">@account_name</span>
                    </div>
                    <div className="suggestions__follow-suggestion__flex__follow">
                        <Button className="suggestions__follow-suggestion__flex__follow__button" description="Seguir" />
                    </div>
                </div>
            </div>
            <div className="suggestions__follow-suggestion">
                <div className="suggestions__follow-suggestion__profile-picture">
                    <img className="suggestions__follow-suggestion__profile-picture__img" src={url} alt={url} width="50" />
                </div>
                <div className="suggestions__follow-suggestion__flex">
                    <div className="suggestions__follow-suggestion__flex__account">
                        <p className="suggestions__follow-suggestion__flex__account__p">Account Name</p>
                        <span className="suggestions__follow-suggestion__flex__account__span">@account_name</span>
                    </div>
                    <div className="suggestions__follow-suggestion__flex__follow">
                        <Button className="suggestions__follow-suggestion__flex__follow__button" description="Seguir" />
                    </div>
                </div>
            </div>
            <div className="suggestions__show-more">
                <a className="suggestions__show-more__a" href="#!">Mostrar más</a>
            </div>
        </div>
    )
}

export default Suggestions
