"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section
      ref={ref}
      className="noise relative min-h-[760px] overflow-hidden pt-28"
    >
      <div className="absolute -left-20 top-24 h-72 w-72 bg-[#ffb5c9]/50 hero-blob" />
      <div
        className="absolute -right-28 top-10 h-96 w-96 bg-[#82cfff]/55 hero-blob"
        style={{ transform: `translateY(${y * 0.12}px)` }}
      />
      <div className="absolute left-[45%] top-32 h-40 w-40 rounded-full bg-[#ffd96a]/60 blur-2xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-14 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pt-20">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#063d38]/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-[#0b514a] shadow-sm">
            <Sparkles size={14} className="text-[#ff8f4b]" /> Хэл сурах шинэ
            хэмнэл
          </div>
          <h1 className="text-balance text-6xl font-black leading-[.92] tracking-[-.055em] text-[#063d38] sm:text-7xl lg:text-[6.6rem]">
            Хэлийг
            <span className="relative mx-2 inline-block text-[#ff8f4b]">
              цээжлэх
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 320 18"
                fill="none"
              >
                <path
                  d="M3 11C74 2 210 1 317 9"
                  stroke="#063d38"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            биш,
            <br />
            амьдруул.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#49645f] sm:text-xl">
            LOGO бол монгол суралцагчдад зориулсан{" "}
            <b className="text-[#063d38]">яриа төвтэй</b> хэлний сургалтын шинэ
            үеийн орон зай. Хичээл бүрт чи ярьж, туршиж, хэрэглэнэ.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#063d38] px-7 py-4 font-bold text-white shadow-xl shadow-[#063d38]/15 transition hover:-translate-y-1"
            >
              Хөтөлбөрүүд үзэх{" "}
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <a
              href="#method"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#063d38]/15 bg-white/60 px-7 py-4 font-bold text-[#063d38] transition hover:bg-white"
            >
              <Play size={16} fill="currentColor" /> Яаж хичээллэдгийг үзэх
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-7 text-sm">
            <div>
              <b className="text-2xl text-[#063d38]">1,200+</b>
              <span className="ml-2 text-[#66817c]">суралцагч</span>
            </div>
            <div>
              <b className="text-2xl text-[#063d38]">94%</b>
              <span className="ml-2 text-[#66817c]">дахин сонгодог</span>
            </div>
            <div>
              <b className="text-2xl text-[#063d38]">4.9/5</b>
              <span className="ml-2 text-[#66817c]">үнэлгээ</span>
            </div>
          </div>
        </div>

        <div
          className="relative min-h-[520px]"
          style={{ transform: `translateY(${y * -0.055}px)` }}
        >
          <div className="absolute right-0 top-8 h-[430px] w-[90%] rotate-[-5deg] rounded-[38px] bg-[#063d38] shadow-2xl shadow-[#063d38]/25" />
          <div className="float absolute right-4 top-0 w-[88%] rounded-[36px] border border-white/50 bg-[#e8fff5] p-5 shadow-2xl lg:right-7">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <i className="h-2.5 w-2.5 rounded-full bg-[#ff8f4b]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#ffd96a]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#82cfff]" />
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-[#47706a]">
                домайнхаяг.mn
              </span>
            </div>
            <div className="mt-6 rounded-3xl bg-[#063d38] p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[.2em] text-[#bdeecf]">
                Today&apos;s challenge
              </div>
              <div className="mt-3 text-3xl font-black">Speak for 60 sec.</div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-[72%] rounded-full bg-[#ffd96a]" />
              </div>
              <div className="mt-2 flex justify-between text-xs text-white/60">
                <span>72% complete</span>
                <span>+120 XP</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-3xl bg-[#ffd96a] p-5">
                <div className="text-3xl">🎧</div>
                <b className="mt-5 block text-[#063d38]">Listening</b>
                <span className="text-xs text-[#31524d]">12 min today</span>
              </div>
              <div className="rounded-3xl bg-[#ffb5c9] p-5">
                <div className="text-3xl">💬</div>
                <b className="mt-5 block text-[#063d38]">Speaking</b>
                <span className="text-xs text-[#31524d]">3 new topics</span>
              </div>
            </div>
          </div>
          <div className="float-delay absolute bottom-5 left-0 w-52 rounded-3xl border-4 border-[#f7f6ef] bg-white p-5 shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#82cfff] text-xl">
                7+
              </span>
              <div>
                <b className="block text-[#063d38]">IELTS</b>
                <span className="text-xs text-[#6b8580]">mock result</span>
              </div>
            </div>
            <div className="mt-4 text-4xl font-black text-[#063d38]">
              7.5 <span className="text-sm text-[#ff8f4b]">↗</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-[#063d38]/10 bg-[#063d38] py-4 text-white">
        <div className="marquee flex w-max gap-12 whitespace-nowrap text-sm font-black uppercase tracking-[.2em]">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            [
              "SPEAK MORE",
              "THINK GLOBAL",
              "LIVE THE LANGUAGE",
              "ӨДӨР БҮР 1%",
              "SPEAK MORE",
              "THINK GLOBAL",
            ].map((t, j) => (
              <span key={`${i}-${j}`} className="flex items-center gap-12">
                {t}
                <span className="text-[#ffd96a]">✦</span>
              </span>
            )),
          )}
        </div>
      </div> */}
    </section>
  );
}

