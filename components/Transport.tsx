import Link from "next/link";
import Image from "next/image";

const Transport = ({ href, children, src, alt }: { href: string, children: React.ReactNode, src: string, alt: string }) => {
    return (
        <Link href={href} className="Transport">
            <Image src={src} alt={alt} width={320} height={320} />
            <h2>{children}</h2>
        </Link>
    )
}

export default Transport;
