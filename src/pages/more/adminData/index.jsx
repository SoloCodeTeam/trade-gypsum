import "./style.css"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetData } from "../../../redux/data"


export function AdminData() {
    const {t,i18n} = useTranslation()
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    useEffect(() => {
        dispatch(GetData())
    },[])
    return(
        <div className="AdminData">
            <div className="dataNavbar">
                <h1>Datas</h1>
                <button>Add data</button>
            </div>
            <div className="dataData">
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
        </div>
    )
}