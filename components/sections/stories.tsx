"use client";

import { useEffect, useState } from "react";
import { Headphones, Languages, MessageCircle, Star } from "lucide-react";
import { testimonials } from "./data";

export default function Stories() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((x) => (x + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);
  const t = testimonials[index];
  return (
    <section id="stories" className="bg-[#063d38] py-28 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-xs font-black uppercase tracking-[.22em] text-[#ffd96a]">
              Суралцагчдын түүх
            </div>
            <h2 className="text-5xl font-black tracking-[-.045em] sm:text-6xl">
              Тэдний хэл
              <br />
              өөр болсон.
            </h2>
          </div>
          <div className="flex gap-1 text-[#ffd96a]">
            {[1, 2, 3, 4, 5].map((x) => (
              <Star key={x} size={19} fill="currentColor" />
            ))}
          </div>
        </div>
        <div className="reveal mt-14 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-[38px] bg-[#ffb5c9] p-8 text-[#063d38]">
            <div className="text-7xl font-black leading-none">&ldquo;</div>
            <p className="mt-4 text-2xl font-bold leading-9">{t[2]}</p>
            <div className="mt-10 flex items-center justify-between border-t border-[#063d38]/15 pt-5">
              <div>
                <b>{t[0]}</b>
                <div className="text-sm opacity-60">{t[1]}</div>
              </div>
              <b className="text-xl">★ {t[3]}</b>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[38px] bg-[#0d5149] p-8">
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#82cfff]/25 blur-2xl" />
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/10 p-5">
                  <Headphones />
                  <b className="mt-12 block text-3xl">18h</b>
                  <span className="text-xs text-white/55">speaking time</span>
                </div>
                <div className="rounded-3xl bg-[#ffd96a] p-5 text-[#063d38]">
                  <Languages />
                  <b className="mt-12 block text-3xl">+420</b>
                  <span className="text-xs opacity-60">шинэ үг</span>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <MessageCircle />
                  <b className="mt-12 block text-3xl">32</b>
                  <span className="text-xs text-white/55">real topics</span>
                </div>
              </div>
              <div className="mt-4 rounded-3xl bg-white p-6 text-[#063d38]">
                <div className="flex items-center justify-between">
                  <b>Ахицын snapshot</b>
                  <span className="text-xs font-bold text-[#ff8f4b]">
                    +28% / 8 weeks
                  </span>
                </div>
                <div className="mt-5 flex h-28 items-end gap-2">
                  {[35, 42, 48, 55, 58, 72, 76, 88, 94].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-xl bg-[#bdeecf]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-9 bg-[#ffd96a]" : "w-2.5 bg-white/25"}`}
              aria-label={`Сэтгэгдэл ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

