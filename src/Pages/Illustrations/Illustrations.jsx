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
import { useEffect, useRef } from "react"

//Live2D
import { Live2DModel } from 'pixi-live2d-display';
import * as PIXI from 'pixi.js'

export default function Illustrations({ projects, illustrations }) {


    return (
        <>
            Testing Live2D
            {/* <div className="min-h-svh">
                    <main className=" flex w-full flex-wrap lg:px-[10%] sm:px-6 sm:justify-center lg:justify-normal" >
                        <div className="w-full">
                            <h1 className="text-3xl font-bold mt-16">Illustrations</h1>
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
                                gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
                                className="mt-6"
                            >
                                <Masonry>
                                    {illustrations.map((illustration, ill) => (
                                        <div key={ill}>
                                            <ImageExpand src={illustration}
                                                className="max-h-96 min-h-48 object-cover drop-shadow-2xl rounded-md" alt={illustration} />
                                        </div>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        </div>

                    </main>
                </div>
                <div className="mt-16">
                    <Footer />
                </div> */}
                <canvas id="canvas"></canvas>
        </>
    )
}