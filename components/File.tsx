import type { fileType } from "@/types/file";
import { clsx } from "@/utils/classes";
import { useReducer, useState } from "react";


type FileProps = fileType & {
    setView: (file: fileType) => void;
}

const File = (props: FileProps) => {
    
    const [isOpen, dispatch] = useReducer((s: boolean) => !s, false);


    const handleClick = () => {
        if (props.children) {
            dispatch();
        }
        props.setView(props);
    }

    return(
        <div className="flex flex-col gap-2 items-start border-gray-300">
            <button onClick={handleClick} className="flex flex-col items-start border-l-2 pl-2 gap-2">
            {props.name}
            </button>
            {
                props.children &&
                    <div className={clsx(isOpen ? "block" : "hidden", "flex flex-col items-start ml-5 gap-2")}>
                        {props.children && props.children.map(child => (
                            <File key={child.name} {...child} setView={props.setView} />
                        ))}
                    </div>
            }
        </div>
    )
}


export default File;
