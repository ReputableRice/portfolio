import Footer from "../../components/Footer/Footer"
import { useRef } from "react"
import ReactMarkdown from "react-markdown";

//videos
import donut from "../../public/assets/videos/Donut.mp4"
import vTuber from "../../public/assets/videos/Vtuber Making.mp4"

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
import { Car } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function MotionGraphics() {
    // const container = useRef();

    // useGSAP(() => {
    //     gsap.from('.imageGSAP', {
    //         y: 300,
    //         stagger: 0.1,
    //         ease: "power3.out",
    //         duration: 1.5,
    //         opacity: 0,
    //     });

    // }, { scope: container })

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

    ]

    return (
        <>
            <div className="min-h-svh">
                <main className="flex sm:px-6  flex-col" >
                    <h1 className="text-3xl font-bold mt-16">Motion Graphics</h1>
                    <div className="flex gap-6 flex-wrap mt-6 justify-center">
                        {
                            videos.map((video, vid) => (
                                <Card key={vid} className="flex flex-col rounded-2xl w-[426px]">
                                    <CardHeader>
                                        <video width="426" height="240" controls>
                                            <source src={video.link} type="video/mp4" />
                                        </video>
                                        <CardDescription>
                                            <h1 className="font-bold text-xl mt-6">{video.title}</h1>
                                            <ReactMarkdown className="text-wrap">{video.description}</ReactMarkdown>
                                        </CardDescription>
                                    </CardHeader>

                                </Card>
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