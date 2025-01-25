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

export default function ProjectDetails({ projects }) {
    return (
        <div className="flex flex-wrap">
            {projects.map((project) => (
                <Card className="w-[285px] sm:m-auto lg:m-3 mt-4 hover:drop-shadow-lg transition-all">
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