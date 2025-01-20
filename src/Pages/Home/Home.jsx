import "../../App.css"
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview"
import Footer from "../../components/Footer/Footer"
import BreadcrumbCompress from "../../components/BreadcrumbCompress/BreadcrumbCompress"

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

//icons
import { MoveDown } from "lucide-react"

//images
import lookout from "/src/public/assets/images/lookoutbanner.png"
import croc_logo from "/src/public/assets/images/CrocColour.png"

export default function Home({ projects }) {

    return (
        <>
            <main className="flex flex-col">
            <h1 className="lg:text-5xl sm:text-3xl font-bold z-10">Website Under Construction</h1>
                <section className=" overflow-hidden flex sm:flex-col lg:flex-row max-w-full gap-x-3.5 sm:mt-0 sm:h-lvh lg:h-svh items-center lg:justify-end sm:justify-center lg:text-left sm:text-center hero_image px-[20%]">
                    <div className="w-1/2 h-full flex flex-col justify-end items-start absolute left-0 bottom-0 sm:hidden lg:flex">
                        <p className="font-normal text-5xl text-zinc-200">Graphic Solutions</p>
                        <p className="font-normal text-5xl text-zinc-200">Illustrations</p>
                        <p className="font-normal text-5xl text-zinc-200">Frontend Development</p>
                    </div>
                    <div className="flex flex-col lg:w-1/2 frosted p-6 rounded-xl">
                        <h1 className="lg:text-5xl sm:text-3xl font-bold z-10">Hi I'm Jackie</h1>
                        <p className="z-10 font-semibold">Graphic Design | Illustrator | Frontend Web Developer</p>
                        <p className="pt-2 z-10 lg:flex">Predominantly a graphic designer, with a focus on objective-driven visuals and seeking to provide professional level illustrations and eye-catching graphics.</p>
                        <button href="projects" className="z-10 flex bg-zinc-900 text-zinc-200 justify-center items-center py-6 rounded-full mt-8 sm:px-6">
                            <MoveDown className="bg-blend-multiply" size={32} />
                            <p className="text-xl sm:hidden lg:flex">To Projects</p>
                        </button>

                    </div>
                </section>
                <h1 id="projects" className="m-auto font-bold text-4xl p-6"> Projects </h1>
                <section className="flex min-h-svh w-full items-start justify-between flex-wrap lg:px-[20%] sm:px-6 gap-6 lg:pb-12" >
                    <ProjectPreview projects={projects} />
                    <div className="bg-pin"></div>
                </section>
                <section id="case" className="bg-zinc-50 flex sm:flex-col-reverse lg:flex-row items-center lg:text-left sm:text-center">
                    <div className="lg:w-1/2 sm:w-full lg:px-24 sm:px-4">
                        <h1 className="text-3xl font-bold">Case Study</h1>
                        <p>Lorem</p>
                    </div>
                    <div className="lg:w-1/2 sm:w-full sm:px-4 lg:px-0 h-1/2">
                        <img src="https://placehold.co/600x400" className="w-full h-full object-cover rounded-tl-3xl" />
                    </div>
                </section>
                <section id="contact" className="h-screen flex flex-col items-center justify-center">
                    <img src={croc_logo} alt="my crocodile logo" className="sm:w-2/6 lg:w-2/12" />
                    <h1 className="pt-10 text-3xl font-bold">Want to Work together?</h1>
                    <p className="pt-6">Contact me at</p>
                    <p>jackietruong274@gmail.com</p>
                </section>
            </main>
            <Footer />
        </>
    )
}