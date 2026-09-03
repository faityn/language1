"use client";

import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { courses } from "./data";

export default function Courses() {
  const rail = useRef<HTMLDivElement>(null);
  const move = (dir: number) =>
    rail.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  return (
    <section id="courses" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-xs font-black uppercase tracking-[.22em] text-[#ff8f4b]">
              Хөтөлбөрүүд
            </div>
            <h2 className="max-w-3xl text-5xl font-black leading-[.95] tracking-[-.045em] text-[#063d38] sm:text-6xl">
              Чамд хэрэгтэй
              <br />
              <span className="text-[#ff8f4b]">хэлний хувилбар.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => move(-1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-[#063d38]/15 hover:bg-[#f1f6f3]"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => move(1)}
              className="grid h-12 w-12 place-items-center rounded-full bg-[#063d38] text-white hover:bg-[#0b514a]"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div
          ref={rail}
          className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5"
        >
          {courses.map((c, i) => (
            <article
              key={c.title}
              className={`reveal group min-w-[310px] snap-start rounded-[34px] ${c.color} p-6 transition duration-500 hover:-translate-y-2 md:min-w-[340px]`}
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-white/75 px-3 py-1 text-[10px] font-black tracking-[.16em] text-[#31524d]">
                  {c.tag}
                </span>
                <span className="text-3xl">{c.icon}</span>
              </div>
              <div className="mt-20">
                <h3 className="text-3xl font-black tracking-tight text-[#063d38]">
                  {c.title}
                </h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-[#31524d]">
                  {c.desc}
                </p>
                <div className="mt-7 flex items-center justify-between border-t border-[#063d38]/10 pt-4 text-xs font-bold text-[#31524d]">
                  <span>{c.level}</span>
                  <span>{c.time}</span>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-5 flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 text-sm font-black text-[#063d38] transition group-hover:bg-[#063d38] group-hover:text-white"
              >
                Хөтөлбөр үзэх <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

