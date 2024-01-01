import { useTranslation } from "react-i18next"
import "./style.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

export function Fourth() {
    const {t,i18n} = useTranslation()
    const projects = useRef()
    const spans = useRef()
    const [data,setData] = useState()
    useEffect(() => {
        setData(axios.get("https://trade-gypsum-back-production.up.railway.app/api/data"))
    },[])
    let currentSize = 30
    const Right = async() => {
        data.then(res => {
            if (currentSize > 70-40*res.data.data.length) {
                projects.current.style.left=`${currentSize-40}%`
                currentSize = currentSize-40
            } else currentSize = currentSize
        })
    }
    const Left = async() => {
        data.then(res => {
            if (currentSize < 30) {
                projects.current.style.left=`${currentSize+40}%`
                currentSize = currentSize+40
            } else currentSize = currentSize
        })
    }
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
                <i className="fa-solid fa-chevron-right arrows" onClick={Right}></i>
            </div>
        </div>
    )
}