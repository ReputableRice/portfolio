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
import canAllImage from '../../assets/images/can_all.png';


export default function Home({ projects }) {

    return (
        <>
            <div className="flex flex-col">
                <section>
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
                </section>
                    <h1 className="m-auto font-bold text-4xl p-6"> Projects </h1>
                <section>
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