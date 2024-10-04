"use client"
import Button from "@/components/input/Button";
import Transport from "@/components/Transport";


export default function Examples() {
    return (
        <div className=" grid grid-cols-12 ">
           <header className=" col-start-2 my-5 col-span-10">
            <Button href="/" >Go Back </Button>
           </header>
            <main className=" col-start-3 col-span-8">
        
            <div className=" grid grid-cols-2 gap-10 my-5 ">

                <Transport href="/examples/file-structure" src="/img/file-structure.png" alt="File Structure">File Structure</Transport>
                <Transport href="/examples/script-structure" src="/img/script-structure.png" alt="Script Structure">Script Example</Transport>
                <Transport href="/examples/rendering" src="/img/rendering.png" alt="Rendering">Rendering</Transport>
            </div>
            </main>
        </div>
    )
}
