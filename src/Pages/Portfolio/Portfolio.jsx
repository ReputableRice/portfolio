import ProjectPreview from "../../components/ProjectPreview/ProjectPreview"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Footer from "../../components/Footer/Footer"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import ImageExpand from "../../components/ImageExpand/ImageExpand"
import { useRef } from "react"

//GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Portfolio({ projects, illustrations }) {
    const container = useRef();

    useGSAP(() => {
        gsap.from('.cardGSAP', {
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 1.5,
            opacity: 0,
        });

    }, { scope: container }) 

    return (
        <>
            <div className="min-h-svh" ref={container}>
                <main className=" flex w-full flex-wrap lg:px-[10%] sm:px-6 sm:justify-center lg:justify-normal" >
                    <h1 className="text-3xl font-bold mt-16">Detailed Projects</h1>
                    <div className=" flex w-full items-start flex-wrap gap-6 sm:justify-center lg:justify-normal">
                        {projects.map((project, c) => (
                            <Card key={c} className="cardGSAP w-[385px] mt-4 hover:drop-shadow-lg">
                                <CardHeader>
                                    <img src={project.thumb_image} alt={project.name} className="rounded-[16px] project__thumbnail" />
                                </CardHeader>
                                <CardContent>
                                    <div className="">
                                        <p className="font-bold text-xl">{project.name}</p>
                                        <p>{project.subtitle}</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild classname="rounded-full">
                                        <Link key={project.id} to={`/project/${project.id}`}>
                                            Link to Project
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </main>
            </div>
            <div className="mt-16">
                <Footer />
            </div>
        </>
    )
}