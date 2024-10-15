import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            筹划中,暂时没想好,放只我家妹妹吧😽.
          </p>
        </div>
      </div>
      {/* <div className="grid grid-cols-12 gap-3 mt-8">
        <img
          src="/cat.jpg"
          alt=""
          className="min-w-96 col-span-12 col-start-1 sm:col-span-8"
        />
        <div className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          未完待续......
        </div>
      </div> */}
      <div className="gallery">
        <img
          src="/img10.jpg"
        ></img>
        <img src="/img2.jpg" alt="mimi"></img>
        <img src="/img3.jpg" alt="mimi"></img>
        <img src="/img4.jpg" alt="mimi"></img>
        <img src="/img1.jpg" alt="mimi"></img>
        <img src="/img5.jpg" alt="mimi"></img>
        <img src="/img6.jpg" alt="mimi"></img>
        <img src="/img7.jpg" alt="mimi"></img>
        <img src="/img8.jpg" alt="mimi"></img>
        <img src="/img9.jpg" alt="mimi"></img>
      </div>
    </div>
  );
}
