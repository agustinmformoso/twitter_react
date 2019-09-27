import React, { useState, useRef, useEffect } from 'react'

const Footer = () => {
    const node = useRef()
    const [open, setOpen] = useState(false)

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {  
            return;
        }
        
        setOpen(false)
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick);
               
        }
    }, [])

    return (
        <div className="footer">
            <a className="footer__a" href="#!">Términos</a>
            <a className="footer__a" href="#!">Política de privacidad</a>
            <a className="footer__a" href="#!">Cookies</a>
            <a className="footer__a" href="#!">Información de anuncios</a>
            <a className="footer__a" ref={node} onClick={(e) => setOpen(!open)} href="#!">Más opciones <i class="fas fa-chevron-down"></i></a>
            {
                open && (
                <div className="footer__dropdown">
                    <ul className="footer__dropdown__ul">
                        <li className="footer__dropdown__ul__li">Acerca de</li>
                        <li className="footer__dropdown__ul__li">Estado</li>
                        <li className="footer__dropdown__ul__li">Empresas</li>
                        <li className="footer__dropdown__ul__li">Desarrolladores</li>
                    </ul>
                </div>
            )}
            <span className="footer__span">&#169; Twitter, Inc.</span>
        </div>
    )
}

export default Footer
