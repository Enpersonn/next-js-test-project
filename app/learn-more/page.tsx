import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";




export default function LearnMore() {
    return (
        <div className=" grid grid-cols-12 ">
            <header className=" col-start-2 my-5 col-span-10">
            <h1>Learn More</h1>
            </header>
            <main className=" col-start-3 col-span-8">

            <ul>
                <li><Link href="https://nextjs.org/docs" className=" flex gap-2 items-center">Next.js Docs <SquareArrowOutUpRight className=" size-4" /></Link></li>
                <li><Link href="https://tailwindcss.com/docs/installation" className=" flex gap-2 items-center">Tailwind CSS Docs <SquareArrowOutUpRight className=" size-4" /></Link></li>
                <li><Link href="https://reactjs.org/docs/getting-started.html" className=" flex gap-2 items-center">React Docs <SquareArrowOutUpRight className=" size-4" /></Link></li>
            </ul>
            </main>
        </div>
    )
}
