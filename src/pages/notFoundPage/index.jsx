import { useTranslation } from "react-i18next"
import "./style.css"
import { useNavigate } from "react-router-dom"

export function NotFoundPage() {
    const {t,i18n} = useTranslation()
    const navlink = useNavigate()
    return(
        <div className="NotFoundPage">
            <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1704220226/BNBM%20trade-gypsum/not-found-removebg_a3iy4g.png" alt="notFound" />
            <h1>{t("NotFound.0")}</h1>
            <button onClick={() => navlink("/")}><i class="fa-solid fa-arrow-left"></i>{t("NotFound.1")}</button>
        </div>
    )
}