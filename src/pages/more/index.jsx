import { useNavigate } from "react-router-dom";
import { VerticalNavbarAdminPage } from "../../components/verticalNavbarAdminPage"
import "./style.css"
import { useEffect } from "react";
import { AdminHome } from "./adminHome";
import { AdminSearch } from "./adminSearch";
import { AdminMessage } from "./adminMessage";
import { AdminData } from "./adminData";

export function Admin({type}) {
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
                {
                type == "search" ? <AdminSearch/> :
                type == "message" ? <AdminMessage/>:
                type == "data"? <AdminData/>
                : <AdminHome/>}
            </div>
        </div>
    )
}