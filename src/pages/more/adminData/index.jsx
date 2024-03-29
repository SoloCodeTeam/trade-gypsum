import "./style.css"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DeleteData, GetData, PostData } from "../../../redux/data"
import axios from "axios"
import { API_URL, IMAGE_URL } from "../../../utils"


export function AdminData() {
    const {t,i18n} = useTranslation()
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const modal = useRef()
    const editModal = useRef()
    const overlay = useRef()
    const title = useRef()
    const text = useRef()
    const editTitle = useRef("...")
    const editText = useRef("...")
    const [editId,setEditId] = useState()
    useEffect(() => {
        dispatch(GetData())
    },[])
    const [loading,setLoading] = useState()
    const [uploadedImage,setUploadedImage] = useState()
    const config = {
        headers:{
            token: `${window.localStorage.getItem("AuthToken")}` 
        }
      }    
    const ImageUpload = async(e) => {
        for (let i = 0; i < e.target.files.length; i++) {
          const element = e.target.files[i];
          const formData = new FormData()
          formData.append('file', element)
          formData.append('upload_preset', 'qmbc46ov')
          setLoading(true);
          const postImage = async () => {
              try {
                  const response = await axios.post(`${IMAGE_URL}`, formData)
                  setUploadedImage(response?.data.secure_url)
                  setLoading(false)
              } catch (error) {
                  console.log(error);
              }
            }
            postImage()
          }
    }
    const RemoveImage = () => {
        setUploadedImage(null)
    }
    const CloseModal = () => {
        overlay.current.style.display = "none"
        modal.current.style.top = "-100%"
        editModal.current.style.top = "-100%"
        if (title.current.value) title.current.value = null
        if(text.current.value) text.current.value = null
        setUploadedImage(null)
    }
    const OpenModal = () => {
        overlay.current.style.display = "block"
        modal.current.style.top = "3%"
    }
    const SendData = async(e) => {
        e.preventDefault()
        const body = {
            title: title.current.value,
            text: text.current.value,
            img: uploadedImage,
        }
        console.log(body);
        await axios.post(`${API_URL}/data`, body, config)
        CloseModal()
        window.location.reload()
    }
    const RemoveData = async(e) => {
        const id = e.target.id
        await axios.delete(`${API_URL}/data/${id}`, config)
        window.location.reload()
    }
    const OpenEditModal = async(e) => {
        editTitle.current.value = e.target.title
        editText.current.value = e.target.value
        setUploadedImage(e.target.lang)
        setEditId(e.target.id)
        overlay.current.style.display = "block"
        editModal.current.style.top = "3%"
    }
    const EditData = async(e) => {
        e.preventDefault()
        const body = {
            title: editTitle.current.value,
            text:  editText.current.value,
            img: uploadedImage
        }
        await axios.put(`${API_URL}/data/${editId}`,body,config)
        CloseModal()
        window.location.reload()
    }
    return(
        <div className="AdminData">
            <div className="dataNavbar">
                <h1>{t("AdminData.0")}</h1>
                <button onClick={OpenModal}>{t("AdminData.1")}</button>
            </div>
            <div className="overlay" ref={overlay} onClick={CloseModal}></div>
            <div ref={modal} className="dataModal">
                <h3>{t("AdminData.1")}</h3>
                <form onSubmit={SendData}>
                    <div>
                        <h5>{t("AdminData.3")}</h5>
                        {loading ? <p className='loading'>{t("AdminData.8")}</p> : uploadedImage ? 
                        <div className="imgDiv">
                            <img src={uploadedImage} alt="image" />
                            <div className="modalEdits">
                                <button onClick={RemoveImage} className="fa-solid fa-rotate"></button>
                                <button onClick={RemoveImage} className="fa-solid fa-trash"></button>
                            </div>
                        </div>
                        : <input required type="file" id="noneId" className="UploadInput" onChange={ImageUpload} />}
                    </div>
                     <div>
                        <h5>{t("AdminData.4")}</h5>
                        <input required ref={title} type="text" placeholder="..."/>
                        <h5>{t("AdminData.5")}</h5>
                        <textarea required ref={text} placeholder="..."></textarea>
                        <button type="submit">{t("AdminData.2")}</button>
                     </div>
                </form>
            </div>
            <div ref={editModal} className="dataModal">
                <h3>{t("AdminData.6")}</h3>
                <form onSubmit={EditData}>
                    <div>
                        <h5>{t("AdminData.3")}</h5>
                        {loading ? <p className='loading'>{t("AdminData.8")}</p> : uploadedImage ? 
                        <div className="imgDiv">
                            <img src={uploadedImage} alt="image" />
                            <div className="modalEdits">
                                <button onClick={RemoveImage} className="fa-solid fa-rotate"></button>
                                <button onClick={RemoveImage} className="fa-solid fa-trash"></button>
                            </div>
                        </div>
                        : <input required type="file" id="noneId" className="UploadInput" onChange={ImageUpload} />}
                    </div>
                     <div>
                        <h5>{t("AdminData.4")}</h5>
                        <input required ref={editTitle} type="text" placeholder="..." defaultValue={editTitle.current.value}/>
                        <h5>{t("AdminData.5")}</h5>
                        <textarea required ref={editText} placeholder="...">{editText.current.value}</textarea>
                        <button type="submit">{t("AdminData.7")}</button>
                     </div>
                </form>
            </div>
            <div className="dataData">
                    {data.getData.Success == true ? data.getData.Data.data.map((elem, index) => 
                        <span key={index}>
                            <img src={elem.img} alt="" />
                            <div className="projectsTexts">
                                <h2>{elem.title}</h2>
                                <p>{elem.text}</p>
                                <span>
                                <button id={elem._id} lang={elem.img} title={elem.title} value={elem.text} className="fa-solid fa-pen" onClick={OpenEditModal}></button>
                                <button id={elem._id} className="fa-solid fa-trash" onClick={RemoveData}></button>
                                </span>
                            </div>
                        </span>)
                    :data.getData.Loading == true ? <i className="Loading fa-solid fa-spinner fa-spin-pulse"></i> : data.getData.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
            </div>
        </div>
    )
}