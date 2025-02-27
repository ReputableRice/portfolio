//images
import croc_logo from "/src/public/assets/images/CrocColour.png"
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
    const links = ["https://www.linkedin.com/in/jackiehtruong/"]

    return (
        <footer className="bg-[var(--green)] text-zinc-100 px-12 py-12 flex sm:flex-col lg:flex-row-reverse justify-between items-center">
            <p className="text-xs mt-2 text-zinc-50">Jackie Truong © {(new Date().getFullYear())}</p>
            <div className="flex flex-col gap-3">
                <p className="text-zinc-50">Get in touch!</p>
                {
                    links.map((link, foot) => (
                        <SocialIcon key={foot} url={link} bgColor="var(--black)"/>
                    )
                    )}
            </div>
        </footer>
    );
}
