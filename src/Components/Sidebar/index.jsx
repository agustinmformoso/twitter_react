import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { GLOBAL } from '../../Config/global';
import { ProfilePic } from '../../Resources/Images/index';

const Sidebar = ({ array }) => {
    const [fetchData, setFetchData] = useState();

    const fetchingData = array.menuArray;

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        if (fetchingData.length === 0) {
            setFetchData(
                <span>No hay datos</span>
            )
        } else {
            setFetchData(
                fetchingData.map((i) => (
                    <Button className={i.className} description={i.description} src={i.src} imgClassname={i.imgClassname} />
                ))
            )
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__box">
                {/* {fetchData} */}
            </div>
        </div>
    )
}

export default Sidebar;
