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
        <div className="drop-shadow-xl flex lg:flex-row sm:flex-col">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                loop: true,
              }),
            ]}
            className="lg:w-3/5 h-[650px] object-cover  rounded-br-3xl overflow-hidden"
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
          <div className="lg:w-1/4 px-6">
            <div>
              <CardHeader>
                <BreadcrumbCompress project_name={project.name} />
                <h1 className="text-3xl font-bold">{project.name}</h1>
                <CardDescription>
                  <ReactMarkdown>{project.description}</ReactMarkdown>
                  <p className="mt-8"> Created In {project.date}</p>
                  {project.link && <Button asChild className="mt-2"><a href={project.link} target="_blank"> Link To Project</a></Button>}
                </CardDescription>
              </CardHeader>
              <CardFooter>
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
              </CardFooter>
            </div>
          </div>
        </div>

        <h1 className="font-bold lg:text-[128px] sm:text-[76px] lg:leading-normal sm:leading-[68px]">PROJECT DETAILS</h1>
        {/* this part is where i can add sections, i want to make this a sub component but it's kind of scary */}
        {project.sections.map((section, a) => (
          <div>

            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="6" viewBox="0 0 1916 6" fill="none" className="my-6">
              <path d="M0 3L1913 2.99983" stroke="black" stroke-width="2" stroke-linecap="round" />
            </svg>

            <div key={a} className="flex lg:pl-[215px] gap-16 lg:flex-row sm:flex-col">
              <div className="flex lg:w-1/3">
                <CardHeader>
                  <CardTitle className="font-bold text-3xl">{section.heading}</CardTitle>
                  <ReactMarkdown>{section.description}</ReactMarkdown>
                </CardHeader>
              </div>
              <div className="lg:w-[737px] lg:h-[492px] flex">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 2000,
                      loop: true,
                    }),
                  ]}
                  className=" overflow-hidden rounded-3xl"
                >
                  <CarouselContent>
                    {section.image?.map((image, index) => (
                      <CarouselItem key={index} className="flex items-end justify-end">
                        <ImageExpand src={image} className="object-cover" alt={image.name} />
                      </CarouselItem>
                    ))}
                    {section.video?.map((video, vid) => (
                      <CarouselItem key={vid} className="flex items-end justify-end">
                        <video src={video} controls className="object-cover" loop="true" autoPlay="true" muted>
                          <source src={video} type="video/mp4" />
                        </video>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-0 w-full mt-32">
        <Footer />
      </div>
    </>
  );
}

export default ProjectDetails;
