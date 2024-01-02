import { useTranslation } from "react-i18next"
import "./style.css"
import { useEffect, useRef, useState } from "react"
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
    let Left,Right
    if (window.screen.width > 500) {
        let currentSize = 29.5
        Right = async() => {
                if (currentSize > 70-40*data.getData.Data.data.length) {
                    projects.current.style.left=`${currentSize-40}%`
                    currentSize = currentSize-40
                } else currentSize = currentSize
        }
        Left = async() => {
                if (currentSize < 29.5) {
                    projects.current.style.left=`${currentSize+40}%`
                    currentSize = currentSize+40
                } else currentSize = currentSize
        }
    }else {
        let currentSize = 17
        Right = async() => {
                if (currentSize > 87-70*data.getData.Data.data.length) {
                    projects.current.style.left=`${currentSize-70}%`
                    currentSize = currentSize-70
                } else currentSize = currentSize
        }
        Left = async() => {
                if (currentSize < 17) {
                    projects.current.style.left=`${currentSize+70}%`
                    currentSize = currentSize+70
                } else currentSize = currentSize
        }
    }
    return(
        <div className="Fourth" id="4">
            <h1>{t("Fourth.0")}</h1>
            <div className="projectsHead">
                {data.getData.Loading || data.getData.Error ? null : <i className="fa-solid fa-chevron-left arrows" onClick={Left}></i>}
                <div className="projects" ref={projects}>
                    {data.getData.Success == true ? data.getData.Data.data.map((elem, index) => 
                        <span key={index}>
                            <img src={elem.img} alt="" />
                            <div className="projectsTexts">
                                <h2>{elem.title}</h2>
                                <p>{elem.text}</p>
                            </div>
                        </span>)
                    :data.getData.Loading == true ? <i className="Loading fa-solid fa-spinner fa-spin-pulse"></i> : data.getData.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
                </div>
                {data.getData.Loading || data.getData.Error ? null : <i className="fa-solid fa-chevron-right arrows" onClick={Right}></i>}
            </div>
        </div>
    )
}