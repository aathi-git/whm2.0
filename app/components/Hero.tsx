import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle";

export default function Hero() {
    return (
        <section className="dark:bg-black-800 dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">

                {/* Title with color variation */}
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                    Empowering
                    <span className="dark:text-blue-600 text-blue-600 dark:text-blue-300"> CyberSecurity </span>
                    Excellence
                </h1>

                {/* Description with color variation */}
                <p className="px-8 mt-8 mb-12 text-lg text-gray-700 dark:text-gray-300">
                    We transcend the boundaries of innovation in the dynamic realm of cyber security. As a pioneering force in the industry, we are dedicated to fortifying the digital landscapes that power the future.
                </p>

            </div>
        </section>

    );
}