import croc_logo from "/src/public/assets/images/CrocColour.png"
import { SocialIcon } from 'react-social-icons'

export default function Contact() {
    return (
        <>
            <section id="contact" className="h-screen flex flex-col items-center justify-center">
                <img src={croc_logo} alt="my crocodile logo" className="sm:w-2/6 lg:w-2/12" />
                <h1 className="pt-10 text-3xl font-bold text-center">Want to Work together?</h1>
                <p className="pt-6">Contact me at</p>
                <p>jackietruong274@gmail.com</p>
                <h1 className="mt-6 text-xl">I'm also here!</h1>
                <div className="w-1/2 flex items-center justify-center gap-6 mt-6">
                    <SocialIcon url="https://www.linkedin.com/in/jackiehtruong/" target="_blank" />
                </div>
            </section>
        </>
    )
}