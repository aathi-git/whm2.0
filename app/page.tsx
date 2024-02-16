import Image from "next/image"
import Navbar from "./components/Navbar"
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import About from "./components/About";

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


export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  return (
    <div>
      <Hero />
      <Blogs />
      <About />
    </div>
  );
}
