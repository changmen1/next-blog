"use client";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
// @ts-ignore
import confetti from "canvas-confetti";
export default function Home() {
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["web全栈开发", "flutter APP开发", "Tr/En 客户端开发"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);
  const period = 2000;
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-1 lg:py-32">
        <div className="container flex flex-col gap-4 text-center items-center">
          <Avatar className="w-23 h-32 rounded-full">
            <AvatarImage
              src="/my.jpg"
              alt="@shadcn"
              className="object-cover"
              onClick={handleConfetti}
            />
            <AvatarFallback>朱昕龙</AvatarFallback>
          </Avatar>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
                  {`Hello! 我是朱昕龙`}{" "}
                  <span className="txt-rotate" data-period="1000">
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
              </div>
            )}
          </TrackVisibility>
          <p className="text-xl text-muted-foreground">
            在职web全栈开发者，擅长javaScript CSS React Electron Tauri Go java
            springBoot Dart Flutter
          </p>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            欢迎来到我的个人网站😘。本网站使用tailwind、shadcn、velite 和 Nextjs
            14 构建
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              onClick={() => {
                confetti();
              }}
              href="/blog"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-fit",
                "border-2 border-black"
              )}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit",
                "border-2 border-black"
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
