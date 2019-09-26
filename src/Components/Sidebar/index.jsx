import React from 'react';
import Button from '../Button';
import { GLOBAL } from '../../Config/global';
import { TwitterIcon, BellIcon, BookmarkIcon, EmailIcon, HashtagIcon, ListIcon, HomeIcon, DotsIcon, ProfilePic } from '../../Resources/Images/index';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__box">
            <Button className="sidebar__box__button" description="" icon={<img src={TwitterIcon} className="button_icon"/>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_HOME} icon={<img src={HomeIcon} className="button_icon"/>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_EXPLORE} icon={<img src={HashtagIcon} className="button_icon"/>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_NOTIF} icon={<img src={BellIcon} className="button_icon"/>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_DM} icon={<img src={EmailIcon} className="button_icon"/>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_SAVED} icon={<img src={BookmarkIcon} className="button_icon"/>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_LISTS} icon={<img src={ListIcon} className="button_icon"/>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_PROFILE} icon={<img src={ProfilePic} className="button_icon"/>}/>
            <Button className="sidebar__box__button" description={GLOBAL.SIDEBAR.BUTTON_OPTIONS} icon={<img src={DotsIcon} className="button_icon"/>}/>
            <Button className="sidebar__box__button sidebar__box__button--twittear" description="Twittear"/>
            </div>
        </div>
    )
}

export default Sidebar;
