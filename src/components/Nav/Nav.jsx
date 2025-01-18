import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";

//images
import croc_logo from "/src/public/assets/images/CrocColour.png"

export default function NavBar() {
    const [active, setActive] = useState(false)

    return (
        <nav className="lg:p-[25px] w-full flex items-center z-50 lg:flex sm:flex-col lg:flex-row sm:items-end lg:bg-zinc-200 top-0">
            <Menu className="sm:flex lg:hidden" />
            <img src={croc_logo} className="w-24 sm:hidden lg:flex" />
            <div className="flex lg:gap-14 sm:flex-col lg:flex-row">
                <Link to="/">Home</Link>
                <Link to="/">Portfolio</Link>
                <Link to="/">About Me</Link>
                <Link to="/contact" className="sm:flex lg:hidden">Contact</Link>
            </div>
            <div className="sm:hidden lg:flex">
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}
