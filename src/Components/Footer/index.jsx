import React, { useState, useRef, useEffect } from 'react'
import { GLOBAL } from '../../Config/global'

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
            <a className="footer__a" href="#!">{GLOBAL.FOOTER.TERMS}</a>
            <a className="footer__a" href="#!">{GLOBAL.FOOTER.PRIVACY_POLICY}</a>
            <a className="footer__a" href="#!">{GLOBAL.FOOTER.COOKIES}</a>
            <a className="footer__a" href="#!">{GLOBAL.FOOTER.ADS_INFO}</a>
            <a className="footer__a" ref={node} onClick={(e) => setOpen(!open)} href="#!">{GLOBAL.FOOTER.MORE} <i class="fas fa-chevron-down"></i></a>
            {
                open && (
                <div className="footer__dropdown">
                    <ul className="footer__dropdown__ul">
                        <li className="footer__dropdown__ul__li">{GLOBAL.FOOTER.ABOUT}</li>
                        <li className="footer__dropdown__ul__li">{GLOBAL.FOOTER.STATUS}</li>
                        <li className="footer__dropdown__ul__li">{GLOBAL.FOOTER.BUSINESSES}</li>
                        <li className="footer__dropdown__ul__li">{GLOBAL.FOOTER.DEVELOPERS}</li>
                    </ul>
                </div>
            )}
            <span className="footer__span">&#169; {GLOBAL.FOOTER.COPY}</span>
        </div>
    )
}

export default Footer
