"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { courses } from "./data";

export default function Courses() {
  const rail = useRef<HTMLDivElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<
    (typeof courses)[number] | null
  >(null);
  const move = (dir: number) =>
    rail.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  useEffect(() => {
    if (!selectedCourse) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCourse(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedCourse]);

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
              className={`reveal group min-w-[310px] snap-start overflow-hidden rounded-[30px] bg-[#f7f6ef] shadow-[0_18px_50px_rgba(6,61,56,.12)] transition duration-500 hover:-translate-y-2 md:min-w-[340px]`}
            >
              <div
                className="relative h-56 overflow-hidden bg-[#063d38] bg-cover bg-center transition duration-700 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url(${c.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#063d38]/90 via-[#063d38]/15 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-black tracking-[.16em] text-[#063d38]">
                    {c.tag}
                  </span>
                  <span className="text-3xl drop-shadow-lg">{c.icon}</span>
                </div>
              </div>
              <div className={`p-6 ${c.color}`}>
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
              <button
                type="button"
                onClick={() => setSelectedCourse(c)}
                className="mt-5 flex items-center justify-between rounded-2xl bg-white/75 px-4 py-3 text-sm font-black text-[#063d38] transition hover:bg-[#063d38] hover:text-white"
              >
                Хөтөлбөр үзэх <ArrowRight size={17} />
              </button>
            </article>
          ))}
        </div>
      </div>
      {selectedCourse && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-[#063d38]/75 p-5 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedCourse(null);
          }}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[30px] bg-[#f7f6ef] shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-modal-title"
          >
            <div
              className="relative h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedCourse.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#063d38]/90 to-transparent" />
              <div className="absolute inset-x-6 bottom-5 flex items-end justify-between text-white">
                <div>
                  <span className="text-xs font-black uppercase tracking-[.18em] text-[#ffd96a]">
                    {selectedCourse.tag}
                  </span>
                  <h3
                    id="course-modal-title"
                    className="mt-1 text-3xl font-black"
                  >
                    {selectedCourse.title}
                  </h3>
                </div>
                <span className="text-4xl">{selectedCourse.icon}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#063d38] transition hover:bg-white"
                aria-label="Дэлгэрэнгүй цонх хаах"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-base leading-7 text-[#31524d]">
                {selectedCourse.desc}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className={`rounded-2xl p-4 ${selectedCourse.color}`}>
                  <span className="text-xs font-bold uppercase tracking-[.14em] text-[#31524d]">
                    Түвшин
                  </span>
                  <strong className="mt-1 block text-lg text-[#063d38]">
                    {selectedCourse.level}
                  </strong>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-[.14em] text-[#66817c]">
                    Үргэлжлэх хугацаа
                  </span>
                  <strong className="mt-1 block text-lg text-[#063d38]">
                    {selectedCourse.time}
                  </strong>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-[#e8fff5] p-5">
                <h4 className="font-black text-[#063d38]">
                  Хөтөлбөрт багтсан нь
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-[#31524d]">
                  {selectedCourse.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check size={17} className="shrink-0 text-[#ff8f4b]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                onClick={() => setSelectedCourse(null)}
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-[#063d38] px-5 py-4 text-center font-black text-white transition hover:bg-[#0b514a]"
              >
                Энэ хөтөлбөрт бүртгүүлэх <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
