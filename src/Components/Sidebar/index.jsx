import React from 'react';
import './styles.css';
import ButtonNav from '../ButtonNav';
import { GLOBAL } from '../../Config/global';

const Sidebar = () => {
    return (
        <div className="d-inline-flex flex-column">
            <ButtonNav description=""/>
            <ButtonNav description={GLOBAL.SIDEBAR.BUTTON_HOME}/>
            <ButtonNav description={GLOBAL.SIDEBAR.BUTTON_EXPLORE}/>
            <ButtonNav description={GLOBAL.SIDEBAR.BUTTON_NOTIF}/>
            <ButtonNav description={GLOBAL.SIDEBAR.BUTTON_DM}/>
            <ButtonNav description={GLOBAL.SIDEBAR.BUTTON_SAVED}/>
            <ButtonNav description={GLOBAL.SIDEBAR.BUTTON_LISTS}/>
            <ButtonNav description={GLOBAL.SIDEBAR.BUTTON_PROFILE}/>
            <ButtonNav description={GLOBAL.SIDEBAR.BUTTON_OPTIONS}/>
        </div>
    )
}

export default Sidebar;
