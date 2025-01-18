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
import "../../App.css"
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview"

//icons
import { MoveDown } from "lucide-react"

//images
import lookout from "/src/public/assets/images/lookoutbanner.png"

export default function Home({ projects }) {

    return (
        <>
            <div className="flex flex-col">
                <section className="flex sm:flex-col lg:flex-row max-w-full gap-x-3.5 lg:mt-20 sm:mt-0 sm:h-svh lg:h-[768px]">
                    <img src={lookout} alt="hero image" loading="lazy" decoding="async" className="image_hero lg:w-1/2 sm:w-full sm:h-2/5 lg:h-full h-full lg:rounded-tr-3xl sm:rounded-b-full lg:rounded-b-none" />

                    <div class="">
                        <img src={lookout} alt="hero image" loading="lazy" decoding="async" className="sm:hidden lg:flex lg:rounded-tl-3xl sm:rounded-b-full lg:rounded-none" />
                        <div className="flex flex-col w-full sm:items-center lg:items-start mt-32">
                            <h1 className="text-5xl font-bold">Hi I'm Me</h1>
                            <p>Description about me</p>
                            <button className="flex w-2/5 bg-zinc-900 text-zinc-200 justify-center items-center py-6 rounded-full mt-8">
                                <MoveDown className="bg-blend-multiply" size={32} />
                                <p className="text-xl">To Projects</p>
                            </button>
                        </div>
                    </div>
                </section>
                <h1 className="m-auto font-bold text-4xl p-6"> Projects </h1>
                <section className="flex w-full items-start justify-center flex-wrap lg:px-[10%] sm:px-0">
                    <ProjectPreview projects={projects} />
                </section>

            </div>
            <main class="main">
                <div class="flex flex-col appLayout">
                    {/* <section>
                        <div class="col-start-4 col-end-10 flex flex-col">
                            <div class="bg-red-500 h-8 flex items-center justify-center">
                                <h1>Portfolio</h1>
                            </div>
                            <div class="bg-green-500 flex flex-wrap mt-6 justify-center">
                                <div class="bg-blue-500 h-72 w-72">component loop + 6 columns</div>
                                <div class="bg-blue-500 h-72 w-72">component loop + 6 columns</div>
                                <div class="bg-blue-500 h-72 w-72">component loop + 6 columns</div>
                                <div class="bg-blue-500 h-72 w-72">component loop + 6 columns</div>
                            </div>
                        </div>
                    </section> */}
                    {/* <section>
                        <div
                            class="bg-blue-500 h-full col-start-1 col-end-7 w-full flex items-center justify-center"
                        >
                            text Section
                        </div>
                        <div class="bg-red-500 h-full col-start-7 col-end-13 w-full m-auto">
                            text Section
                        </div>
                    </section>
                    <section>
                        <div
                            class="bg-red-500 h-full col-span-full w-full m-auto flex items-center justify-center"
                        >
                            <h1>Hello World</h1>
                        </div>
                    </section> */}
                </div>

            </main>
        </>
    )
}