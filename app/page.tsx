import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-1 lg:py-32">
        <div className="container flex flex-col gap-4 text-center items-center">
          <Avatar className="w-23 h-32 rounded-full">
            <AvatarImage src="/my.jpg" alt="@shadcn" className="object-cover" />
            <AvatarFallback>朱昕龙</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m ZhuXinLong
          </h1>
          <p className="text-xl text-muted-foreground">
            在职web全栈开发者，擅长javascript CSS React Electron Tauri Go Dart
            Flutter
          </p>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            欢迎来到我的个人网站。本网站使用tailwind、shadcn、velite 和 Nextjs
            14 构建
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
