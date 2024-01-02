import "./style.css"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

export function Navbar() {
    const [bars, setBars] = useState(true)
    const navlink = useNavigate()
    const { t, i18n } = useTranslation();
    const modal = useRef()
    return(
        <div className="Navbar">
            <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1703694773/BNBM%20trade-gypsum/BNBM_xm0j8g.png" alt="logo" />
            <div>
                <button onClick={() => window.location.href="/#1"}>{t("Navbar.0")}</button>
                <button onClick={() => window.location.href="/#2"}>{t("Navbar.1")}</button>
                <button onClick={() => window.location.href="/#4"}>{t("Navbar.2")}</button>
                <a href="tel:+998900000000">{t("Navbar.3")}</a>
                <select onChange={(e) => { window.localStorage.setItem("i18nextLng", e.target.value);window.location.reload()}}>
                    <option value={window.localStorage.getItem("i18nextLng") == "uz" ? "uz" : "ru"}>{window.localStorage.getItem("i18nextLng") == "uz" ? "UZ" : "RU"}</option>
                    <option value={window.localStorage.getItem("i18nextLng") == "ru" ? "uz" : "ru"}>{window.localStorage.getItem("i18nextLng") == "ru" ? "UZ" : "RU"}</option>
                </select>
                {bars ? <i class="fa-solid fa-bars" onClick={() => {setBars(false);modal.current.style.top = "10vw"}}></i> :
                <i class="fa-solid fa-bars-staggered" onClick={() => {setBars(true);modal.current.style.top = "-50vw"}}></i>}
            </div>
            <div className="navSide" ref={modal}>
                <button onClick={() => {window.location.href="/#1";setBars(true);modal.current.style.top = "-50vw"}}>{t("Navbar.0")}</button>
                <button onClick={() => {window.location.href="/#2";setBars(true);modal.current.style.top = "-50vw"}}>{t("Navbar.1")}</button>
                <button onClick={() => {window.location.href="/#4";setBars(true);modal.current.style.top = "-50vw"}}>{t("Navbar.2")}</button>
                <a href="tel:+998900000000">{t("Navbar.3")}</a>
            </div>
        </div>
    )
}