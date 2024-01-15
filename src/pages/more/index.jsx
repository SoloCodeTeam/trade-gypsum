import { VerticalNavbarAdminPage } from "../../components/verticalNavbarAdminPage"
import "./style.css"
export function Admin() {
    // $(document).ready(function(){
    //     $(".hamburger").click(function(){
    //        $(".wrapper").toggleClass("collapse");
    //     });
    // });
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