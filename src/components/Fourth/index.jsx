import { useTranslation } from "react-i18next"
import "./style.css"
import { useRef } from "react"

export function Fourth() {
    const {t,i18n} = useTranslation()
    const projects = useRef()
    const spans = useRef()
    const Left = () => {
        console.log(projects.current.style.left.substr(1,2))
        console.log(projects.current);
        projects.current.style.left = `-30%`
        projects.current.map(e => {
            console.log(e);
        });
    }
    // const Right = () => {    
        
    // }
    return(
        <div className="Fourth" id="4">
            <h1>{t("Fourth.0")}</h1>
            <div className="projectsHead">
                <i className="fa-solid fa-chevron-left arrows" onClick={Left}></i>
                <div className="projects" ref={projects} style={{left: "30%"}}>
                    <span ref={spans} projectid="1">
                        <img src="https://www.americangypsum.com/sites/default/files/CLASSICROC-Gypsum-Wallboard-American-Gypsum.jpg" alt="" />
                        <div className="projectsTexts">
                            <h2>Glory</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                        </div>
                    </span>
                    <span ref={spans} projectid="2">
                        <img src="https://www.americangypsum.com/sites/default/files/CLASSICROC-Gypsum-Wallboard-American-Gypsum.jpg" alt="" />
                        <div className="projectsTexts">
                            <h2>Glory</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                        </div>
                    </span>
                    <span ref={spans} projectid="3">
                        <img src="https://www.americangypsum.com/sites/default/files/CLASSICROC-Gypsum-Wallboard-American-Gypsum.jpg" alt="" />
                        <div className="projectsTexts">
                            <h2>Glory</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                        </div>
                    </span>
                </div>
                <i className="fa-solid fa-chevron-right arrows"></i>
            </div>
        </div>
    )
}