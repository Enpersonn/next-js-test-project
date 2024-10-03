import Image from "next/image";


const CodeView = ({src}: {src: string[]}) => {
    return(
        <div>
            {src.map((src, index) => (
                <Image key={index} src={src} alt="code" className="w-full h-full" width={1000} height={1000} />
            ))}
        </div>
    )
}

export default CodeView;

