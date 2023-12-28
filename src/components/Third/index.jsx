import { useTranslation } from "react-i18next"
import "./style.css"

export function Third() {
    const {t,i18n} = useTranslation()
    return(
        <div className="Third">
            <h1>{t("Third.0")}</h1>
            <p>{t("Third.1")}</p>
            <div>
                <span>
                    <i class="fa-solid fa-star"></i>
                    <h2>{t("Third.2")}</h2>
                    <p>{t("Third.3")}</p>
                </span>
                <span>
                    <i class="fa-solid fa-truck-fast"></i>
                    <h2>{t("Third.4")}</h2>
                    <p>{t("Third.5")}</p>
                </span>
                <span>
                    <i class="fa-regular fa-clock"></i>
                    <h2>{t("Third.6")}</h2>
                    <p>{t("Third.7")}</p>
                </span>
            </div>
        </div>
    )
}