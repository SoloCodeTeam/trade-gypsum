import { useNavigate } from "react-router-dom"
import "./style.css"
import { useTranslation } from "react-i18next"

export function AdminHome() {
    const {t,i18n} = useTranslation()
    const navlink = useNavigate()
    const toNavigate = (e) => {
        navlink(e.target.id)
    } 
    return(
        <div className="AdminHome">
            <h1>{t("Admin.0")}</h1>
            <div>
                <span>
                    <h2><i class="fa-solid fa-database"></i> {t("Admin.3")}</h2>
                    <p>{t("AdminHome.0")}</p>
                    <button id="/admin/data" onClick={toNavigate}>{t("AdminHome.1")} <i id="/admin/data" class="fa-solid fa-arrow-right"></i></button>
                </span>
                <span>
                    <h2><i class="fa-solid fa-user-tie"></i> {t("Admin.2")}</h2>
                    <p>{t("AdminHome.0")}</p>
                    <button id="/admin/admin" onClick={toNavigate}>{t("AdminHome.2")} <i id="/admin/admin" class="fa-solid fa-arrow-right"></i></button>
                </span>
                <span>
                    <h2><i class="fa-regular fa-comment"></i> {t("Admin.4")}</h2>
                    <p>{t("AdminHome.0")}</p>
                    <button id="/admin/message" onClick={toNavigate}>{t("AdminHome.3")} <i id="/admin/message" class="fa-solid fa-arrow-right"></i></button>
                </span>
            </div>
        </div>
    )
}