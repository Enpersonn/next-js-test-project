import { clsx } from "@/utils/classes";
import Link from "next/link";
import { HtmlHTMLAttributes } from "react";

type buttonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button = ({ children, className, href, onClick, disabled }: buttonProps) => {

    if (href) {
        return (
            <Link href={href} className={`Button ${className}`} onClick={onClick}>
                {children}
            </Link>
        )
    }
    return (
        <button className={clsx("Button", className)} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;