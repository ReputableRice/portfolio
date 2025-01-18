//images
import croc_logo from "/src/public/assets/images/CrocColour.png"

export default function Footer() {
    return (
        <footer className="bg-zinc-800 text-zinc-100 px-24 py-12 flex">
            <img src={croc_logo} className="w-24" />
        </footer>
    );
}
