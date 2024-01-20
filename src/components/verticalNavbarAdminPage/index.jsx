import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export function VerticalNavbarAdminPage() {
    const navigate = useNavigate() 
	const {t,i18n} = useTranslation()
	const Exit = async() => {
		await window.localStorage.removeItem("name")
		await window.localStorage.removeItem("AuthToken")
		navigate("/sign")
	}
	const SetItem = (e) => {
		// console.log(e.target.id);
		// window.localStorage.setItem("rightSide", e.target.value)
		navigate(`/admin/${e.target.id}`)
	}
    return(
        <>
        <div className="flex flex-col items-center w-40  h-full overflow-hidden text-indigo-300 bg-indigo-900 rounded blockgai1">
		<a className="flex items-center w-full px-3 mt-3">
			<img className="w-7 h-7" src="https://res.cloudinary.com/ds9evspym/image/upload/v1703694765/BNBM%20trade-gypsum/logo_fppag4.png" alt="logo" />
			<span className="ml-2 text-sm font-bold" onClick={() => navigate("/")}>The BNBM</span>
		</a>
		<div className="w-full px-2">
			<div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" id="#" onClick={SetItem}>
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" id="#" onClick={SetItem} fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
					<span className="ml-2 text-sm font-medium" id="#" onClick={SetItem}>{t("Admin.0")}</span>
				</a>
				{/* <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" id="search" onClick={SetItem}>
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" id="search" onClick={SetItem} fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
					<span className="ml-2 text-sm font-medium" id="search" onClick={SetItem}>{t("Admin.1")}</span>
				</a> */}
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700  rounded" id="admin" onClick={SetItem}>
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" id="admin" onClick={SetItem} fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<span className="ml-2 text-sm font-medium" id="admin" onClick={SetItem}>{t("Admin.2")}</span>
				</a>
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" id="data" onClick={SetItem}>
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" id="data" onClick={SetItem} fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
					</svg>
					<span className="ml-2 text-sm font-medium" id="data" onClick={SetItem}>{t("Admin.3")}</span>
				</a>
			</div>
			<div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
				<a className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" id="message" onClick={SetItem}>
					<svg className="w-8 h-8 stroke-current" xmlns="http://www.w3.org/2000/svg" id="message" onClick={SetItem} fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
					</svg>
					<span className="ml-2 text-sm font-medium" id="message" onClick={SetItem}>{t("Admin.4")}</span>
					{/* <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span> */}
				</a>
			</div>
		</div>
		<div className="flex flex-col items-center justify-center w-full h-17 mt-auto bg-indigo-800 hover:bg-indigo-700">
			<select className="w-full h-12 ml-2 mr-2" onChange={(e) => { window.localStorage.setItem("i18nextLng", e.target.value);window.location.reload()}}>
				<option value={window.localStorage.getItem("i18nextLng") == "uz" ? "uz" : "ru"}>{window.localStorage.getItem("i18nextLng") == "uz" ? "UZ" : "RU"}</option>
				<option value={window.localStorage.getItem("i18nextLng") == "ru" ? "uz" : "ru"}>{window.localStorage.getItem("i18nextLng") == "ru" ? "UZ" : "RU"}</option>
			</select>
			<a className="flex items-center w-full h-12 px-3 rounded hover:bg-indigo-700" onClick={Exit}>
				<i className="fa-solid fa-arrow-right-from-bracket ml-2 font-medium stroke-current"></i>
				<span className="ml-2 text-sm font-medium">{window.localStorage.getItem("name")}</span>
			</a>
		</div>
	</div>
{/* //////// */}

    <div class="flex flex-col items-center w-16 h-full overflow-hidden text-indigo-300 bg-indigo-900 rounded blockgai2">
		<a class="flex items-center justify-center mt-3" onClick={() => navigate("/")}>
			<img className="w-7 h-7" src="https://res.cloudinary.com/ds9evspym/image/upload/v1703694765/BNBM%20trade-gypsum/logo_fppag4.png" alt="logo" />
		</a>
		<div class="flex flex-col items-center mt-3 border-t border-gray-700">
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				 	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 text-indigo-100 bg-indigo-700 rounded">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
				</svg>
			</a>
		</div>
		<div class="flex flex-col items-center mt-2 border-t border-gray-700">
			<a class="relative flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
				</svg>
				<span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
			</a>
		</div>
		<div className="flex flex-col items-center mt-2 border-t border-gray-700">
			<select  onChange={(e) => { window.localStorage.setItem("i18nextLng", e.target.value);window.location.reload()}}>
				<option value={window.localStorage.getItem("i18nextLng") == "uz" ? "uz" : "ru"}>{window.localStorage.getItem("i18nextLng") == "uz" ? "UZ" : "RU"}</option>
				<option value={window.localStorage.getItem("i18nextLng") == "ru" ? "uz" : "ru"}>{window.localStorage.getItem("i18nextLng") == "ru" ? "UZ" : "RU"}</option>
			</select>
			<a className="flex items-center w-full h-12 px-3 rounded hover:bg-indigo-700" onClick={Exit}>
				<i className="fa-solid fa-arrow-right-from-bracket ml-3 stroke-current"></i>
				<span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
			</a>
		</div>
	</div>
    </>
    )
}