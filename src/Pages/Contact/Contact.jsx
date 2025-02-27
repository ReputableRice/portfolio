import croc_logo from "/src/public/assets/images/CrocColour.png"
import { SocialIcon } from 'react-social-icons'
import ImageExpand from "../../components/ImageExpand/ImageExpand.jsx"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {

    const container = useRef();

    useGSAP(() => {
        gsap.from('.contactGSAP', {
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 0.5,
            opacity: 0,
        });
    }, [])


    return (
        <>
            <section id="contact" className="h-svh w-svw flex flex-col items-center justify-center absolute top-0" ref={container}>
                <img src={croc_logo} alt="my crocodile logo" className="sm:w-2/6 lg:w-2/12 contactGSAP" />
                <h1 className="pt-10 text-3xl font-bold text-center contactGSAP">Want to Work together?</h1>
                <p className="pt-6 contactGSAP">Contact me at</p>
                <p className="contactGSAP">jackietruong274@gmail.com</p>
                <h1 className="mt-6 text-xl contactGSAP">I'm also here!</h1>
                <div className="contactGSAP w-1/2 flex items-center justify-center gap-6 mt-6">
                    <SocialIcon url="https://www.linkedin.com/in/jackiehtruong/" target="_blank" />
                </div>

            </section>
        </>
    )
}