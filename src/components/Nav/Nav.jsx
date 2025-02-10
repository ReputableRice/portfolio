import { Link } from "react-router-dom";
import { act, useState, useEffect } from "react";
import { Menu } from "lucide-react";

//images
import croc_logo from "/src/public/assets/images/CrocColour.png"

export default function NavBar() {
    const [active, setActive] = useState(true);
    const [screenSize, setScreenSize] = useState();

    return (
        <nav className="lg:p-[25px] flex sm:justify-end lg:justify-between z-50 items frosted top-0 w-full sm:sticky border-b-2 border-b-zinc-950 transition-all">
            <Menu className="sm:flex lg:hidden absolute top-6 right-6 bg-zinc-200 rounded-sm" onClick={() => setActive(!active)} size={32} />
            {
                active &&
                <div className="flex sm:flex-col lg:flex-row w-full justify-between sm:items-end lg:items-center sm:text-right sm:mr-16 lg:mr-0 sm:mt-6 lg:mt-0 sm:font-bold sm:py-6 lg:py-0 text-xl">
                    <img src={croc_logo} className="w-24 sm:hidden lg:flex" />
                    <div className="flex sm:flex-col lg:flex-row lg:gap-6 font-medium">
                        <Link to="/">Home</Link>
                        <div className="sm:hidden lg:flex">/</div>
                        <Link to="/portfolio">Portfolio</Link>
                        <div className="sm:hidden lg:flex">/</div>
                        <Link to="/illustrations">Illustrations</Link>
                        <div className="sm:hidden lg:flex">/</div>
                        <Link to="/motion_graphics">Motion Graphics</Link>
                        <div className="sm:hidden lg:flex">/</div>
                        <Link to="/about">About</Link>
                    </div>
                    <Link to="/contact" className="font-medium">Contact</Link>
                </div>
            }
        </nav>
    );
}
