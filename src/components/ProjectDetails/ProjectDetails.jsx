import { React, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay"
import BreadcrumbCompress from "../BreadcrumbCompress/BreadcrumbCompress";

//Shadcn
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
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
    <div>
      <div className="lg:mt-28 sm:pb-6 lg:pb-0">
        <BreadcrumbCompress project_name={project.name} />
      </div>
      <div className="drop-shadow-xl bg-white lg:p-12 sm:p-8 rounded-3xl m-auto flex sm:flex-col lg:flex-row sm:items-center lg:items-start lg:justify-center">
        <div className="lg:w-1/2">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                loop: true,
              }),
            ]}
          >
            <CarouselContent>
              {project.images.map((images, index) => (
                <CarouselItem key={index}>
                  <img
                    src={images}
                    alt={project.name} className="rounded-xl h-96 w-full object-cover"
                    loading="lazy" decoding="async"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="sm:hidden lg:flex" />
            <CarouselPrevious className="sm:hidden lg:flex" />
          </Carousel>
        </div>
        <div className="sm:pt-6 lg:pt-0 lg:ml-16 flex flex-col lg:w-2/5">
          <Card>
            <CardHeader>
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <CardDescription>
                <p>{project.description}</p>
                <p className="mt-8"> Created In {project.date}</p>
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

      {project.sections.map((section, index) => (
        <div key={index} className="w-full flex px-24 mt-6 justify-between">
          <div>
            <h1 className="font-bold">{section.heading}</h1>
            <p>{section.description}</p>
          </div>
          <img src={section.image} className="w-5/12 h-full" />
        </div>
      ))}
    </div>
  );
}

export default ProjectDetails;
