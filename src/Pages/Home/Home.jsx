import "../../App.css"
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview"
import Footer from "../../components/Footer/Footer"
import { useRef } from "react"
import ImageExpand from "../../components/ImageExpand/ImageExpand"
import { useState, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom"


//shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

//icons
import { ArrowDown } from "lucide-react"

//images
import lookout from "/src/public/assets/images/lookout/lookoutbanner.jpg"
import croc_logo from "/src/public/assets/images/CrocColour.png"
import lookout_fg from "/src/public/assets/images/lookout/fg.png"
import lookout_bg from "/src/public/assets/images/lookout/bg.png"

//GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

export default function Home({ projects, illustrations }) {
    const [expandIllustrations, setExpandIllustrations] = useState("max-h-svh overflow-hidden")
    const [imgToggle, setImgToggle] = useState(false)
    const [text, setText] = useState("See More")

    const skills = ["Illustrator", "Photoshop", "Clip Studio Paint", "After Effects", "HTML/CSS", "JavaScript", "React", "Figma", "UI/UX", "Live2D"]
    const container = useRef();

    useGSAP(() => {
        gsap.from('.contact', {
            scrollTrigger: '.contactArea',
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 1.5,
            opacity: 0,
        });

        gsap.from('.skills', {
            scrollTrigger: '.skillArea',
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 0.5,
            opacity: 0,
        });

        gsap.from('.fadeIn', {
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 0.5,
            opacity: 0,
        });


        var tl = gsap.timeline({ repeat: -1 });
        tl.to(".arrowGSAP", { y: 20, duration: 0.5, stagger: { amount: 0.5, from: "end", ease: "power2.inOut" } });
        tl.to(".arrowGSAP", { y: 0, duration: 0.5, stagger: { amount: 0.5, from: "end", ease: "power2.inOut" } });

        document.addEventListener("mousemove", mouseMoveFunc);

        let fg = gsap.utils.toArray(".fgGSAP");
        let bg = gsap.utils.toArray(".bgGSAP");


        function mouseMoveFunc(e) {

            fg.forEach((fg, index) => {
                const depth = 10;
                const moveX = (e.pageX - window.innerWidth / 2) / depth;
                index++

                gsap.to(fg, {
                    x: moveX * index,
                });
            });

            bg.forEach((bg, index) => {
                const depth = 10;
                const moveX = (e.pageX - window.innerWidth / 2) / depth;
                index++

                gsap.to(bg, {
                    x: -moveX * index,
                });
            });
        }

    }, { scope: container })

    return (
        <>
            <main className="flex flex-col" ref={container} >
                {/* <h1 className="lg:text-5xl sm:text-3xl font-bold z-10">Website Under Construction</h1> */}
                <section className="flex flex-col w-full h-full">
                    <div className=" h-[721px] fadeIn relative top-0 left-0 overflow-hidden background">
                        <img src={lookout_fg} className="w-full absolute lg:z-20 lg:h-[800px] sm:h-[100%] -right-[43%] lg:object-contain fgGSAP" alt="a vast landscape" />
                        <img src={lookout_bg} className="w-[200%] h-[100%] absolute object-cover bgGSAP drop-shadow-2xl" alt="an anthropomorphic dragon standing on a rock looking into the distance" />
                        <div className="w-full h-full flex flex-col justify-center lg:px-[30%] sm:px-6 frosted">
                            <div className="">
                                <h1 className="lg:text-[60px] sm:text-[30px] font-bold fadeIn white__text">Hi I'm Jackie!</h1>
                                <p className="font-semibold text-2xl fadeIn white__text">Graphic Design | Illustrator | Frontend Web Developer</p>

                                <p className="pt-2 z-10 lg:flex fadeIn white__text">Predominantly a graphic designer, with a focus on objective-driven visuals and seeking to provide professional level illustrations and eye-catching graphics.</p>
                            </div>
                            <div className="sm:mt-44 flex flex-row-reverse items-center gap-6">
                                <div className="flex">
                                    <ArrowDown className="arrowGSAP" strokeWidth={4} stroke="var(--white)" />
                                    <ArrowDown className="arrowGSAP rounded-2xl" strokeWidth={4} stroke="var(--white)" />
                                    <ArrowDown className="arrowGSAP" strokeWidth={4} stroke="var(--white)" />
                                </div>
                                <h1 className="font-bold contentPush white__text z-10">Projects Down Below</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hover:bg-zinc-100 transition-colors">
                    <div className="flex min-h-svh items-center flex-col flex-wrap lg:px-[10%] sm:px-6 lg:pb-12">
                        <h1 id="projects" className=" font-bold text-3xl mx-auto mt-24 mb-6 green__text"> Projects</h1>
                        <ProjectPreview projects={projects} />
                    </div>
                </section>
                <section className={`hover:bg-zinc-100 py-[10vh] px-[15vw] flex justify-center flex-col`}>
                    <div className="w-full flex justify-between py-6 sm:flex-col sm:items-center lg:flex-row lg:items-start">
                        <h1 id="graphics" className=" font-bold text-3xl"> Illustrations</h1>
                        <div className="flex justify-center">
                            <Button asChild onClick={() => window.scrollTo(0, 0)}>
                                <Link to={`/illustrations`}>
                                    To Illustrations Page
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <Carousel
                        opts={{
                            align: "end",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 2000,
                                loop: true,
                            }),
                        ]}
                        className="rounded-3xl"
                    >
                        <CarouselContent>
                            {illustrations.map((illustration, homeIll) => (
                                <CarouselItem key={homeIll}>
                                    <ImageExpand src={illustration}
                                        className="object-cover object-center h-[560px] w-full rounded-3xl overflow-hidden" alt={illustration} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </section>
                <section className="hover:bg-zinc-100 transition-colors w-full flex justify-center py-[10vh]">
                    <div className="skillArea">
                        <h1 className="font-bold text-2xl mb-6 green__text">Tools I use...</h1>
                        {skills.map((skills, skill) => (
                            <Badge key={skill} className="skills frosted m-1 bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-green-500 hover:text-zinc-50">
                                {skills}
                            </Badge>
                        ))}
                    </div>
                </section>

                <section className="contactArea h-screen flex flex-col items-center justify-center hover:bg-zinc-100 transition-colors">
                    <img src={croc_logo} alt="my crocodile logo" className="contact sm:w-2/6 lg:w-2/12" />
                    <h1 id="test" className="contact pt-10 text-3xl font-bold text-center">Want to Work together?</h1>
                    <p className="contact pt-6">Contact me at</p>
                    <p className="contact">jackietruong274@gmail.com</p>
                </section>

            </main>
            <Footer />
        </>
    )
}