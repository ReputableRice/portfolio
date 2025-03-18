import { Link } from "react-router-dom";
import { act, useState, useEffect } from "react";
import { Menu } from "lucide-react";

//images
import croc_logo from "/src/public/assets/images/CrocColour.png"

export default function NavBar() {
    const [active, setActive] = useState(true);

    return (
        <nav className="bg-blend- lg:p-[25px] flex sm:justify-end lg:justify-between z-50 items top-0 w-full sm:sticky transition-all">
            <Menu className="sm:flex lg:hidden absolute top-6 right-6 bg-zinc-200 rounded-sm" onClick={() => setActive(!active)} size={32} />
            {
                active &&
                <div className="flex sm:flex-col lg:flex-row w-full justify-between sm:items-end lg:items-center sm:text-right sm:mr-16 lg:mr-0 sm:mt-6 lg:mt-0 sm:font-bold lg:py-0">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <img src={croc_logo} className="w-24 sm:hidden lg:flex" alt=""/>
                    </Link>
                    <div className="flex sm:flex-col lg:flex-row lg:gap-6 font-medium frosted__nav lg:rounded-3xl sm:rounded-none lg:px-16 sm:px-3 sm:w-full lg:w-auto lg:py-3">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                        <div className="sm:hidden lg:flex">/</div>
                        <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>Projects</Link>
                        <div className="sm:hidden lg:flex">/</div>
                        <Link to="/illustrations" onClick={() => window.scrollTo(0, 0)}>Illustrations</Link>
                        <div className="sm:hidden lg:flex">/</div>
                        <Link to="/motion_graphics" onClick={() => window.scrollTo(0, 0)}>Motion Graphics</Link>
                        <div className="sm:hidden lg:flex">/</div>
                        <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
                    </div>
                    <Link to="/contact" className="font-medium frosted__nav lg:rounded-3xl sm:rounded-none sm:w-full lg:w-auto px-6 lg:py-3" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                </div>
            }
        </nav>
    );
}
