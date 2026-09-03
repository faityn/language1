"use client";

import { Check, Globe2, Target, Users, Zap } from "lucide-react";

export default function Method() {
  return (
    <section id="method" className="grid-paper overflow-hidden py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div className="reveal relative min-h-[500px]">
          <div className="absolute left-4 top-4 h-[420px] w-[420px] rounded-full bg-[#ffd96a]/55 blur-2xl" />
          <div className="absolute left-10 top-12 w-[88%] max-w-[470px] rotate-[-4deg] rounded-[40px] bg-[#063d38] p-5 shadow-2xl">
            <div className="rounded-[30px] bg-[#e8fff5] p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#0b514a]">
                  Сургалтын аргачлал
                </span>
                <Zap size={18} className="text-[#ff8f4b]" />
              </div>
              <div className="mt-12 grid grid-cols-3 gap-3">
                {["Сонсох", "Ойлгох", "Ярих"].map((x, i) => (
                  <div
                    key={x}
                    className={`rounded-3xl p-4 max-sm:p-2 ${i === 0 ? "bg-[#82cfff]" : i === 1 ? "bg-[#ffb5c9]" : "bg-[#ffd96a]"}`}
                  >
                    <span className="text-xs font-black">{`0${i + 1}`}</span>
                    <b className="mt-12 block text-lg max-sm:text-sm text-[#063d38]">
                      {x}
                    </b>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-3xl bg-white p-5">
                <div className="flex justify-between text-xs font-bold">
                  <span>Өөртөө итгэх итгэл</span>
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
                <div className="text-xs text-[#7b918d]">12 өдөр 🔥</div>
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

