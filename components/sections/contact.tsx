"use client";

export default function Contact() {
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
