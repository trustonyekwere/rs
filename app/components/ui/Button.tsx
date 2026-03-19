import Link from "next/link"

type ButtonLinkProps = {
    text: string
    href: string
}

export default function ButtonLink({ text, href }: ButtonLinkProps) {
    return (
        <Link
            href={href}
            className="
                inline-block
                w-fit
                rounded-full
                bg-orange-500
                ease-in-out
                active:scale-105
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-orange-600
                hover:scale-105
            "
            >
            {text}
        </Link>
    )
}
