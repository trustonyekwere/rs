import Link from "next/link"

export default function ButtonLink({ text, href }) {
  return (
    <Link
      href={href}
      className="
        inline-block
        rounded-full
        bg-orange-500
        px-8
        py-3
        text-md
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
