import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils';
import './style.css';
import axios from "axios"
import { useTranslation } from 'react-i18next';

export function Sign() {
  const navlink = useNavigate();
  const namePass = useRef()
  const namePassUp = useRef()
  const [error, setError] = useState()
  const {t,i18n} = useTranslation()
  const HandleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      name: namePass.current.value,
      password: namePassUp.current.value
    }
    try {
      const res =  await axios.post(`${API_URL}/login`, body)
      setError(false) 
      res.data.data.map(e => {
        window.localStorage.setItem("name", e.name)
      })
      window.localStorage.setItem("AuthToken", res.data.token)
      navlink("/admin")
    } catch (error) {
      setError(true)
    }
    }
    const HandleNav = () => {
        navlink('/')
    }
  return (
    <div className="Sign">
      <div className="SignPath" onClick={HandleNav}><i className='fa-solid fa-arrow-left'></i></div>
        <form onSubmit={HandleSubmit} className="SignModal">
            <h1>{t("Login.0")}</h1>
            <p>{t("Login.1")}</p>
            {error ? <p className='SignP'>{t("Login.2")}</p> : null}
            <input type="text" ref={namePass} placeholder={t("Login.3")} className='ins'/>
            <input type="text" ref={namePassUp} placeholder={t("Login.3")} className='ins'/>
            <button type='submit'>{t("Login.0")}</button>
        </form>
    </div>
  );
}