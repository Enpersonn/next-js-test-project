import Button from "@/components/input/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-between items-center">
      <main className="grid grid-rows-3 grid-cols-8">
        <div className=" flex flex-col h-full justify-center gap-8 row-start-2 col-start-3 col-span-4">

        <h1>Welcome to the Next.js example</h1>
        <h2> This project was first set up with the following steps:</h2>
          <p>1. <code>npx create-next-app@latest</code> to create the project</p>
          <p>2. <code>pnpm i</code> to move the instaled dependencies to pnpm instead of npm</p>
          <p>3. <code>pnpm dev</code> to start the development server</p>
          <div className=" w-full flex justify-center items-center ">
            <Button className=" flex gap-2 items-center" href="/examples">
              Get Started
              <ArrowRight className=" size-5" />
            </Button>
          </div>
        </div>
      </main>
      <footer className="w-full flex justify-center items-center gap-5 p-5 ">
        <Link href="">Learn More</Link>
        <Link href="">Examples</Link>
      </footer>
    </div>
  );
}
