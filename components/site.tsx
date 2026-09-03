"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Headphones,
  Instagram,
  Languages,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  Star,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";

const courses = [
  {
    tag: "ЯРИА",
    title: "Speak Lab",
    desc: "Өдөр тутмын англи хэлээ айдасгүй, амьд яриагаар хөгжүүл.",
    level: "A2 → B2",
    time: "8 долоо хоног",
    color: "bg-[#ffd96a]",
    icon: "💬",
  },
  {
    tag: "IELTS",
    title: "Score 7+",
    desc: "Шалгалтын стратеги + бодит mock test + багшийн нарийн feedback.",
    level: "B1 → C1",
    time: "10 долоо хоног",
    color: "bg-[#82cfff]",
    icon: "🎯",
  },
  {
    tag: "ХҮҮХЭД",
    title: "Little Explorers",
    desc: "Тоглоом, story, хөдөлгөөнөөр англи хэлтэй найзална.",
    level: "6–12 нас",
    time: "12 долоо хоног",
    color: "bg-[#ffb5c9]",
    icon: "🌈",
  },
  {
    tag: "КАРЬЕР",
    title: "WorkTalk",
    desc: "Ажлын уулзалт, presentation, email, interview-д зориулсан хэл.",
    level: "B1 → C1",
    time: "6 долоо хоног",
    color: "bg-[#bdeecf]",
    icon: "💼",
  },
];

const testimonials = [
  [
    "Номин",
    "IELTS 7+",
    "Өмнө нь англиар ярихаас ичдэг байсан. 2 сарын дараа presentation-аа англиар өөртөө итгэлтэй хийдэг болсон.",
    "4.9",
  ],
  [
    "Тэмүүлэн",
    "Speak Lab",
    "Хичээл нь яг л найзуудтайгаа ярьж байгаа юм шиг. Дүрэм цээжлүүлэхээс илүү хэрэглүүлдэг нь таалагдсан.",
    "5.0",
  ],
  [
    "Саруул",
    "WorkTalk",
    "Ажлын ярилцлагад англиар ороод тэнцсэн. Яг хэрэгтэй үг, нөхцөл дээр бэлдсэн нь хамгийн их тус болсон.",
    "5.0",
  ],
];

