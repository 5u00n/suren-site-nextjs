import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <Link
              href="/"
              className="font-medium underline underline-offset-4"
            >
              Suren Hembram
            </Link>
            {" "}with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js 14
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
        <div className="flex items-center gap-4">
          <Link href="https://github.com/5u00n" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/surenhembram" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="mailto:surenhembram97@gmail.com">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer