import { Metadata } from "next";
import "./page.css";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            筹划中,暂时没想好,放只我家妹妹吧😽......
          </p>
        </div>
      </div>
      <div className="gallery">
        <Image
          src="/img10.jpg"
          alt="description"
          width={350}
          height={300}
        />
        <Image
          src="/img2.jpg"
          alt="description"
          width={350}
          height={300}
        />
        <Image
          src="/img3.jpg"
          alt="description"
          width={350}
          height={300}
        />
        <Image
          src="/img4.jpg"
          alt="description"
          width={350}
          height={300}
        />
        <Image
          src="/img1.jpg"
          alt="description"
          width={350}
          height={300}
        />
        <Image
          src="/img5.jpg"
          alt="description"
          width={350}
          height={300}
        />
        <Image
          src="/img6.jpg"
          alt="description"
          width={350}
          height={300}
        />
        <Image
          src="/img7.jpg"
          alt="description"
          width={350}
          height={300}
        />
        <Image
          src="/img8.jpg"
          alt="description"
          width={350}
          height={300}
        />
        <Image
          src="/img9.jpg"
          alt="description"
          width={350}
          height={300}
        />
      </div>
    </div>
  );
}
