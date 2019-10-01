import React, { useState } from 'react';
import { ProfilePic } from '../../Resources/Images/index';
import { Button, Textarea } from '../index'
import { GLOBAL } from '../../Config/global';

const NewTweet = () => {
    const handleKDown = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    return (
        <div className="newtweet">
            <div className="newtweet__header">
                <img src={ProfilePic} className="newtweet__header__pic" />
                <Textarea handleKeyDown={(e) => handleKDown(e)} type="text" name="newtweet" className="newtweet__header__textarea" placeholder="¿Qué está pasando?" />
            </div>
            <div className="newtweet__bottom">
                <div className="newtweet__bottom__left">
                    <Button className="newtweet__bottom__left__button" icon={<i className="far fa-image newtweet__bottom__left__icons"></i>} />
                    <Button className="newtweet__bottom__left__button" icon={<i className="fas fa-image newtweet__bottom__left__icons"></i>} />
                    <Button className="newtweet__bottom__left__button" icon={<i className="fas fa-poll-h newtweet__bottom__left__icons"></i>} />
                    <Button className="newtweet__bottom__left__button" icon={<i className="far fa-smile newtweet__bottom__left__icons"></i>} />
                </div>
                <div className="newtweet__bottom__right">
                    <i className="far fa-circle newtweet__bottom__right__icons newtweet__bottom__right__icons--circle"></i>
                    <span className="newtweet__bottom__right__span">|</span>
                    <Button className="newtweet__bottom__right__button" icon={<i className="fas fa-plus-circle newtweet__bottom__right__icons newtweet__bottom__right__icons--plus"></i>} />
                    <Button className="newtweet__bottom__right__button newtweet__bottom__right__button--twit" description={GLOBAL.SIDEBAR.BUTTON_TWIT} />
                </div>
            </div>
        </div>
    )
}

export default NewTweet;
