import { useTranslation } from "react-i18next"
import "./style.css"

export function First() {
    const {t, i18n} = useTranslation()
    return(
        <div className="First">
            <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1703695182/BNBM%20trade-gypsum/2_5319102943515917464_2_jk1bca.png" alt="img" />
            <span>
                <h1>{t("First.0")}</h1>
                <p>{t("First.1")}</p>
                <button>{t("First.2")}</button>
            </span>
        </div>
    )
}