import { useTranslation } from "react-i18next"
import "./style.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { GetData } from "../../redux/data"

export function Fourth() {
    const {t,i18n} = useTranslation()
    const projects = useRef()
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    useEffect(() => {
        dispatch(GetData())
    },[])
    console.log(data);
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
                    {data.getData.Success == true ? data.getData?.Data.map((elem, index) => 
                        <span key={index}>
                            <img src="https://www.americangypsum.com/sites/default/files/CLASSICROC-Gypsum-Wallboard-American-Gypsum.jpg" alt="" />
                            <div className="projectsTexts">
                                <h2>Glory</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eaque quo delectus, obcaecati laboriosam.</p>
                            </div>
                        </span>)
                    :data.getData.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : data.getData.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
                </div>
                <i className="fa-solid fa-chevron-right arrows" onClick={Right}></i>
            </div>
        </div>
    )
}