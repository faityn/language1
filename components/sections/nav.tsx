"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#063d38]/10 bg-[#f7f6ef]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#"
          className="flex items-center gap-3 font-black tracking-tight"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#063d38] text-xl text-white shadow-lg shadow-[#063d38]/20">
            L
          </span>
          <span className="text-xl text-[#063d38]">
            LOGO<span className="text-[#ff8f4b]">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#31524d] md:flex">
          <a href="#courses" className="transition hover:text-[#ff7d43]">
            Хөтөлбөр
          </a>
          <a href="#method" className="transition hover:text-[#ff7d43]">
            Аргачлал
          </a>
          <a href="#stories" className="transition hover:text-[#ff7d43]">
            Сэтгэгдэл
          </a>
          <a href="#faq" className="transition hover:text-[#ff7d43]">
            FAQ
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-[#063d38] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b514a] md:block"
        >
          Үнэгүй түвшин тогтоох →
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 md:hidden"
          aria-label="Цэс"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#063d38]/10 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4 font-semibold">
            {["courses", "method", "stories", "faq", "contact"].map((x) => (
              <a key={x} href={`#${x}`} onClick={() => setOpen(false)}>
                {x === "courses"
                  ? "Хөтөлбөр"
                  : x === "method"
                    ? "Аргачлал"
                    : x === "stories"
                      ? "Сэтгэгдэл"
                      : x === "faq"
                        ? "FAQ"
                        : "Холбогдох"}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

