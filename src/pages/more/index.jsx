import { useNavigate } from "react-router-dom";
import { VerticalNavbarAdminPage } from "../../components/verticalNavbarAdminPage"
import "./style.css"
import { useEffect } from "react";

export function Admin() {
    const navigate = useNavigate()
    useEffect(() => {
        window.localStorage.getItem("AuthToken") ? console.log("ok") : navigate("/sign")
      }, [])
    return(
        <div className="Admin">
            <div className="leftNavbar">
                <VerticalNavbarAdminPage />
            </div>

            <div className="rightContent">
                <h1>ok</h1>
            </div>
        </div>
    )
}