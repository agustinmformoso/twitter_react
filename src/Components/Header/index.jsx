import React, { useState, useRef, useEffect } from 'react';

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
                Inicio
            </span>
            <span className="header__icon" ref={node} onClick={() => setDropdown(!dropdown)}>
                <i class="far fa-star"></i>
            </span>
            {dropdown && (<div className="header__dropdown">
                <div className="header__dropdown__top">
                    <img className="header__dropdown__top__img" src="highlight.png" alt="" />
                    <h3 className="header__dropdown__top__title">Inicio te muestra los Tweets destacados primero</h3>
                </div>
                <div className="header__dropdown__bottom">
                    <span className="header__dropdown__bottom__span">
                        <i class="fas fa-exchange-alt header__dropdown__bottom__span__icon"></i>
                        <div>
                            <p className="header__dropdown__bottom__span__p">Cambiar a la vista de Tweets más recientes</p>
                            <p className="header__dropdown__bottom__span__info">Si estás inactivo durante un tiempo, volverás a Inicio.</p>
                        </div>
                    </span>
                    <span className="header__dropdown__bottom__span">
                        <i className="fas fa-cog header__dropdown__bottom__span__icon"></i>
                        <p className="header__dropdown__bottom__span__p">Ver preferencias de contenido</p></span>
                </div>
            </div>
            )}
        </div>
    )
}

export default Header;
