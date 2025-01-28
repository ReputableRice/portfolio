import "../../App.css"
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview"
import Footer from "../../components/Footer/Footer"
import BreadcrumbCompress from "../../components/BreadcrumbCompress/BreadcrumbCompress"
import { useRef } from "react"

//shadcn
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

//icons
import { MoveDown } from "lucide-react"

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

    const skills = ["Illustrator", "Photoshop", "Clip Studio Paint", "After Effects", "HTML/CSS", "JavaScript" ,"React", "Figma", "UI/UX", "Live2D"]
    const container = useRef();

    useGSAP(() => {
        gsap.from('.contact', {
            scrollTrigger: '.contactArea',
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 3.5,
        });

        gsap.from('.skills', {
            scrollTrigger: '.skillArea',
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 3.5,
        });
    }, { scope: container }) // <-- scope

    return (
        <>
            <main className="flex flex-col" ref={container} >
                <h1 className="lg:text-5xl sm:text-3xl font-bold z-10">Website Under Construction</h1>
                <section className="overflow-hidden flex sm:flex-col lg:flex-row max-w-full gap-x-3.5 sm:mt-0 sm:h-lvh lg:h-s items-center lg:justify-end sm:justify-center lg:text-left sm:text-center hero_image">
                    <div className="w-1/2 h-full flex flex-col justify-start items-start sm:hidden lg:flex px-12 pt-12">
                    </div>
                    <div className="flex flex-col lg:w-1/2 h-full frosted p-6 rounded-xl justify-center">
                        <div className=" bg-amber-300 h-1/3 w-full rounded-tl-3xl mb-6"></div>
                        <h1 className="lg:text-5xl sm:text-3xl font-bold z-10">Hi I'm Jackie</h1>
                        <p className="z-10 font-semibold">Graphic Design | Illustrator | Frontend Web Developer</p>
                        <p className="pt-2 z-10 lg:flex">Predominantly a graphic designer, with a focus on objective-driven visuals and seeking to provide professional level illustrations and eye-catching graphics.</p>
                        <button href="projects" className="z-10 flex bg-zinc-900 text-zinc-200 justify-center items-center py-6 rounded-full mt-8 sm:px-6 lg:w-1/3">
                            <MoveDown className="bg-blend-multiply" size={32} />
                            <p className="text-xl sm:hidden lg:flex">To Projects</p>
                        </button>
                    </div>
                </section>
                <section className="flex min-h-svh items-center flex-col flex-wrap lg:px-[16%] sm:px-6 lg:pb-12" >
                    <h1 id="projects" className=" font-bold text-2xl mx-auto my-6"> Projects </h1>
                    <ProjectPreview projects={projects} />
                </section>
                <section className="flex justify-center items-center min-h-svh flex-col flex-wrap px-[20%]">
                    <h1 className="skillsArea skills font-bold text-2xl">My Skills</h1>
                    <div className="skills mt-6 justify-center">
                        {skills.map((skill, index) => (
                            <Badge key={index} className="frosted m-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
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