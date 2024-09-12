import { posts } from "#site/content";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My About",
  description: "This is a description",
};

const POSTS_PER_PAGE = 5;

interface AboutPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function AboutPage({ searchParams }: AboutPageProps) {

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">关于</h1>
          <p className="text-xl text-muted-foreground">
            web全栈开发
          </p>
          <p className="text-xl text-muted-foreground">QQ : 1907395787</p>
          <p className="text-xl text-muted-foreground">
            WeChat : zxl1907395787
          </p>
          <p className="text-xl text-muted-foreground">Phone : 17339811909</p>
          <p className="text-xl text-muted-foreground">
            E-mail : zxl17339811909@163.com
          </p>
        </div>
      </div>
    </div>
  );
}
