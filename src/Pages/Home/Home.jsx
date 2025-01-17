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

//icons
import { MoveDown } from "lucide-react"

//images
import lookout from "/src/public/assets/images/lookoutbanner.png"

export default function Home({ projects }) {

    return (
        <>
            <div className="flex flex-col">
                <section className="flex sm:flex-col lg:flex-row max-w-full gap-x-1.5 lg:mt-20 sm:mt-0">
                    <img src={lookout} alt="hero image" loading="lazy" decoding="async" className="image_hero h-4/5 lg:w-1/2 overflow-hidden lg:rounded-tr-3xl sm:rounded-b-full lg:rounded-b-none" />

                    <div class="h-4/5 lg:w-1/2 rounded-tl-3xl flex flex-col space-y-6 justify-center sm:items-center">
                        <img src={lookout} alt="hero image" loading="lazy" decoding="async" className="sm:hidden lg:inline h-full rounded-tl-3xl overflow-hidden image_about sm:h-1/2 lg:h-full" />
                        <div className="flex flex-col w-full sm:items-center lg:items-start">
                            <h1 className="text-5xl font-bold">Hi I'm Me</h1>
                            <p>Description about me</p>
                            <button className="flex w-1/2 bg-zinc-900 text-zinc-200 justify-center py-6 rounded-full">
                                <MoveDown className="bg-blend-multiply" size={32} />
                                <p className="text-2xl">To Projects</p>
                            </button>
                        </div>
                    </div>
                </section>
                <h1 className="m-auto font-bold text-4xl p-6"> Projects </h1>
                <section className="flex sm:flex-col lg:flex-row max-w-full gap-10">
                    <div className="col-start-4 col-end-10 flex lg:flex-row sm:flex-col w-full">
                        {projects.map((project) => (
                            <Card className="w-[285px] h-[550px] m-auto">
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