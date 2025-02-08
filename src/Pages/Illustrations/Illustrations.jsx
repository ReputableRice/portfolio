import ProjectPreview from "../../components/ProjectPreview/ProjectPreview"
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

export default function Illustrations({ illustrations }) {
    const container = useRef();

    useGSAP(() => {
        gsap.from('.imageGSAP', {
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
                    <div className="w-full">
                        <h1 className="text-3xl font-bold mt-16">Illustrations & Graphics</h1>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
                            gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
                            className="mt-6"
                        >
                            <Masonry>
                                {illustrations.map((illustration, ill) => (
                                    <div key={ill}>
                                        <ImageExpand src={illustration}
                                            className="imageGSAP object-cover min-h-60 rounded-3xl" alt={illustration} />
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>

                </main>
            </div>
            <div className="mt-16">
                <Footer />
            </div>
        </>
    )
}