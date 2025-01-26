//images
import croc_logo from "/src/public/assets/images/CrocColour.png"
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
    const links = ["https://www.linkedin.com/in/jackiehtruong/"]

    return (
        <footer className="bg-zinc-800 text-zinc-100 px-12 py-12 flex sm:flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col items-start">
                <img src={croc_logo} className="w-24" />
            </div>
            <p className="text-xs mt-2 text-zinc-500">Jackie Truong © {(new Date().getFullYear())}</p>
            <div className="flex flex-wrap justify-between">
                {
                    links.map((link, foot) => (
                        <SocialIcon key={foot} url={link} bgColor="#71A850"/>
                    )
                    )}
            </div>
        </footer>
    );
}
