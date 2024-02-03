import "./style.css"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DeleteData, GetData, PostData } from "../../../redux/data"
import axios from "axios"
import { API_URL, IMAGE_URL } from "../../../utils"
import { GetAdmin } from "../../../redux/admin"


export function AdminAdmin() {
    const {t,i18n} = useTranslation()
    const dispatch = useDispatch()
    const data = useSelector(state => state.admin)
    const modal = useRef()
    const editModal = useRef()
    const overlay = useRef()
    const name = useRef()
    const surname = useRef()
    const password = useRef()
    const editName = useRef("...")
    const editSurname = useRef("...")
    const editPassword = useRef("...")
    const [editId,setEditId] = useState()
    useEffect(() => {
        dispatch(GetAdmin())
    },[])
    const [loading,setLoading] = useState()
    const config = {
        headers:{
            token: `${window.localStorage.getItem("AuthToken")}` 
        }
    }
    const CloseModal = () => {
        overlay.current.style.display = "none"
        modal.current.style.top = "-100%"
        editModal.current.style.top = "-100%"
        if (name.current.value) name.current.value = null
        if(surname.current.value) surname.current.value = null
        if(password.current.value) password.current.value = null
    }
    const OpenModal = () => {
        overlay.current.style.display = "block"
        modal.current.style.top = "3%"
    }
    const SendData = async(e) => {
        e.preventDefault()
        const body = {
            name: name.current.value,
            surname: surname.current.value,
            password: password.current.value,
        }
        await axios.post(`${API_URL}/admin`, body, config)
        CloseModal()
        window.location.reload()
    }
    const RemoveData = async(e) => {
        const id = e.target.id
        await axios.delete(`${API_URL}/admin/${id}`, config)
        window.location.reload()
    }
    const OpenEditModal = async(e) => {
        editName.current.value = e.target.title
        editSurname.current.value = e.target.value
        editPassword.current.value = e.target.lang
        setEditId(e.target.id)
        overlay.current.style.display = "block"
        editModal.current.style.top = "3%"
    }
    const EditData = async(e) => {
        e.preventDefault()
        const body = {
            name: editName.current.value,
            surname:  editSurname.current.value,
            password: editPassword.current.value
        }
        await axios.put(`${API_URL}/admin/${editId}`,body,config)
        CloseModal()
        window.location.reload()
    }
    return(
        <div className="AdminData">
            <div className="dataNavbar">
                <h1>{t("AdminAdmin.0")}</h1>
                <button onClick={OpenModal}>{t("AdminAdmin.1")}</button>
            </div>
            <div className="overlay" ref={overlay} onClick={CloseModal}></div>
            <div ref={modal} className="dataModal">
                <h3>{t("AdminAdmin.1")}</h3>
                <form onSubmit={SendData}>
                    <h5>{t("AdminAdmin.3")}</h5>
                    <input required ref={name} type="text" placeholder="..."/>
                    <h5>{t("AdminAdmin.4")}</h5>
                    <input required ref={surname} type="text" placeholder="..."/>
                    <h5>{t("AdminAdmin.5")}</h5>
                    <input required ref={password} placeholder="..."></input>
                    <button type="submit">{t("AdminAdmin.2")}</button>
                </form>
            </div>
            <div ref={editModal} className="dataModal">
                <h3>{t("AdminAdmin.6")}</h3>
                <form onSubmit={EditData}>
                    <h5>{t("AdminAdmin.3")}</h5>
                    <input required ref={editName} type="text" placeholder="..." defaultValue={editName.current.value}/>
                    <h5>{t("AdminAdmin.4")}</h5>
                    <input required ref={editSurname} type="text" placeholder="..." defaultValue={editSurname.current.value}/>
                    <h5>{t("AdminAdmin.5")}</h5>
                    <input required ref={editPassword} placeholder="..." defaultValue={editPassword.current.value}></input>
                    <button type="submit">{t("AdminAdmin.7")}</button>
                </form>
            </div>
            <div className="dataData">
                    {data.getAdmin.Success == true ? data.getAdmin.Data.data.map((elem, index) => 
                        <span key={index}>
                            <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1706970489/BNBM%20trade-gypsum/frccnby3p81lhxprqe1a.png" alt="" />
                            <div className="projectsTexts">
                                <h2>{elem.name}</h2>
                                <p>{elem.surname}</p>
                                <span>
                                    <button id={elem._id} lang={elem.password} title={elem.name} value={elem.surname} className="fa-solid fa-pen" onClick={OpenEditModal}></button>
                                    <button id={elem._id} className="fa-solid fa-trash" onClick={RemoveData}></button>
                                </span>
                            </div>
                        </span>)
                    :data.getData.Loading == true ? <i className="Loading fa-solid fa-spinner fa-spin-pulse"></i> : data.getData.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
            </div>
        </div>
    )
}