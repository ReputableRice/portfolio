import "../../App.css"
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview"
import Footer from "../../components/Footer/Footer"
import { useRef } from "react"

//shadcn
import { Badge } from "@/components/ui/badge"

//icons
import { ArrowDown } from "lucide-react"

//images
import lookout from "/src/public/assets/images/lookoutbanner.jpg"
import croc_logo from "/src/public/assets/images/CrocColour.png"

//GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

export default function Home({ projects }) {

    const skills = ["Illustrator", "Photoshop", "Clip Studio Paint", "After Effects", "HTML/CSS", "JavaScript", "React", "Figma", "UI/UX", "Live2D"]
    const container = useRef();

    useGSAP(() => {
        gsap.from('.contact', {
            scrollTrigger: '.contactArea',
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 1.5,
            opacity: 0,
        });

        gsap.from('.skills', {
            scrollTrigger: '.skillArea',
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 0.5,
            opacity: 0,
        });

        // gsap.to(".arrowGSAP", {
        //     duration: 0.5,
        //     y: 20,
        //     repeat: -1,
        //     stagger: 1,
        //     yoyo: true
        // });

        var tl = gsap.timeline({ repeat: -1 });
        tl.to(".arrowGSAP", { y: 20, duration: 0.5, stagger: { amount: 0.5, from: "end", ease: "power2.inOut" } });
        tl.to(".arrowGSAP", { y: 0, duration: 0.5, stagger: { amount: 0.5, from: "end", ease: "power2.inOut" } });
        // tl.to(".arrowGSAP", { opacity: 0, duration: 1 });

    }, { scope: container })


    return (
        <>
            <main className="flex flex-col" ref={container} >
                {/* <h1 className="lg:text-5xl sm:text-3xl font-bold z-10">Website Under Construction</h1> */}
                <section className="flex flex-col w-full h-[761px]">
                    <div className=" h-[491px] flex gap-6">
                        <img src={lookout} />
                        {/* <div className="bg-green-200 w-7/12"></div> */}
                        {/* <div className="bg-blue-200 w-5/12"></div> */}
                    </div>
                    <div className="w-full px-[63px] flex justify-between">
                        <div className="w-[736px]">
                            <h1 className="text-[90px] font-bold">Hi I'm Jackie!</h1>
                            <p className="font-semibold">Graphic Design | Illustrator | Frontend Web Developer</p>
                            <p className="pt-2 z-10 lg:flex">Predominantly a graphic designer, with a focus on objective-driven visuals and seeking to provide professional level illustrations and eye-catching graphics.</p>
                        </div>
                        <div className="mt-auto flex gap-6">
                            <div className="flex">
                                <ArrowDown className="arrowGSAP" strokeWidth={4} />
                                <ArrowDown className="arrowGSAP rounded-2xl" strokeWidth={4} stroke="orange" />
                                <ArrowDown className="arrowGSAP green" strokeWidth={4} />
                            </div>
                            <h1 className="font-bold contentPush green__text">Project Examples</h1>
                        </div>
                    </div>
                </section>
                <section className="bg-zinc-100 ">
                    <div className="flex min-h-svh items-center flex-col flex-wrap lg:px-[16%] sm:px-6 lg:pb-12">
                        <h1 id="projects" className=" font-bold text-3xl mx-auto mt-24 mb-6 green__text"> Projects </h1>
                        <ProjectPreview projects={projects} />
                    </div>
                </section>
                <section className="flex justify-center items-center min-h-svh flex-col flex-wrap px-[20%]">
                    <h1 className="font-bold text-2xl">My Skills</h1>
                    <div className="skillArea mt-6 justify-center">
                        {skills.map((skill, index) => (
                            <Badge key={index} className="skills frosted m-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </section>
                <section id="contact" className="contactArea h-screen flex flex-col items-center justify-center">
                    <img src={croc_logo} alt="my crocodile logo" className="contact sm:w-2/6 lg:w-2/12" />
                    <h1 className="contact pt-10 text-3xl font-bold text-center">Want to Work together?</h1>
                    <p className="contact pt-6">Contact me at</p>
                    <p className="contact">jackietruong274@gmail.com</p>
                </section>
            </main>
            <Footer />
        </>
    )
}