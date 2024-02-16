import Image from "next/image"
import { client, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";


export const revalidate = 1;

async function getData() {
    const query = `            
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

    const data = await client.fetch(query);

    return data;
}

export default async function Blogs() {
    const data: simpleBlogCard[] = await getData();
    return (
        <section className="py-6 mb-12 sm:py-12 dark:bg-black-800 dark:text-white-100">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Blog - WHM</h2>
                    <p className="font-serif text-sm dark:text-gray-400">
                        "Empowering Cybersecurity Excellence Through Innovation and Insight."
                    </p>
                </div>
                <div className="dark:bg-black-800">
                    <div className="mx-auto max-w-7xl sm:px-4 lg:px-8">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                            {data.map((post, idx) => (
                                <div key={idx} className="bg-gray-200 rounded-lg">
                                    <Image
                                        src={urlFor(post.titleImage).url()}
                                        alt="Modern building architecture"
                                        width={300}
                                        height={200}
                                        objectFit="cover"
                                        className="h-32 w-full rounded-tl-xl rounded-tr-xl md:rounded-bl-none md:rounded-tr-none"
                                    />
                                    <CardContent className="p-4 dark:bg-black">
                                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{post.smallDescription}</p>
                                        <Button asChild className="dark:bg-blue-600 dark:hover:bg-blue-500 bg-blue-600 hover:bg-blue-700 mt-4">
                                            <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                                        </Button>
                                    </CardContent>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}