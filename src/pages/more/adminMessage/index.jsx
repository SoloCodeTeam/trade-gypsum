import { useTranslation } from "react-i18next"
import "./style.css"

export function AdminMessage() {
    const height = window.screen.height -125
    const {t,i18n} = useTranslation()
    return(
        <div className="AdminMessage" style={{height: `${height}px`}}>
            <img src="https://www.paved.com/blog/wp-content/uploads/2022/03/email-marketing.png" alt="image" />
            <h1>{t("AdminMessage.0")}<span>{t("AdminMessage.1")}</span></h1>
        </div>
    )
}