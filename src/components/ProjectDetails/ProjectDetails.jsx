import { React, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay"
import BreadcrumbCompress from "../BreadcrumbCompress/BreadcrumbCompress";
import Footer from "../Footer/Footer";
import ReactMarkdown from "react-markdown";

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
      <div className="lg:px-[10%]">
        <div className="sm:pb-6 lg:pb-6">
          <BreadcrumbCompress project_name={project.name} />
        </div>
        <div className=" drop-shadow-xl bg-white lg:px-24 sm:p-8 rounded-3xl flex sm:flex-col lg:flex-row sm:items-center lg:items-start lg:justify-center">
          <div className="lg:w-2/3">
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
                  <ReactMarkdown>{project.description}</ReactMarkdown>
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

        {project.sections.map((section, a) => (
          <div key={a} className=" w-full h-full flex lg:flex-row sm:flex-col-reverse px-12 my-12 justify-between gap-16 sm:items-center lg:items-start">
            <div className="lg:w-1/2 sm:w-full">
              <div className="flex">
                <div className="vertical__line"></div>
                <div>
                  <h1 className="font-bold">{section.heading}</h1>
                  <ReactMarkdown>{section.description}</ReactMarkdown>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-full rounded-3xl overflow-hidden">
              {
                section.image.map((image, index) => (
                  <img key={index} src={image} loading="lazy" decoding="async"
                    className="w-1/2" alt={image.name} />
                ))
              }
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
