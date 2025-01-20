export default function About() {
    return (
        <>
            <div className="flex lg:flex-row sm:flex-col h-svh">
                <div className="flex flex-col lg:w-1/2 h-full bg-red-300 justify-center">
                    <img src="https://placehold.co/600x400" className="h-full w-full object-cover"/>
                </div>
                <div className="flex flex-col lg:w-1/2 h-full lg:justify-center sm:p-6">
                    <h1 className="text-3xl font-bold">About Me</h1>
                    <p>Description About Me</p>
                </div>
            </div>
        </>
    )
}