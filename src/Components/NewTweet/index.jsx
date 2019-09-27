import React from 'react';
import './styles.scss'
import { ProfilePic } from '../../Resources/Images/index';
import Button from '../Button';
import { GLOBAL } from '../../Config/global';

const NewTweet = () => {
    return (
        <div className="newtweet">
            <div className="newtweet__header">
                <img src={ProfilePic} className="newtweet__header__pic" />
                <span>¿Qué está pasando?</span>
            </div>
            <div className="newtweet__bottom">
                <div className="newtweet__bottom__left">
                    <i className="far fa-image newtweet__bottom__left__icons"></i>
                    <i className="fas fa-image newtweet__bottom__left__icons"></i>
                    <i className="fas fa-poll-h newtweet__bottom__left__icons"></i>
                    <i className="far fa-smile newtweet__bottom__left__icons"></i>
                </div>
                <div className="newtweet__bottom__right">
                    <i className="far fa-circle newtweet__bottom__right__icons newtweet__bottom__right__icons--circle"></i>
                    <span className="newtweet__bottom__right__span">|</span>
                    <Button className="newtweet__bottom__right__button" icon={<i className="fas fa-plus-circle newtweet__bottom__right__icons newtweet__bottom__right__icons--plus"></i>}/>
                    <Button className="newtweet__bottom__right__button newtweet__bottom__right__button--twit" description={GLOBAL.SIDEBAR.BUTTON_TWIT} />
                </div>
            </div>
        </div>
    )
}

export default NewTweet;
