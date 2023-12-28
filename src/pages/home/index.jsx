import { First } from "../../components/First";
import { Navbar } from "../../components/Navbar";
import { Second } from "../../components/Second";

export function Home() {
    return(
        <div className="Home">
            <Navbar/>
            <First/>
            <Second/>
        </div>
    )
}