"use client"
import { fileStructure } from "@/lib/file-structure";
import File from "@/components/File";
import { fileType } from "@/types/file";
import { useState } from "react";


export default function FileStructure() {
    const [view, setView] = useState<fileType | null>(null);
    
  return (
    <div className=" grid grid-cols-8 gap-2">
      <div className="flex flex-col items-start gap-2 col-span-3" >
      <h1>File Structure</h1>
        {fileStructure.map(file => (
            <File key={file.title} {...file} setView={setView} />
        ))}
      </div>
      <div className="col-span-5">
      {
        view && (
            <>
                <h1>{view.title}</h1>
                {view.description && view.description.map((description, index) => (
                    <p key={index}>{description}</p>
                ))}
            </>
        )
      }
      </div>
    </div>
  );
}


 