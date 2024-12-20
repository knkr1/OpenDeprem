"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";
import CardStack from "@/components/CardStack";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import CoolButton from "@/components/CoolButton";

export default function About() {
  const words = ["Şeffaf", "Ücretsiz", "Yenilikçi", "OSS"];
  return (
    
    <main className="dark">
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 fixed z-50">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a href="https://deprem.acz.icu/" className="hover:underline">
                OpenDeprem
              </a>
              <span> | Apache V2 License</span>
            </span>
          </div>
        </footer>
      {/* Aurora Start*/}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            OpenDeprem
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Açık Kaynaklı, toplumdan destek gören ve kâr amacı gütmeyen
            websitesi.
          </div>
        </motion.div>
      </AuroraBackground>
      {/* Aurora End*/}
      {/* Demo Start*/}
      <div className="w-full h-full dark:bg-slate-900 bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center flex-col">
        <div className="absolute blur-sm pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-row overflow-hidden gap-40 items-center flex-nowrap">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Limitsiz, aboneliksiz <br />{" "}
              <Cover duration={100}>saniyeler içinde</Cover> uyarılar.
            </h1>
          </div>
          <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="text-4xl md:text-4xl lg:text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
              <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold">
                OpenDeprem
              </span>{" "}
              <br />
              <FlipWords words={words} />
            </div>
          </div>
        </div>
        <CardStack />
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mb-16 mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Kendim Hakkımda
        </h1>
        <div className="w-auto h-auto dark:bg-slate-950 bg-white text-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center flex-col rounded-lg">
          <div className="absolute blur-sm pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>

                  <p className="text-xl mb-4">{item.title}</p>

                  <div className="text-sm  prose prose-sm dark:prose-invert">
                    {item?.image && (
                      <Image
                        src={item.image}
                        alt="blog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover"
                      />
                    )}
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
        <div className="mb-64"></div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mb-16 mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Bana Ulaşmak İçin:
        </h1>
        <div className="flex flex-row gap-10 mb-20">
          <CoolButton
            text={"Discord"}
            link={"https://discordapps.com/users/368813671402569729"}
          />
          <CoolButton text={"E-Posta"} link={"mailto:kaan@acz.icu"} />
        </div>
      </div>
    </main>
  );
}

const dummyContent = [
  {
    title: "Ben Kimim",
    description: (
      <>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </>
    ),
    badge: "Lorem Ipsum.",
  },
];
