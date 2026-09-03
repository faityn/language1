"use client";

import { Instagram, MessageCircle } from "lucide-react";
import Contact from "./sections/contact";
import Courses from "./sections/courses";
import FAQ from "./sections/faq";
import Hero from "./sections/hero";
import Method from "./sections/method";
import Nav from "./sections/nav";
import Stories from "./sections/stories";
import useReveal from "./sections/useReveal";

export default function Site() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Courses />
        <Method />
        <Stories />
        <FAQ />
        <Contact />
      </main>
      <footer className="bg-[#f7f6ef] px-5 pb-8 pt-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-[#063d38]/10 pt-7 text-sm text-[#657b77] sm:flex-row">
          <div>
            <b className="text-[#063d38]">Сургалтын төвийн нэр.</b> — Хэл сурах
            шинэ хэмнэл.
          </div>
          <div className="flex items-center gap-5">
            <span>© 2026 Сургалтын төвийн нэр</span>
            <Instagram size={17} />
            <MessageCircle size={17} />
          </div>
        </div>
      </footer>
    </>
  );
}
