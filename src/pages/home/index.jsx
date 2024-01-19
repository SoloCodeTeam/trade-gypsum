import { useNavigate } from "react-router-dom";
import { First } from "../../components/First";
import { Footer } from "../../components/Footer";
import { Fourth } from "../../components/Fourth";
import { Navbar } from "../../components/Navbar";
import { Second } from "../../components/Second";
import { Third } from "../../components/Third";
import { Projects } from "../../components/projects";
import "./style.css"

export function Home() {
    return(
        <div className="Home">
            <Navbar/>
            <First/>
            <Second/>
            <Third/>
            <hr />
            <Fourth/>
            {/* <Projects/> */}
            <Footer/>
        </div>
    )
}