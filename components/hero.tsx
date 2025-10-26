"use client";
import { gsap } from "@/app/shared/gsap";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Allison } from "next/font/google";
import { MouseEventHandler, useLayoutEffect, useRef } from "react";

const allisonFont = Allison({
  variable: "--allison-font",
  weight: "400",
  subsets: ["latin"],
});

export const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const currentRef = headingRef.current;
    if (!currentRef) return;
    // const tween = gsap.fromTo(
    //   currentRef,
    //   { y: -50, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 2, ease: "power2.out" }
    // );

    const tl = gsap.timeline();

    tl.fromTo(
      currentRef.querySelectorAll("[data-char]"), // Target all the letters
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.05,
      },
      "start"
    );

    tl.fromTo(
      currentRef,
      { backgroundPosition: "200% 0" },
      {
        backgroundPosition: "0% 0",
        duration: 3,
        ease: "linear",
        repeat: -1,
      },
      "start+=0.5"
    );

    // gsap.set(currentRef, { opacity: 0.8 });

    tl.fromTo(
      currentRef,
      {
        opacity: 0.9,
        scale: 1,
      },
      {
        opacity: 1,
        scale: 1.01,
        duration: 3,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, []);

  const handleMouseMove: MouseEventHandler = (e) => {
    if (!headingRef.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } =
      headingRef.current.getBoundingClientRect();

    // Calculate mouse position relative to the center of the element
    // Result will be from -0.5 to 0.5
    const x = (clientX - (left + width / 2)) / width; // -0.5 to 0.5
    const y = (clientY - (top + height / 2)) / height; // -0.5 to 0.5

    const tiltStrength = 35; // How much it should tilt
    const skewStrength = 4;

    gsap.to(headingRef.current, {
      skewX: x * skewStrength,
      skewY: y * skewStrength,

      rotationY: x * tiltStrength,
      rotationX: -y * tiltStrength, // Invert y for natural feel

      duration: 0.7,
      ease: "power2.out",
    });
  };

  const handleMouseLeave: MouseEventHandler = () => {
    gsap.to(headingRef.current, {
      skewX: 0,
      skewY: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)", // A nice bouncy return
    });
  };

  return (
    <section className="text-center py-20 px-4 sm:px-6 justify-center items-center flex flex-col">
      <h1
        ref={headingRef}
        // className={cn(
        //   `text-8xl sm:text-9xl lg:text-[10rem] mb-4 leading-none
        //            animate-text-shimmer bg-clip-text text-transparent
        //            bg-[linear-gradient(110deg,var(--color-foreground),45%,var(--color-primary),55%,var(--color-foreground))]
        //            bg-size-[200%_auto] p-3`,
        //   allisonFont.className
        // )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          allisonFont.className,
          "text-8xl sm:text-9xl lg:text-[10rem] mb-4 leading-none text-transparent p-3",
          "bg-clip-text bg-size-[200%_auto]",
          "bg-[linear-gradient(110deg,var(--color-foreground),45%,var(--color-primary),55%,var(--color-foreground))]"
        )}
      >
        {"Full-Stack Developer".split("").map((char, index) => (
          <span
            key={index}
            className="inline-block"
            // Use a class or data-attribute to target the letters
            data-char
          >
            {/* Handle spaces explicitly so they take up space */}
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        I design and ship fast, accessible web apps that solve real business
        problems. Welcome to my portfolio.
      </p>
      <div className="space-x-4">
        <Button
          size="lg"
          asChild
          className="transition-transform duration-300 hover:-translate-y-1"
        >
          <Link href="/#projects">View Projects</Link>
        </Button>
        <Button
          size="lg"
          variant="secondary"
          asChild
          className="transition-transform duration-300 hover:-translate-y-1"
        >
          <Link href="/#contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
};
