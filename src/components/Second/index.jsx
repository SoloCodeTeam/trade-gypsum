import { useTranslation } from "react-i18next"
import "./style.css"

export function Second() {
    const {t,i18n} = useTranslation()
    return(
        <div className="Second" id="2">
           <div>
                <h1>{t("Second.0")}</h1>
                <p>{t("Second.1")}</p>
                <button>{t("Second.2")}</button>
           </div>
                <video autoPlay muted loop>
                      <source src="https://res.cloudinary.com/ds9evspym/video/upload/v1703788846/BNBM%20trade-gypsum/bnbm_video_1_evpocu.mp4" type="video/mp4"/>
                      Your browser does not support HTML5 video.
                </video>
        </div>
    )
}