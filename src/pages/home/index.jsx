import { First } from "../../components/First";
import { Footer } from "../../components/Footer";
import { Fourth } from "../../components/Fourth";
import { Navbar } from "../../components/Navbar";
import { Second } from "../../components/Second";
import { Third } from "../../components/Third";
import { Projects } from "../../components/projects";

export function Home() {
    return(
        <div className="Home">
            <Navbar/>
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
            {/* <Projects/> */}
            <Footer/>
        </div>
    )
}