const faqs = [
  [
    "Анхан шатны хүн элсэж болох уу?",
    "Тийм. Эхлэхийн өмнө 15 минутын үнэгүй түвшин тогтоох ярилцлага хийж, танд тохирох бүлгийг санал болгоно.",
  ],
  [
    "Онлайн болон танхимын хичээл хоёулаа байгаа юу?",
    "Байгаа. Онлайн бүлэг нь Zoom + интерактив даалгавар, танхимын бүлэг нь жижиг багийн workshop хэлбэртэй.",
  ],
  [
    "Нэг ангид хэдэн хүн байдаг вэ?",
    "Ихэнх бүлэг 6–10 суралцагчтай. Ярих хугацааг хүн бүрт өгөхийг бид хамгийн чухал гэж үздэг.",
  ],
  [
    "Төлбөрөө хувааж төлж болох уу?",
    "Тийм. Сонгосон хөтөлбөрөөс хамаарч 2 хувааж төлөх боломжтой.",
  ],
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Nav() {
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

function Hero() {
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

function Courses() {
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

function Method() {
  return (
    <section id="method" className="grid-paper overflow-hidden py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div className="reveal relative min-h-[500px]">
          <div className="absolute left-4 top-4 h-[420px] w-[420px] rounded-full bg-[#ffd96a]/55 blur-2xl" />
          <div className="absolute left-10 top-12 w-[88%] max-w-[470px] rotate-[-4deg] rounded-[40px] bg-[#063d38] p-5 shadow-2xl">
            <div className="rounded-[30px] bg-[#e8fff5] p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#0b514a]">
                  LINGUORA METHOD
                </span>
                <Zap size={18} className="text-[#ff8f4b]" />
              </div>
              <div className="mt-12 grid grid-cols-3 gap-3">
                {["Hear", "Think", "Speak"].map((x, i) => (
                  <div
                    key={x}
                    className={`rounded-3xl p-4 ${i === 0 ? "bg-[#82cfff]" : i === 1 ? "bg-[#ffb5c9]" : "bg-[#ffd96a]"}`}
                  >
                    <span className="text-xs font-black">{`0${i + 1}`}</span>
                    <b className="mt-12 block text-lg text-[#063d38]">{x}</b>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-3xl bg-white p-5">
                <div className="flex justify-between text-xs font-bold">
                  <span>Confidence</span>
                  <span>84%</span>
                </div>
                <div className="mt-3 h-3 rounded-full bg-[#dfece7]">
                  <div className="h-full w-[84%] rounded-full bg-[#ff8f4b]" />
                </div>
              </div>
            </div>
          </div>
          <div className="float absolute bottom-4 right-0 rounded-3xl border-4 border-[#f7f6ef] bg-white p-5 shadow-xl">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#bdeecf]">
                <Check size={18} />
              </span>
              <div>
                <b className="text-sm text-[#063d38]">Daily streak</b>
                <div className="text-xs text-[#7b918d]">12 days 🔥</div>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal">
          <div className="mb-4 text-xs font-black uppercase tracking-[.22em] text-[#ff8f4b]">
            Бидний аргачлал
          </div>
          <h2 className="text-5xl font-black leading-[.96] tracking-[-.05em] text-[#063d38] sm:text-6xl">
            Хичээл дуусахад
            <br />
            <span className="text-[#ff8f4b]">хэл үлдэнэ.</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#5b716d]">
            Бид &ldquo;сонс → цээжил → март&rdquo; гэсэн хуучин мөчлөгийг
            эвдэнэ. Хэл бол мэдлэг биш, <b className="text-[#063d38]">булчин</b>{" "}
            гэж үздэг.
          </p>
          <div className="mt-9 space-y-5">
            {[
              [
                Globe2,
                "REAL-WORLD",
                "Бодит нөхцөл дээр хэрэглэнэ",
                "Кафе, ажил, аялал, meeting, interview — сэдэв бүр бодит амьдралаас.",
              ],
              [
                Users,
                "SMALL CREW",
                "6–10 хүнтэй жижиг баг",
                "Ярих хугацаа хүн бүрт хүрнэ. Багш бол лекц уншигч биш, coach.",
              ],
              [
                Target,
                "VISIBLE PROGRESS",
                "Ахиц чинь харагдана",
                "7 хоног бүр speaking score, vocabulary streak, personal feedback авна.",
              ],
            ].map(([Icon, tag, title, desc]) => {
              const I = Icon as typeof Globe2;
              return (
                <div key={String(tag)} className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#063d38] text-white">
                    <I size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-[.18em] text-[#ff8f4b]">
                      {String(tag)}
                    </div>
                    <h3 className="mt-1 font-black text-[#063d38]">
                      {String(title)}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#657b77]">
                      {String(desc)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stories() {
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

function FAQ() {
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

function Contact() {
  return (
    <section id="contact" className="px-5 pb-12 pt-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#ffd96a] p-8 md:p-12 lg:p-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="mb-4 text-xs font-black uppercase tracking-[.22em] text-[#063d38]">
              Эхлэхэд бэлэн үү?
            </div>
            <h2 className="max-w-3xl text-5xl font-black leading-[.92] tracking-[-.05em] text-[#063d38] sm:text-7xl">
              Хэлээ өөрчил.
              <br />
              Өдөрөө өөрчил.
            </h2>
            <p className="mt-6 max-w-xl text-[#31524d]">
              15 минутын үнэгүй түвшин тогтоох ярилцлага захиалаад, өөрт тохирох
              хөтөлбөрөө ол.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-[32px] bg-white p-5 shadow-xl sm:p-7"
          >
            <div className="grid gap-3">
              <input
                required
                placeholder="Нэр"
                className="rounded-2xl border border-[#063d38]/10 bg-[#f7f6ef] px-4 py-4 outline-none focus:border-[#063d38]"
              />
              <input
                required
                type="tel"
                placeholder="Утасны дугаар"
                className="rounded-2xl border border-[#063d38]/10 bg-[#f7f6ef] px-4 py-4 outline-none focus:border-[#063d38]"
              />
              <select className="rounded-2xl border border-[#063d38]/10 bg-[#f7f6ef] px-4 py-4 outline-none">
                <option>Сонирхож буй хөтөлбөр</option>
                <option>Speak Lab</option>
                <option>IELTS 7+</option>
                <option>Little Explorers</option>
                <option>WorkTalk</option>
              </select>
              <button className="mt-2 rounded-2xl bg-[#063d38] px-5 py-4 font-black text-white transition hover:bg-[#0b514a]">
                Үнэгүй ярилцлага авах →
              </button>
            </div>
            <p className="mt-3 text-center text-[11px] text-[#84938f]">
              Таны мэдээллийг зөвхөн сургалтын бүртгэлд ашиглана.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

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
