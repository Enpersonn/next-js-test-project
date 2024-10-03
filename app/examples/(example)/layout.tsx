import Button from "@/components/input/Button";



export default function ExampleLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className=" grid grid-cols-12 ">
        <header className=" col-start-2 my-5 col-span-10">
            <Button href="/examples" >Go Back </Button>
        </header>
        <main className=" col-start-4 col-span-6">
            {children}
        </main>
      </div>
  );
}
