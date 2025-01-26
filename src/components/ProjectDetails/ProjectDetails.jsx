import { React, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay"
import BreadcrumbCompress from "../BreadcrumbCompress/BreadcrumbCompress";
import Footer from "../Footer/Footer";
import ReactMarkdown from "react-markdown";
import ImageExpand from "../ImageExpand/ImageExpand";

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
import { Skeleton } from "@/components/ui/skeleton"

function ProjectDetails({ project }) {
  return (
    <>
      <div className="lg:px-[10%] min-h-svh">
        <div className="px-[8%] mt-6">
          <BreadcrumbCompress project_name={project.name} />
        </div>
        <div className="drop-shadow-xl flex justify-center mt-3">
          <div className="w-1/2">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                  loop: true,
                }),
              ]}
              className="rounded-3xl overflow-hidden"
            >
              <CarouselContent>
                {project.images.map((images, index) => (
                  <CarouselItem key={index} className="flex items-end justify-end">
                    <ImageExpand
                      src={images}
                      alt={project.name} className="h-[700px] object-cover drop-shadow-2xl"
                    />
                    <Skeleton className="h-[700px] rounded-full" />
                  </CarouselItem>
                ))}
              </CarouselContent>

            </Carousel>
          </div>
          <div className="w-1/4 px-6">
            <Card>
              <CardHeader>
                <h1 className="text-3xl font-bold">{project.name}</h1>
                <CardDescription>
                  <ReactMarkdown>{project.description}</ReactMarkdown>
                  <p className="mt-8"> Created In {project.date}</p>
                  {project.link && <Button asChild className="mt-2"><a href={project.link} target="_blank"> Link To Project</a></Button>}
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="pt-3">
              {project.tags.map((tags, i) => (
                <Badge key={i}>{tags}</Badge>
              ))}
              {project.roles && <h1 className="mt-6 text-xl font-bold">Project Role(s):</h1>}
              {project.roles && project.roles.map((roles, role) => (
                <div key={role}>
                  <Badge>{roles}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
        {project.sections.map((section, a) => (
          <div key={a} className="flex lg:flex-row sm:flex-col-reverse px-12 my-12 gap-16 sm:items-center lg:items-start justify-center">
            <Card className="flex w-1/3">
              <div className="vertical__line"></div>
              <CardHeader>
                <CardTitle className="font-bold">{section.heading}</CardTitle>
                <ReactMarkdown>{section.description}</ReactMarkdown>
              </CardHeader>
            </Card>
            <CardContent className="flex flex-wrap justify-end">
              {section.image.map((image, index) => (
                <ImageExpand key={index} src={image}
                  className="rounded-xl w-[500px] h-[400px] object-cover lg-96" alt={image.name} />
              ))}
            </CardContent>
          </div>
        ))}
      </div>
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}

export default ProjectDetails;
