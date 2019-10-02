import React from 'react';
import Button from '../Button';
import { GLOBAL } from '../../Config/global';
import { ProfilePic } from '../../Resources/Images/index';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__box">
            <Button className="sidebar__box__button" description="" src="" imgClassname="fab fa-twitter sidebar__box__button__icon sidebar__box__button__icon--twitter"/>
            <Button className="sidebar__box__button sidebar__box__button--active" description={GLOBAL.SIDEBAR.BUTTON_HOME} src="" imgClassname="fas fa-home sidebar__box__button__icon"/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_EXPLORE} src="" imgClassname="fas fa-hashtag sidebar__box__button__icon"/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_NOTIF} src="" imgClassname="far fa-bell sidebar__box__button__icon"/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_DM} src="" imgClassname="far fa-envelope sidebar__box__button__icon"/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_SAVED} src="" imgClassname="far fa-bookmark sidebar__box__button__icon"/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_LISTS} src="" imgClassname="far fa-list-alt sidebar__box__button__icon"/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_PROFILE} src={ProfilePic} imgClassname="sidebar__box__button__icon sidebar__box__button__icon--profile"/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_OPTIONS} src="" imgClassname="fas fa-ellipsis-h sidebar__box__button__icon"/>
            <Button className="sidebar__box__button sidebar__box__button--twit" description={GLOBAL.SIDEBAR.BUTTON_TWIT}/>
            </div>
        </div>
    )
}

export default Sidebar;
