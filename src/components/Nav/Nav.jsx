import { Link } from "react-router-dom";
import { act, useState, useEffect } from "react";
import { Menu } from "lucide-react";

//images
import croc_logo from "/src/public/assets/images/CrocColour.png"

export default function NavBar() {
    const [active, setActive] = useState(true);
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        if (window.innerWidth < 1000) {
            setActive(() => false)
            console.log("sm vw")
        } else {
            setActive(() => true)
            console.log("lg vw")
        }
    }, [])

    return (
        <nav className="lg:-top-24 sm:-top-0 hover:-top-0 lg:p-[25px] flex sm:justify-end lg:justify-between z-50 items frosted top-0 w-full sm:sticky border-b-2 border-b-zinc-950 transition-all">
            <Menu className="sm:flex lg:hidden absolute top-6 right-6 bg-zinc-200 rounded-sm" onClick={() => setActive(!active)} size={32} />
            {
                active &&
                <div className="flex sm:flex-col lg:flex-row w-full justify-between sm:items-end lg:items-center sm:text-right sm:mr-16 lg:mr-0 sm:mt-6 lg:mt-0 sm:font-bold sm:py-6 lg:py-0 text-xl">
                    <img src={croc_logo} className="w-24 sm:hidden lg:flex" />
                    <div className="flex sm:flex-col lg:flex-row lg:gap-12">
                        <Link to="/">Home</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/illustrations">Illustrations</Link>
                        <Link to="/about">About Me</Link>
                    </div>
                    <Link to="/contact">Contact</Link>
                </div>
            }
        </nav>
    );
}
