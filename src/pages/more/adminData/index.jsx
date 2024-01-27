import "./style.css"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetData, PostData } from "../../../redux/data"
import axios from "axios"
import { API_URL, IMAGE_URL } from "../../../utils"


export function AdminData() {
    const {t,i18n} = useTranslation()
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const modal = useRef()
    const overlay = useRef()
    const title = useRef()
    const text = useRef()
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
        await PostData({config,body})
        await axios.post(`${API_URL}/data`, body, config).then((res) => console.log(res.data));
        CloseModal()
    }
    return(
        <div className="AdminData">
            <div className="dataNavbar">
                <h1>Datas</h1>
                <button onClick={OpenModal}>Add data</button>
            </div>
            <div className="overlay" ref={overlay} onClick={CloseModal}></div>
            <div ref={modal} className="dataModal">
                <h3>Add Data</h3>
                <form onSubmit={SendData}>
                    <div>
                        <h5>Image</h5>
                        {loading ? <p className='loading'>Loading...</p> : uploadedImage ? 
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
                        <h5>Title</h5>
                        <input required ref={title} type="text" placeholder="..."/>
                        <h5>Text</h5>
                        <textarea required ref={text} placeholder="..."></textarea>
                        <button type="submit">Add</button>
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
                                <button className="fa-solid fa-pen"></button>
                                <button className="fa-solid fa-trash"></button>
                                </span>
                            </div>
                        </span>)
                    :data.getData.Loading == true ? <i className="Loading fa-solid fa-spinner fa-spin-pulse"></i> : data.getData.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
            </div>
        </div>
    )
}


// import { IMAGE_URL } from '../../../utils';

// function Projects() {
//     const name = useRef();
//     const moreImages = useRef([]);
//     const [editTitle, setEditTitle] = useState();
//     const [editMainImages, setEditMainImages] = useState([]);
//     const [projectModal, SetProjectModal] = useState(false)
//     const [projectModal1, SetProjectModal1] = useState(false)
//     const projectOverlay = useRef(false)
//     const [imgUpload, setImgUpload] = useState();
//     const [loading, setLoading] = useState();
//     const [imagesLoading, setImgesLoading] = useState(false);
//     const [moreEdit, setMoreEdit] = useState();
//     const [moreLoading, setMoreLoading] = useState();
//     const dispatch = useDispatch()
//     const dataProject = useSelector(state => state.project)
//     const [moreUploadImage, setmoreUploadImage] = useState();
//     const input = useRef(null)
//     const inputMain = useRef(null)
//     const [imgId, setImgId] = useState();
//     useEffect(() => {
//       dispatch(GetProject())
//     }, [1])
    
//     const UploadFile = async(e) => {
//         const imgsUpload = [];
//         for (let i = 0; i < e.target.files.length; i++) {
//           const element = e.target.files[i];
//           const formData = new FormData()
//           formData.append('file', element)
//           formData.append('upload_preset', 'aozyh8sm')
//           setMoreLoading(true);
//           const postImage = async () => {
//               try {
//                   const response = await axios.post(`${IMAGE_URL}`, formData)
//                   imgsUpload.push(response?.data.secure_url)
//                   setMoreLoading(false)
//               } catch (error) {
//                   console.log(error);
//               }
//             }
//             postImage()
//           }
//         setmoreUploadImage(imgsUpload)
//     }
//   return (
//     <div className="Projects">
//         <div className="overlay" ref={projectOverlay} onClick={() => {SetProjectModal(false);projectOverlay.current.style.display = "none";SetProjectModal1(false);setImgUpload(null);setmoreUploadImage(null);setLoading(null);setMoreLoading(null)}}></div>
//         {projectModal ? <form onSubmit={HandleSubmit} className="projectModal">
//             <h3>Add Project</h3>
//             <div>
//                 <h4>Enter Project Title</h4>
//                 <input type="text" ref={name} placeholder='Enter Project Name' required/>
//                 <h4>Choose Project Main Photo</h4>
//                 {loading ? <p className='yellowLoading'>Loading...</p> : <input type="file" id="noneId" onChange={HandleFile} />}
//                 <button type="submit">Add</button>
//             </div>
//         </form> :null}
//         {projectModal1 ? <form onSubmit={HandleSubmit1} className="projectModal">
//             <h3>Edit Project</h3>
//             <div>
//                 <h4>Edit Project Title</h4>
//                 <input type="text" onChange={handleChange}  value={editTitle}/>
//                 <h4>Edit Project Main Photo</h4>
//                 {loading ? <p className='yellowLoading'>Loading...</p> :
//                 <div className="editImageBox">
//                 <img src={moreEdit.data.img} alt="img" />
//                     <div className='AdBtnBox'>
//                         <button onClick={() => inputMain.current.click()} type="button"><i className="fa-solid fa-edit"></i></button>
//                         <input ref={inputMain} type="file" onChange={HandleFile}/>
//                     </div>
//                 </div>}
//                 <h4>Edit Project More Photos</h4>
//                 {moreEdit.data.images.length > 0 ?
//                  moreEdit.data.images.map((e,i) => <span key={i}>{imagesLoading ? <p className='yellowLoading'>Loading ...</p>
//                      :<div className="editImageBox">
//                         <img src={e.img} alt="img" />
//                         <div className='AdBtnBox'>
//                             <button id={e.id} onClick={deleteImage} type="button"><i className="fa-solid fa-trash" id={e.id} onClick={deleteImage}></i></button>
//                             <button id={e.id} onClick={(el) => {setImgId(el.target.id);input.current.click();}} type="button"><i className="fa-solid fa-edit" id={e.id}></i></button>
//                             <input ref={input} id={e.id} type="file" onChange={HandleEditImagesFile}/>
//                         </div>
//                     </div>
//                     }</span>)
//                  : <p>No Photos here yet</p>}
//                 <h4>Add Other More Photo</h4>
//                 {moreLoading ? <p className='yellowLoading'>Loading ...</p> :<input type="file" onChange={UploadFile} multiple />}
//                 <button type="submit">Edit</button>
//             </div>
//         </form> :null}
//         <div className="ProjectsNav">
//             <h1><i className='fa-solid fa-folder'></i> Projects</h1>
//             <button className='ProjectsNavBtn' onClick={AddProject}>+<i className='fa-solid fa-folder'></i> Add Project</button>
//         </div>
//         <ul>
//             {dataProject.getProject.Success == true ? dataProject.getProject?.Data.data.data.map((elem, index) => 
//             <li key={index}>
//                 <img src={elem.img} alt="img" />
//                 <h3>{elem.title}</h3>
//                 <div className="AdBtnBox">
//                     <button value={elem.id} onClick={projectDelete}><i className="fa-solid fa-trash"></i>Delete</button>
//                     <button id={elem.id} onClick={projectEdit}><i className="fa-solid fa-edit"></i>Edit</button>
//                 </div>
//             </li>)
//             :dataProject.getProject.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataProject.getProject.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
//         </ul>
//     </div>
//   );
// }

// export default Projects;