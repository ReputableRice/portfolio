import { useRef } from "react";

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

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 


export default function ProjectPreview({ projects }) {

    const card = useRef();

    useGSAP(() => {
        gsap.from('.projectCard', {
            scrollTrigger: '.projectCard', 
            y:100,
            stagger: 0.05,
            ease: "power3.out",
            duration:2.5,
        });
    }, { scope: card }) // <-- scope
    
    return (
        <div className="flex flex-wrap boxAll" ref={card} >
            {projects.map((project) => (
                <Card className="projectCard w-[285px] sm:m-auto lg:m-3 hover:drop-shadow-lg my-3">
                    <CardHeader>
                        <img src={project.thumb_image} alt={project.name} className="rounded-[16px] project__thumbnail" loading="eager"/>
                    </CardHeader>
                    <CardContent>
                        <div className="">
                            <p className="font-bold text-lg">{project.name}</p>
                            <p>{project.subtitle}</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <Link key={project.id} to={`/project/${project.id}`}>
                                Link to Project
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}