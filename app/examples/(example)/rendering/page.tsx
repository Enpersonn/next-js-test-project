"use client"
import { clsx } from "@/utils/classes";
import { useState } from "react";



export default function RenderingPage() {
    const [clientSide, setClientSide] = useState(true);



    return(
        <main className=" flex flex-col gap-10">
            <div className=" flex justify-around w-full gap-10">
                <button onClick={() => setClientSide(true)} className={clsx(" w-1/2 flex flex-col items-center justify-center p-3", clientSide ? "border-b border-gray-300 " : "")}>
                    <p>Client Side Rendering</p>
                </button>
                <button onClick={() => setClientSide(false)} className={clsx(" w-1/2 flex flex-col items-center justify-center p-3", !clientSide ? "border-b border-gray-300 " : "")}>
                    <p>Server Side Rendering</p>
                </button>
            </div>
            {
                clientSide ? (
                    <div>
                        <h1>Client Side Rendering</h1>
                    </div>
                ) : (
                    <div>
                        <h1>Server Side Rendering</h1>
                    </div>
                )
            }
        </main>
    )
}

