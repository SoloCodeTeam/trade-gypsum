import { useTranslation } from "react-i18next"
import "./style.css"
import { useRef } from "react"

export function Second() {
    const {t,i18n} = useTranslation()
    const modal = useRef()
    const overlay = useRef()
    return(
        <div className="Second" id="2">
           <div>
                <h1>{t("Second.0")}</h1>
                <p>{t("Second.1")}</p>
                <button onClick={() => {modal.current.style.top = "5%";overlay.current.style.display = "block"}}>{t("Second.2")}</button>
           </div>
            <video  autoPlay muted loop autobuffer >
                  <source src="https://res.cloudinary.com/ds9evspym/video/upload/v1703788846/BNBM%20trade-gypsum/bnbm_video_1_evpocu.mp4" type="video/mp4"/>
                  Your browser does not support HTML5 video.
            </video>
            <span ref={modal} onClick={() => {modal.current.style.top = "100%";overlay.current.style.display = "none"}}>
                 <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1703864617/BNBM%20trade-gypsum/about_tbqm28.jpg" alt="about" />
                <div>
                    <h2>{t("Second.3")}</h2>
                    <p>{t("Second.4")}</p>
                </div>
            </span>
            <div ref={overlay} onClick={() => {modal.current.style.top = "150%";overlay.current.style.display = "none"}} className="overlay"></div>
        </div>
    )
}