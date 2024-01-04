import verticalNavbarAdminPage from "../../components/verticalNavbarAdminPage"
export function Admin() {
    // $(document).ready(function(){
    //     $(".hamburger").click(function(){
    //        $(".wrapper").toggleClass("collapse");
    //     });
    // });
    return(
        <div className="Admin">
            <div className="leftNavbar">
                <verticalNavbarAdminPage />
            </div>

            <div className="rightContent">

            </div>
        </div>
    )
}