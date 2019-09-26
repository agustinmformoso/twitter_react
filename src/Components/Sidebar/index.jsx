import React from 'react';
import ButtonNav from '../ButtonNav';
import { GLOBAL } from '../../Config/global';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ButtonNav className="sidebar__button" description=""/>
            <ButtonNav className="sidebar__button" description={GLOBAL.SIDEBAR.BUTTON_HOME}/>
            <ButtonNav className="sidebar__button" description={GLOBAL.SIDEBAR.BUTTON_EXPLORE}/>
            <ButtonNav className="sidebar__button" description={GLOBAL.SIDEBAR.BUTTON_NOTIF}/>
            <ButtonNav className="sidebar__button" description={GLOBAL.SIDEBAR.BUTTON_DM}/>
            <ButtonNav className="sidebar__button" description={GLOBAL.SIDEBAR.BUTTON_SAVED}/>
            <ButtonNav className="sidebar__button" description={GLOBAL.SIDEBAR.BUTTON_LISTS}/>
            <ButtonNav className="sidebar__button" description={GLOBAL.SIDEBAR.BUTTON_PROFILE}/>
            <ButtonNav className="sidebar__button" description={GLOBAL.SIDEBAR.BUTTON_OPTIONS}/>
            <ButtonNav className="sidebar__button sidebar__button--twittear" description="Twittear"/>
        </div>
    )
}

export default Sidebar;
