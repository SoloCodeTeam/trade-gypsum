import "./style.css"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";

export function Navbar() {
    const navlink = useNavigate()
    const { t, i18n } = useTranslation();
    return(
        <div className="Navbar">
            <h1>Trade gypsum</h1>
            <div>
                <button onClick={() => navlink("/")}>{t("Navbar.0")}</button>
                <button onClick={() => navlink("/more")}>{t("Navbar.1")}</button>
                <button onClick={() => navlink("/")}>{t("Navbar.2")}</button>
                <a href="tel:+998900000000">{t("Navbar.3")}</a>
                <select onChange={(e) => { window.localStorage.setItem("i18nextLng", e.target.value);window.location.reload()}}>
                    <option value={window.localStorage.getItem("i18nextLng") == "uz" ? "uz" : "ru"}>{window.localStorage.getItem("i18nextLng") == "uz" ? "UZ" : "RU"}</option>
                    <option value={window.localStorage.getItem("i18nextLng") == "ru" ? "uz" : "ru"}>{window.localStorage.getItem("i18nextLng") == "ru" ? "UZ" : "RU"}</option>
                </select>
            </div>
            <div className="navSide">
                <button onClick={() => navlink("/")}>{t("Navbar.0")}</button>
                <button onClick={() => navlink("/more")}>{t("Navbar.1")}</button>
                <button onClick={() => navlink("/")}>{t("Navbar.2")}</button>
                <a href="tel:+998900000000">{t("Navbar.3")}</a>
            </div>
        </div>
    )
}