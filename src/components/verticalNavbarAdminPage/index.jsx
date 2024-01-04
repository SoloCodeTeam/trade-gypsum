import React from "react";
import { useRef } from "react"
import "./style.css"
import { useNavigate } from "react-router-dom";

export function verticalNavbarAdminPage() {
    const sidebar = useRef();
    const SideBars = useRef();
    const SideBarss = useRef();
    const navlink = useNavigate()
    const SidebarModal = () => {
        sidebar.current.style.left = '0%'
        SideBars.current.style.display = 'none'
        SideBarss.current.style.display = 'block'
    }
    const SidebarModalDown = () => {
        sidebar.current.style.left = '-100%'
        SideBars.current.style.display = 'block'
        SideBarss.current.style.display = 'none'
    }
    return(
        <div className="ClientSidebar">
            <button ref={SideBars} className="fa-solid fa-bars SidebarBars" onClick={SidebarModal}></button>
            <button ref={SideBarss} className="fa-solid fa-bars SidebarBars sidedown" onClick={SidebarModalDown}></button>
            <div className="Clientpathpucher">
                <a onClick={() => navlink("/")} className='fa-solid fa-caret-left'></a>
            </div>
            <div ref={sidebar} className="ClientPanelSidebar">
                    <div className="sidetop">
                        <span>N</span>
                        <h1>Nice</h1>
                    </div>
                    <div className="sidebottom">
                        <button id="dashboard" onClick={(e) => navlink(`/client/${e.target.id}`)}>
                            <h3 id="dashboard" className="fa-solid fa-table"></h3>
                            <h2 id="dashboard">Dashboard</h2>
                        </button>
                        <button id="ai" onClick={(e) => navlink(`/client/${e.target.id}`)}>
                            <h3 id="ai" className="fa-solid fa-brain"></h3>
                            <h2 id="ai">Ai_Optimizer</h2>
                        </button>
                        <button id="balance" onClick={(e) => navlink(`/client/${e.target.id}`)}>
                            <h3 id="balance" className="fa-solid fa-landmark"></h3>
                            <h2 id="balance">Balance</h2>
                        </button>
                        <button id="notifications" onClick={(e) => navlink(`/client/${e.target.id}`)}>
                            <h3 id="notifications" className="fa-solid fa-bell"></h3>
                            <h2 id="notifications">Notifications</h2>
                        </button>
                        <button id="assets" onClick={(e) => navlink(`/client/${e.target.id}`)}>
                            <h3 id="assets" className="fa-solid fa-gem"></h3>
                            <h2 id="assets">Assets</h2>
                        </button>
                        <button id="settings" onClick={(e) => navlink(`/client/${e.target.id}`)}>
                            <h3 id="settings" className="fa-solid fa-gear"></h3>
                            <h2 id="settings">Settings</h2>
                        </button>
                    </div>
            </div>
        </div>
    )
}