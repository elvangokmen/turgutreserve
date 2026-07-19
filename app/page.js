import Image from "next/image";
import {
  CheckCircle2,
  CircleDollarSign,
  Layers3,
  Leaf,
  TrendingUp,
  Users,
} from "lucide-react";

const highlights = [
  {
    title: "Fast-Track Cash Flow",
    description:
      "A low-impact hospitality model designed around temporary wooden platforms, potentially reducing dependency on conventional construction timelines.",
    icon: CircleDollarSign,
  },
  {
    title: "High Daily Yields",
    description:
      "Premium nightly rates positioned for high-end nature tourism, private retreats and international guests seeking exclusive experiences.",
    icon: TrendingUp,
  },
  {
    title: "Scalable Architecture",
    description:
      "A modular layout that allows the number of luxury suites and shared facilities to be expanded gradually in line with demand.",
    icon: Layers3,
  },
  {
    title: "Low-Impact Eco Concept",
    description:
      "Designed without conventional concrete foundations and developed around reversible, nature-sensitive construction principles.",
    icon: Leaf,
  },
];

const gallery = [
  "/01_Gunduz_Genel_Proje_Gorunumu.png",
  "/02_Giris_ve_Resepsiyon.png",
  "/02_Resepsiyon_ve_Lounge_Ic_Mekan.png",
  "/03_Ortak_Havuz_ve_Wellness.png",
  "/03_Wellness_Ic_Mekan.png",
  "/04_Ates_Cukuru_ve_Dinlenme_Alani.png",
  "/04_Gunduz_Suit_ve_Ozel_Havuz.png",
  "/05_Ozel_Havuzlu_Glamping_Suit.png",
  "/06_Glamping_Suit_Ic_Mekan.png",
  "/07_Glamping_Suit_Banyo.png",
  "/08_Ozel_Veranda_ve_Havuz.png",
  "/09_Doga_ve_Yuruyus_Yolu.png",
  "/10_Yoga_ve_Wellness_Alani.png",
];

export default function GlampingSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f19] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-700/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-14 max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">
              Illustrative Investment Concept
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Alternative High-Yield Model:
            <span className="block text-amber-400">
              Luxury Glamping Resort
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            A flexible boutique hospitality vision designed to shorten
            conventional development timelines and create foreign-currency
            revenue potential through premium nature tourism.
          </p>
        </header>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-8">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111722] p-2 shadow-2xl shadow-black/40">
              <div className="relative overflow-hidden rounded-xl h-[400px] w-full">
                <Image
                  src="/01_Gunduz_Genel_Proje_Gorunumu.png"
                  alt="Illustrative luxury glamping resort master vision"
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                  priority
                />
              </div>

              <div className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-400">
                    Turgut Reserve
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Concept Master Vision
                  </p>
                </div>

                <span className="hidden rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] uppercase tracking-wider text-amber-300 sm:block">
                  Illustrative
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {gallery.slice(0, 2).map((image, index) => (
                <div
                  key={image}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111722] p-1.5 h-32 w-full"
                >
                  <Image
                    src={image}
                    alt={`Luxury glamping concept visual ${index + 1}`}
                    fill
                    sizes="(max-w-7xl) 25vw, 50vw"
                    className="object-cover rounded-lg transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111722]/85 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8 lg:p-10">
            <p className="text-base leading-relaxed text-slate-300">
              The concept combines luxury private-pool suites, reception and
              lounge facilities, shared wellness areas and curated outdoor
              experiences. Its modular structure supports phased investment,
              allowing the hospitality operation to grow in line with verified
              market demand.
            </p>

            <div className="mt-9 space-y-7">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-400">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{title}</h3>
                      <CheckCircle2 className="h-4 w-4 text-amber-400" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-transparent p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
                Illustrative Financial Summary
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <TrendingUp className="mb-4 h-5 w-5 text-amber-400" />
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Estimated Amortization
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    2.5 Years
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <Users className="mb-4 h-5 w-5 text-amber-400" />
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Target Audience
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-white">
                    High-Net-Worth Travelers
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-slate-500">
                Financial figures are preliminary concept estimates. Land use,
                licensing, development, installation and operating assumptions
                remain subject to professional feasibility studies, official
                regulations and applicable approvals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-amber-400">
                Concept Collection
              </p>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                The complete guest experience
              </h3>
            </div>

            <span className="hidden text-xs text-slate-500 sm:block">
              Illustrative Concept / Presentation Only
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(2).map((image, index) => (
              <figure
                key={image}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111722] p-2 h-72 w-full ${
                  index === 0 || index === gallery.slice(2).length - 1
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`Turgut Reserve illustrative concept ${index + 3}`}
                  fill
                  sizes="(max-w-7xl) 33vw, 50vw"
                  className="object-cover p-2 rounded-2xl transition duration-700 ease-out group-hover:scale-[1.025]"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
