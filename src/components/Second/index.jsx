import { useTranslation } from "react-i18next"
import "./style.css"

export function Second() {
    const {t,i18n} = useTranslation()
    return(
        <div className="Second">
            <h1>{t("Second.0")}</h1>
            
        </div>
    )
}