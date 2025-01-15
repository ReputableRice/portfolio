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

export default function Home({ projects }) {

    return (
        <>
            <div className="flex">
                {projects.map((project) => (
                    <div>
                        <img src={project.Images} alt={project.name} className="rounded-[32px] project__thumbnail" />
                        <div className="pt-4">
                            <p className="text-base font-bold">{project.name}</p>
                            <p>{project.subtitle}</p>
                        </div>
                        <Button asChild classname="rounded-full">
                            <Link key={project.id} to={`/project/${project.id}`}>
                                Link to Project
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>

            <main class="main">
                <div class="flex flex-col appLayout">
                    {/* <section>
                        <div
                            class="bg-red-500 h-4/5 col-start-1 col-end-6 rounded-tr-3xl w-full m-auto"
                        >
                            Hero Image
                        </div>
                        <div
                            class="bg-red-500 h-4/5 col-start-8 col-end-13 rounded-tl-3xl w-full m-auto"
                        >
                            About Me
                        </div>
                    </section> */}
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