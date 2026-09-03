"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { faqs } from "./data";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-white py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
        <div className="reveal">
          <div className="mb-4 text-xs font-black uppercase tracking-[.22em] text-[#ff8f4b]">
            Түгээмэл асуулт
          </div>
          <h2 className="text-5xl font-black leading-none tracking-[-.05em] text-[#063d38]">
            Эргэлзээ
            <br />
            байна уу?
          </h2>
          <p className="mt-6 leading-7 text-[#687d78]">
            Хариулт энд байхгүй бол бидэнд шууд бичээрэй.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 font-black text-[#ff8f4b]"
          >
            Биднээс асуух <ArrowRight size={17} />
          </a>
        </div>
        <div className="reveal divide-y divide-[#063d38]/10">
          {faqs.map(([q, a], i) => (
            <div key={q} className="py-5">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between text-left text-lg font-black text-[#063d38]"
              >
                <span>{q}</span>
                <ChevronDown
                  size={20}
                  className={`transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="max-w-2xl pt-4 text-sm leading-7 text-[#667c77]">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

