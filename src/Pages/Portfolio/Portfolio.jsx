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

export default function Portfolio({ projects, illustrations }) {
    return (
        <>
            <div className="min-h-svh">
                <main className=" flex w-full flex-wrap lg:px-[10%] sm:px-6 sm:justify-center lg:justify-normal" >
                    <h1 className="text-3xl font-bold mt-6">Detailed Projects</h1>
                    <div className="flex w-full items-start flex-wrap gap-6 sm:justify-center lg:justify-normal">
                        {projects.map((project, c) => (
                            <Card key={c} className="w-[285px] mt-4 hover:drop-shadow-lg transition-all">
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
            </div>
        </>
    )
}