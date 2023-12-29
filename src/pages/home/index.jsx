import { First } from "../../components/First";
import { Fourth } from "../../components/Fourth";
import { Navbar } from "../../components/Navbar";
import { Second } from "../../components/Second";
import { Third } from "../../components/Third";

export function Home() {
    return(
        <div className="Home">
            <Navbar/>
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
        </div>
    )
}