import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <Link
              href="/"
              className="font-medium underline underline-offset-4"
            >
              Suren Hembram
            </Link>
            . Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-4 px-8 md:px-0">
          <Link href="https://github.com/surenhembram" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/surenhembram" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="mailto:surenhembram16@gmail.com">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer