import { useTranslation } from "react-i18next"
import "./style.css"
import { useNavigate } from "react-router-dom"

export function First() {
    const navlink = useNavigate()
    const {t, i18n} = useTranslation()
    return(
        <div className="First" id="1">
            <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1703695182/BNBM%20trade-gypsum/2_5319102943515917464_2_jk1bca.png" alt="img" />
            <span>
                <h1>{t("First.0")}</h1>
                <p>{t("First.1")}</p>
                <button onClick={() => window.location.href="/#2"}>{t("First.2")}</button>
            </span>
        </div>
    )
}