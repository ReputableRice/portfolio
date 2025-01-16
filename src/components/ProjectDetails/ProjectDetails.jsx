import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function ProjectDetails({ project }) {
  return (
    <div className="mt-36">
      <div className="drop-shadow-xl bg-white p-28 rounded-3xl col-start-1 col-end-12 m-auto flex sm:flex-col lg:flex-row sm:items-center lg:items-start">
        {/* <img
          src={project.thumb_image}
          alt={project.name} className="project__image" /> */}
        <div className="w-full">
          <Carousel className="">
            <CarouselContent>
              {project.images.map((images, index) => (
                <CarouselItem key={index}>
                  <img
                    src={images}
                    alt={project.name} className="project__image" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="sm:pt-6 lg:pt-0 lg:ml-8 flex flex-col">
          <Card>
            <CardHeader>
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <CardDescription>
                <p>{project.description}</p>
                <p> Created In {project.date}</p>
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="pt-3">
            {project.tags.map((tags, index) => (
              <Badge key={index}>{tags}</Badge>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProjectDetails;
