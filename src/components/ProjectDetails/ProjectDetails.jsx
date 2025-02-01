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

function ProjectDetails({ project }) {
  return (
    <>
      <div className="min-h-svh">
        <BreadcrumbCompress project_name={project.name} />
        <div className="drop-shadow-xl flex">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                loop: true,
              }),
            ]}
            className="w-3/5 h-[650px] object-cover"
          >
            <CarouselContent>
              {project.images.map((images, index) => (
                <CarouselItem key={index} className="w-3/5 h-[650px] overflow-hidden flex justify-end">
                  <ImageExpand
                    src={images}
                    alt={project.name} className="h-[650px] object-cover drop-shadow-2xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

          </Carousel>
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
            <div className="w-[500px] h-[400px] flex gap-6">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                    loop: true,
                  }),
                ]}
                className=" overflow-hidden"
              >
                <CarouselContent>
                  {section.image.map((image, index) => (
                    <CarouselItem key={index} className="flex items-end justify-end">
                      <ImageExpand key={index} src={image}
                        className="" alt={image.name} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
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
