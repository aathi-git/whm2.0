import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center justify-between  mx-auto px-4 py-5">
            <Link href="/" className="font-bold text-3xl">
                WHM
            </Link>
            <div className="w-full relative flex items-center justify-between  mx-auto px-4 py-5">
            <h1>  </h1>
            <ModeToggle />
            </div>
            <Button asChild>
                <Link href="https://aathi-git.github.io/WHM/contact.html">Let’s work togather</Link>
            </Button>
        </nav>
    )
}