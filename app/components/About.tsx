import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle";

export default function About() {
    return (
        <section className="py-6 dark:bg-black-800 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Our About</h1>
                <p className="max-w-2xl text-center dark:text-gray-400">Why WHM?
                    WHM is not just a brand; it's a reflection of my dedication to fortify digital landscapes. Whether it's crafting intricate code or navigating the complexities of cybersecurity, I strive to embody the spirit of WHM.</p>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="/logo.png" />
                        <p className="text-xl font-semibold leadi">Aathish</p>
                        <p className="dark:text-gray-400">Founder</p>
                    </div>
                </div>
            </div>
        </section>
    );
}