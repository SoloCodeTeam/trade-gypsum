import { useTranslation } from "react-i18next"
import "./style.css"

export function Fourth() {
    const {t,i18n} = useTranslation()
    return(
        <div className="Fourth" id="4">
            <h1>{t("Fourth.0")}</h1>
            <div className="projects">
                <span>
                    <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1703695179/BNBM%20trade-gypsum/2_5316851143702229533_fisaf0.png" alt="" />
                    <h2>Glory</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1703694765/BNBM%20trade-gypsum/logo_fppag4.png" alt="" />
                    <h2>Glory</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1703694765/BNBM%20trade-gypsum/logo_fppag4.png" alt="" />
                    <h2>Glory</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1703694765/BNBM%20trade-gypsum/logo_fppag4.png" alt="" />
                    <h2>Glory</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                </span>
            </div>
        </div>
    )
}