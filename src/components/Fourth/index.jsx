import { useTranslation } from "react-i18next"
import "./style.css"

export function Fourth() {
    const {t,i18n} = useTranslation()
    return(
        <div className="Fourth" id="4">
            <h1>{t("Fourth.0")}</h1>
            <div className="projectsHead">
                <div className="projects">
                    <span>
                        <img src="https://www.americangypsum.com/sites/default/files/CLASSICROC-Gypsum-Wallboard-American-Gypsum.jpg" alt="" />
                        <div className="projectsTexts">
                            <h2>Glory</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                        </div>
                    </span>
                    <span>
                        <img src="https://www.americangypsum.com/sites/default/files/CLASSICROC-Gypsum-Wallboard-American-Gypsum.jpg" alt="" />
                        <div className="projectsTexts">
                            <h2>Glory</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                        </div>
                    </span>
                    <span>
                        <img src="https://www.americangypsum.com/sites/default/files/CLASSICROC-Gypsum-Wallboard-American-Gypsum.jpg" alt="" />
                        <div className="projectsTexts">
                            <h2>Glory</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}