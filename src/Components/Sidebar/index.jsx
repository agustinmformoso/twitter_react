import React from 'react';
import Button from '../Button';
import { GLOBAL } from '../../Config/global';
import { ProfilePic } from '../../Resources/Images/index';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__box">
            <Button className="sidebar__box__button" description="" icon={<i className="fab fa-twitter sidebar__box__button__icon sidebar__box__button__icon--twitter"></i>}/>
            <Button className="sidebar__box__button sidebar__box__button--active" description={GLOBAL.SIDEBAR.BUTTON_HOME} icon={<i className="fas fa-home sidebar__box__button__icon"></i>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_EXPLORE} icon={<i className="fas fa-hashtag sidebar__box__button__icon"></i>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_NOTIF} icon={<i className="far fa-bell sidebar__box__button__icon"></i>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_DM} icon={<i className="far fa-envelope sidebar__box__button__icon"></i>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_SAVED} icon={<i className="far fa-bookmark sidebar__box__button__icon"></i>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_LISTS} icon={<i className="far fa-list-alt sidebar__box__button__icon"></i>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_PROFILE} icon={<img src={ProfilePic} className="sidebar__box__button__icon sidebar__box__button__icon--profile"/>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_OPTIONS} icon={<i className="fas fa-ellipsis-h sidebar__box__button__icon"></i>}/>
            <Button className="sidebar__box__button sidebar__box__button--twittear" description="Twittear"/>
            </div>
        </div>
    )
}

export default Sidebar;
