import Footer from "../../components/Footer/Footer"
import { useRef } from "react"
import ReactMarkdown from "react-markdown";

//videos /
import donut from "../../public/assets/videos/Donut.mp4"
import vTuber from "../../public/assets/videos/Vt_Web.mp4"
import starting from "../../public/assets/videos/Starting Screen.mp4"

//shadcn
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

//GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function MotionGraphics() {
    const container = useRef();

    useGSAP(() => {
        gsap.from('.videoGSAP', {
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 1.5,
            opacity: 0,
        });

    }, { scope: container })

    const videos = [
        {
            "link": donut,
            "title": "Character Animation Exercise",
            "description": ` 
**Music**: Donut Hole - Hachi

Animation exercise using Live2D with After Effects  
            `
        },
        {
            "link": vTuber,
            "title": "How to Make a VTuber",
            "description": ` 
A tutorial on creating your own VTuber model! This animation goes through all the steps needed to create an trackable model
            `
        },
        {
            "link": starting,
            "title": "Starting Screen Transition",
            "description": ` 
A starting screen meant for live streams, animated to show a parallax motion.
            `
        },

    ]

    return (
        <>
            <div className="min-h-svh" ref={container}>
                <main className="flex sm:px-6  flex-col lg:px-[10%]" >
                    <h1 className="text-3xl font-bold mt-16">Motion Graphics</h1>
                    <div className="flex gap-6 flex-wrap mt-6">
                        {
                            videos.map((video, vid) => (
                                <div key={vid} className="flex flex-col rounded-2xl w-[426px] videoGSAP overflow-hidden">
                                    <video width="426" height="240" controls>
                                        <source src={video.link} type="video/mp4" />
                                    </video>
                                    <h1 className="font-bold text-xl mt-6">{video.title}</h1>
                                    <ReactMarkdown className="text-wrap">{video.description}</ReactMarkdown>
                                </div>
                            ))
                        }
                    </div>

                </main>
            </div>
            <div className="mt-16">
                <Footer />
            </div>
        </>
    )
}