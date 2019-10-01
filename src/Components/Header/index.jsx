import React, { useState, useRef, useEffect } from 'react';
import { GLOBAL } from '../../Config/global';
import { HeaderDropdownIcon } from '../../Resources/Images/index';

const Header = () => {
    const node = useRef()
    const [dropdown, setDropdown] = useState(false);

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            return;
        }
        setDropdown(false)
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);

        }
    }, [])

    return (
        <div className="header">
            <span className="header__text">
                {GLOBAL.HEADER.HEADER_HOME}
            </span>
            <span className="header__icon" ref={node} onClick={() => setDropdown(!dropdown)}>
                <i className="far fa-star"></i>
            </span>
            {dropdown && (<div className="header__dropdown">
                <div className="header__dropdown__top">
                    <img className="header__dropdown__top__img" src={HeaderDropdownIcon} alt="" />
                    <h3 className="header__dropdown__top__title">{GLOBAL.HEADER.DROPDOWN_TOP}</h3>
                </div>
                <div className="header__dropdown__bottom">
                    <span className="header__dropdown__bottom__span">
                        <i className="fas fa-exchange-alt header__dropdown__bottom__span__icon"></i>
                        <div>
                            <p className="header__dropdown__bottom__span__p">{GLOBAL.HEADER.DROPDOWN_SPAN_1}</p>
                            <p className="header__dropdown__bottom__span__info">{GLOBAL.HEADER.DROPDOWN_SPAN_1_INFO}</p>
                        </div>
                    </span>
                    <span className="header__dropdown__bottom__span">
                        <i className="fas fa-cog header__dropdown__bottom__span__icon"></i>
                        <p className="header__dropdown__bottom__span__p">{GLOBAL.HEADER.DROPDOWN_SPAN_2}</p></span>
                </div>
            </div>
            )}
        </div>
    )
}

export default Header;
