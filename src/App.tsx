import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bot,
  Braces,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  DatabaseZap,
  FileCode2,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Clock3,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import type { MotionValue, PanInfo } from "framer-motion";
import type { ElementType, PointerEvent, ReactNode, TouchEvent, UIEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaAws } from "react-icons/fa";
import {
  SiCloudflare,
  SiDigitalocean,
  SiDocker,
  SiExpress,
  SiFastify,
  SiFramer,
  SiGoogleanalytics,
  SiHetzner,
  SiHuawei,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPhp,
  SiPortainer,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiSurveymonkey,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
  SiZendesk,
} from "react-icons/si";
import flagAr from "flag-icons/flags/4x3/ar.svg";
import flagBo from "flag-icons/flags/4x3/bo.svg";
import flagCl from "flag-icons/flags/4x3/cl.svg";
import flagCo from "flag-icons/flags/4x3/co.svg";
import flagCr from "flag-icons/flags/4x3/cr.svg";
import flagCu from "flag-icons/flags/4x3/cu.svg";
import flagDo from "flag-icons/flags/4x3/do.svg";
import flagEc from "flag-icons/flags/4x3/ec.svg";
import flagEs from "flag-icons/flags/4x3/es.svg";
import flagGt from "flag-icons/flags/4x3/gt.svg";
import flagHn from "flag-icons/flags/4x3/hn.svg";
import flagMx from "flag-icons/flags/4x3/mx.svg";
import flagNi from "flag-icons/flags/4x3/ni.svg";
import flagPa from "flag-icons/flags/4x3/pa.svg";
import flagPe from "flag-icons/flags/4x3/pe.svg";
import flagPr from "flag-icons/flags/4x3/pr.svg";
import flagPy from "flag-icons/flags/4x3/py.svg";
import flagSv from "flag-icons/flags/4x3/sv.svg";
import flagUs from "flag-icons/flags/4x3/us.svg";
import flagUy from "flag-icons/flags/4x3/uy.svg";
import flagVe from "flag-icons/flags/4x3/ve.svg";
import { content, type Locale } from "./content";
import { useActiveSection } from "./hooks/useActiveSection";
import { usePreferredLocale } from "./hooks/usePreferredLocale";
import { useRegionalFlag } from "./hooks/useRegionalFlag";
import { useSeo } from "./hooks/useSeo";
import { fadeUp, stagger } from "./lib/motion";

const icons = [Building2, Layers3, DatabaseZap, Globe2, Code2, Cloud, BarChart3, Workflow];

const flagSources: Record<string, string> = {
  AR: flagAr,
  BO: flagBo,
  CL: flagCl,
  CO: flagCo,
  CR: flagCr,
  CU: flagCu,
  DO: flagDo,
  EC: flagEc,
  ES: flagEs,
  GT: flagGt,
  HN: flagHn,
  MX: flagMx,
  NI: flagNi,
  PA: flagPa,
  PE: flagPe,
  PR: flagPr,
  PY: flagPy,
  SV: flagSv,
  US: flagUs,
  UY: flagUy,
  VE: flagVe,
};

const techIcons: Record<string, { icon: ElementType; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  "Gutenberg Blocks": { icon: SiWordpress, color: "#21759B" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  Fastify: { icon: SiFastify, color: "#111827" },
  Express: { icon: SiExpress, color: "#111827" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  WordPress: { icon: SiWordpress, color: "#21759B" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  "Google Analytics": { icon: SiGoogleanalytics, color: "#E37400" },
  AWS: { icon: FaAws, color: "#FF9900" },
  Cloudflare: { icon: SiCloudflare, color: "#F38020" },
  DigitalOcean: { icon: SiDigitalocean, color: "#0080FF" },
  "Huawei Cloud": { icon: SiHuawei, color: "#CF0A2C" },
  Hetzner: { icon: SiHetzner, color: "#D50C2D" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Portainer: { icon: SiPortainer, color: "#13BEF9" },
  Coolify: { icon: Cloud, color: "#8B5CF6" },
  "Linux Servers": { icon: SiLinux, color: "#FCC624" },
  Zendesk: { icon: SiZendesk, color: "#03363D" },
  SurveyMonkey: { icon: SiSurveymonkey, color: "#00BF6F" },
  MailerLite: { icon: Mail, color: "#00A154" },
  Mailcow: { icon: Mail, color: "#0EA5E9" },
};

function App() {
  const { browserLocale, locale, setLocale } = usePreferredLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageNoticeDismissed, setLanguageNoticeDismissed] = useState(false);
  const t = content[locale];
  const navIds = useMemo(() => t.nav.map(slug), [t.nav]);
  const activeSection = useActiveSection(navIds);
  const spanishRegion = useRegionalFlag("es");
  useSeo(locale, t.seo);

  const setLanguage = (nextLocale: Locale) => {
    setLocale(nextLocale);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLocale);
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-mist text-ink">
      <Header
        locale={locale}
        nav={t.nav}
        name={t.meta.name}
        ctaLabel={t.hero.secondaryCta}
        activeSection={activeSection}
        spanishRegion={spanishRegion}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onLocaleChange={setLanguage}
      />
      <LanguageNotice
        currentLocale={locale}
        browserLocale={browserLocale}
        spanishRegion={spanishRegion}
        dismissed={languageNoticeDismissed || browserLocale === locale}
        onDismiss={() => setLanguageNoticeDismissed(true)}
        onSwitch={() => setLanguage(browserLocale)}
      />
      <AnimatePresence mode="wait">
        <motion.main
          key={locale}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          <Hero content={t} />
          <About content={t} />
          <Projects content={t} />
          <Experience content={t} />
          <Stack content={t} />
          <Services content={t} />
          <Method content={t} />
          <FinalCta content={t} />
        </motion.main>
      </AnimatePresence>
      <Footer content={t} />
    </div>
  );
}

type ContentProps = {
  content: (typeof content)["es"];
};

function Header({
  locale,
  nav,
  name,
  ctaLabel,
  activeSection,
  spanishRegion,
  menuOpen,
  onMenuToggle,
  onLocaleChange,
}: {
  locale: Locale;
  nav: string[];
  name: string;
  ctaLabel: string;
  activeSection: string;
  spanishRegion: string;
  menuOpen: boolean;
  onMenuToggle: () => void;
  onLocaleChange: (locale: Locale) => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={name}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-lg font-semibold text-primary shadow-sm ring-1 ring-line">
            JA
          </span>
          <span className="text-sm font-semibold text-ink md:text-base">{name}</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slatecopy lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item}
              href={`#${slug(item)}`}
              className={`relative py-2 transition hover:text-brand ${activeSection === slug(item) ? "text-primary" : "text-slatecopy"
                }`}
            >
              {item}
              {activeSection === slug(item) ? <span className="absolute inset-x-0 -bottom-4 h-0.5 rounded-full bg-primary" /> : null}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle locale={locale} spanishRegion={spanishRegion} onLocaleChange={onLocaleChange} />
          <a className="button-secondary px-4 py-2 text-sm" href="#contact">
            {ctaLabel}
          </a>
        </div>

        <button className="icon-button lg:hidden" onClick={onMenuToggle} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-line bg-white px-5 py-4 lg:hidden">
          <nav className="grid gap-3 text-sm font-medium text-slatecopy">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${slug(item)}`}
                className={activeSection === slug(item) ? "text-primary" : undefined}
                onClick={onMenuToggle}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="mt-5">
            <LanguageToggle locale={locale} spanishRegion={spanishRegion} onLocaleChange={onLocaleChange} />
          </div>
        </div>
      ) : null}
    </header>
  );
}

function LanguageToggle({
  locale,
  spanishRegion,
  onLocaleChange,
}: {
  locale: Locale;
  spanishRegion: string;
  onLocaleChange: (locale: Locale) => void;
}) {
  return (
    <div className="inline-flex w-fit max-w-full rounded-lg border border-line bg-white p-1 shadow-sm" aria-label="Language selector">
      {(["es", "en"] as Locale[]).map((item) => (
        <button
          key={item}
          className={`inline-flex min-w-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold uppercase transition sm:px-3 ${locale === item ? "bg-primary text-white" : "text-slatecopy hover:text-accentHover"
            }`}
          onClick={() => onLocaleChange(item)}
        >
          <FlagMark country={item === "en" ? "US" : spanishRegion} />
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function LanguageNotice({
  currentLocale,
  browserLocale,
  spanishRegion,
  dismissed,
  onDismiss,
  onSwitch,
}: {
  currentLocale: Locale;
  browserLocale: Locale;
  spanishRegion: string;
  dismissed: boolean;
  onDismiss: () => void;
  onSwitch: () => void;
}) {
  if (dismissed || currentLocale === browserLocale) {
    return null;
  }

  const copy =
    browserLocale === "en"
      ? {
        message: "This site is also available in English, matching your browser language.",
        action: "Switch to English",
        close: "Dismiss language suggestion",
      }
      : {
        message: "Este sitio también está disponible en español, según el idioma de tu navegador.",
        action: "Cambiar a español",
        close: "Cerrar sugerencia de idioma",
      };

  return (
    <div className="sticky top-[73px] z-40 border-b border-line bg-white/95 px-5 py-3 shadow-sm backdrop-blur-xl lg:top-[81px] lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-mist">
            <FlagMark country={browserLocale === "en" ? "US" : spanishRegion} />
          </span>
          <p className="text-sm font-medium leading-5 text-slatecopy">{copy.message}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition hover:bg-primaryHover" onClick={onSwitch}>
            {copy.action}
          </button>
          <button className="icon-button h-9 w-9" onClick={onDismiss} aria-label={copy.close}>
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function FlagMark({ country }: { country: string }) {
  const source = flagSources[country] ?? flagSources.PE;

  return (
    <img
      src={source}
      className="h-3.5 w-5 rounded-[2px] border border-black/10 object-cover shadow-sm"
      alt=""
      aria-hidden="true"
    />
  );
}

function Hero({ content: t }: ContentProps) {
  const { scrollYProgress } = useScroll();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const panelX = useSpring(useTransform(pointerX, [-1, 1], [6, -6]), { stiffness: 90, damping: 24 });
  const panelY = useSpring(useTransform(pointerY, [-1, 1], [5, -5]), { stiffness: 90, damping: 24 });
  const panelRotate = useSpring(useTransform(pointerX, [-1, 1], [-0.35, 0.35]), { stiffness: 90, damping: 24 });
  const copyY = useSpring(useTransform(pointerY, [-1, 1], [-4, 4]), { stiffness: 90, damping: 24 });
  const heroCopyScroll = useTransform(scrollYProgress, [0, 0.18], [0, 26]);
  const heroPanelScroll = useTransform(scrollYProgress, [0, 0.18], [0, -28]);
  const heroDotsScroll = useTransform(scrollYProgress, [0, 0.18], [0, -44]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line bg-white"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(124,58,237,0.08),transparent_28%),linear-gradient(90deg,#ffffff_0%,#ffffff_55%,#F8FAFC_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-14 lg:min-h-[760px] lg:grid-cols-[1.1fr_0.82fr] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-24">
        <motion.div initial="hidden" animate="visible" variants={stagger} style={{ y: copyY }} className="flex flex-col justify-center">
          <motion.div style={{ y: heroCopyScroll }}>
            <motion.p variants={fadeUp} className="mb-4 text-sm font-medium text-slatecopy">
              {t.hero.metaLine}
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-[2.35rem] font-semibold leading-[1.06] tracking-0 text-ink sm:text-5xl md:text-6xl lg:text-[4.6rem]">
              {t.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slatecopy md:text-xl">
              {t.hero.subheadline}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#proyectos" className="button-primary">
                {t.hero.primaryCta}
                <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="button-secondary">
                {t.hero.secondaryCta}
                <Mail size={18} />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 grid gap-4 sm:grid-cols-3">
              {t.hero.indicators.map((indicator, index) => {
                const Icon = [TrendingUp, Cloud, Layers3][index] ?? CheckCircle2;
                return (
                  <div key={indicator} className="flex items-center gap-3 border-r border-line pr-4 last:border-r-0">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand shadow-sm ring-1 ring-line">
                      <Icon size={20} />
                    </span>
                    <span className="text-sm font-semibold leading-5 text-ink">{indicator}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ x: panelX, y: panelY, rotate: panelRotate }}
          className="relative hidden lg:block"
        >
          <motion.div style={{ y: heroPanelScroll }}>
            <ArchitecturePanel title={t.hero.panelTitle} items={t.hero.panelItems} dotsY={heroDotsScroll} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ArchitecturePanel({ title, items, dotsY }: { title: string; items: string[]; dotsY?: MotionValue<number> }) {
  const isEnglish = title.toLowerCase().startsWith("impact");
  const outcomes = isEnglish
    ? [
      ["Strategy", "Business context before technical decisions"],
      ["Architecture", "Systems designed for scale, security and maintainability"],
      ["Execution", "SaaS, automation and data workflows shipped with focus"],
    ]
    : [
      ["Estrategia", "Contexto de negocio antes de decisiones técnicas"],
      ["Arquitectura", "Sistemas pensados para escala, seguridad y mantenimiento"],
      ["Ejecución", "SaaS, automatización y datos con foco en entrega"],
    ];
  const flow = isEnglish ? ["Business", "Architecture", "Build", "Optimize"] : ["Negocio", "Arquitectura", "Construcción", "Optimización"];

  return (
    <div className="relative mt-10 rounded-[24px] border border-line bg-white/90 p-4 shadow-soft backdrop-blur">
      <motion.div style={{ y: dotsY }} className="absolute -right-8 -top-10 hidden h-20 w-32 bg-[radial-gradient(circle,#A78BFA_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-35 lg:block" />
      <div className="rounded-[20px] border border-line bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FAFC_58%,#F5F3FF_100%)] p-5">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{title}</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink">
              {isEnglish ? "Technology with business direction" : "Tecnología con dirección de negocio"}
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slatecopy">
              {isEnglish
                ? "A compact view of how strategy, architecture and execution connect in real projects."
                : "Una vista compacta de cómo se conectan estrategia, arquitectura y ejecución en proyectos reales."}
            </p>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-white shadow-sm">
            <Sparkles size={18} />
          </span>
        </div>

        <div className="grid gap-3">
          {outcomes.map(([label, body], index) => {
            const Icon = [TrendingUp, Network, Workflow][index] ?? CheckCircle2;
            return (
              <div key={label} className="flex gap-4 rounded-xl border border-line bg-white/86 p-4 shadow-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primaryUltraSoft text-primary">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <p className="mt-1 text-sm leading-6 text-slatecopy">{body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 rounded-xl border border-line bg-white/80 p-4">
          <div className="relative flex items-center justify-between">
            <span className="absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-primaryUltraSoft" aria-hidden="true" />
            {flow.map((step, index) => (
              <div key={step} className="relative z-10 flex flex-col items-center gap-2">
                <span className={`grid h-9 w-9 place-items-center rounded-full border text-xs font-bold ${index === 0 ? "border-primary bg-primary text-white" : "border-lineHover bg-white text-primary"}`}>
                  {index + 1}
                </span>
                <span className="max-w-[84px] text-center text-[11px] font-semibold leading-4 text-slatecopy">{step}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function About({ content: t }: ContentProps) {
  const isEnglish = t.meta.location.includes("Peru");
  const metrics = t.meta.location.includes("Peru")
    ? [
      ["10+", "Years building digital solutions"],
      ["30+", "Projects delivered with business focus"],
      ["8+", "Industries and operational contexts"],
      ["100%", "Commitment to measurable outcomes"],
    ]
    : [
      ["10+", "Años construyendo soluciones digitales"],
      ["30+", "Proyectos entregados con foco de negocio"],
      ["8+", "Industrias y contextos operativos"],
      ["100%", "Compromiso con resultados medibles"],
    ];

  return (
    <Section id="sobre-mi" className="bg-mist">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionIntro title={t.about.title} text={t.about.intro} />
          <AvailabilityPanel content={t} />
          <div className="mt-5 grid overflow-hidden rounded-xl border border-line bg-white shadow-soft sm:grid-cols-2">
            {metrics.map(([value, label]) => (
              <div key={label} className="border-b border-line p-5 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(n+3)]:border-b-0">
                <p className="text-3xl font-semibold text-brand">{value}</p>
                <p className="mt-2 text-sm leading-6 text-slatecopy">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="space-y-5 text-lg leading-8 text-slatecopy">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.about.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
                <CheckCircle2 className="text-brand" size={20} />
                <span className="text-sm font-semibold text-ink">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function AvailabilityPanel({ content: t }: ContentProps) {
  const isEnglish = t.meta.location.includes("Peru");

  return (
    <div className="mt-8 rounded-xl border border-lineHover bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-accentHover">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accentLight opacity-40" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accentHover" />
            </span>
            {isEnglish ? "Available for strategic projects" : "Disponible para proyectos estratégicos"}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm font-medium text-slatecopy">
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} className="text-brand" />
              {t.meta.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={17} className="text-brand" />
              {isEnglish ? "Local time" : "Hora local"}: {formatPeruTime()} GMT-5
            </span>
          </div>
        </div>
        <a href="#contact" className="button-primary px-5 py-3">
          {t.hero.secondaryCta}
          <ArrowUpRight size={17} />
        </a>
      </div>
    </div>
  );
}

function Projects({ content: t }: ContentProps) {
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [projectDirection, setProjectDirection] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [groupScrollHint, setGroupScrollHint] = useState(true);
  const [activeMobileProject, setActiveMobileProject] = useState(0);
  const mobileProjectsRef = useRef<HTMLDivElement>(null);
  const active = t.projects.groups[activeGroup] ?? t.projects.groups[0];
  const project = active.projects[activeProject] ?? active.projects[0];
  const labels: [string, string, string] = t.meta.location.includes("Peru") ? ["Problem", "Solution", "Impact"] : ["Problema", "Solución", "Impacto"];
  const isEnglish = t.meta.location.includes("Peru");

  const chooseGroup = (index: number) => {
    setProjectDirection(1);
    setActiveGroup(index);
    setActiveProject(0);
    setActiveMobileProject(0);
    requestAnimationFrame(() => mobileProjectsRef.current?.scrollTo({ left: 0, behavior: "smooth" }));
  };

  const moveProject = (direction: number) => {
    setProjectDirection(direction);
    const groups = t.projects.groups;
    let nextGroup = activeGroup;
    let nextProject = activeProject + direction;
    const currentProjects = groups[nextGroup]?.projects ?? [];

    if (nextProject >= currentProjects.length) {
      nextGroup = (nextGroup + 1) % groups.length;
      nextProject = 0;
    }

    if (nextProject < 0) {
      nextGroup = (nextGroup - 1 + groups.length) % groups.length;
      nextProject = Math.max(0, (groups[nextGroup]?.projects.length ?? 1) - 1);
    }

    setActiveGroup(nextGroup);
    setActiveProject(nextProject);
    setActiveMobileProject(nextProject);
  };

  const handleProjectDragEnd = (_event: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) < 60) return;
    moveProject(info.offset.x < 0 ? 1 : -1);
  };

  const handleProjectTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    setTouchStartX(null);
    if (Math.abs(delta) < 44) return;
    moveProject(delta < 0 ? 1 : -1);
  };

  const chooseProject = (index: number) => {
    setProjectDirection(index >= activeProject ? 1 : -1);
    setActiveProject(index);
  };

  const handleGroupScroll = (event: UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    setGroupScrollHint(target.scrollLeft + target.clientWidth < target.scrollWidth - 8);
  };

  const scrollMobileProject = (index: number) => {
    const target = mobileProjectsRef.current;
    if (!target) return;
    const clampedIndex = (index + active.projects.length) % active.projects.length;
    const slide = target.querySelector<HTMLElement>("[data-project-slide]");
    const gap = 16;
    const slideWidth = slide?.offsetWidth ?? target.clientWidth;
    target.scrollTo({ left: clampedIndex * (slideWidth + gap), behavior: "smooth" });
    setActiveMobileProject(clampedIndex);
  };

  const handleMobileProjectScroll = (event: UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const slide = target.querySelector<HTMLElement>("[data-project-slide]");
    const gap = 16;
    const slideWidth = slide?.offsetWidth ?? target.clientWidth;
    setActiveMobileProject(Math.min(active.projects.length - 1, Math.max(0, Math.round(target.scrollLeft / (slideWidth + gap)))));
  };

  return (
    <Section id="proyectos" className="bg-white">
      <SectionIntro title={t.projects.title} text={t.projects.intro} />

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative -mx-5 sm:mx-0">
          <div
            className="touch-carousel flex max-w-full gap-2 overflow-x-auto px-5 pb-2 pr-16 sm:gap-3 sm:px-0 sm:pr-0"
            onScroll={handleGroupScroll}
          >
            {t.projects.groups.map((group, index) => (
              <button
                key={group.title}
                className={`max-w-[76vw] shrink-0 truncate rounded-lg border px-4 py-3 text-sm font-semibold transition sm:max-w-none sm:px-5 ${activeGroup === index
                  ? "border-brand/50 bg-brandSoft text-brand shadow-sm"
                  : "border-line bg-white text-slatecopy hover:border-brand hover:text-brand"
                  }`}
                onClick={() => chooseGroup(index)}
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                {group.title}
              </button>
            ))}
          </div>
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 flex w-20 items-center justify-end bg-gradient-to-l from-white via-white/90 to-transparent pr-4 transition-opacity sm:hidden ${groupScrollHint ? "opacity-100" : "opacity-0"
              }`}
            aria-hidden="true"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-accentHover shadow-sm">
              <ChevronRight size={18} />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 lg:hidden">
        <div
          ref={mobileProjectsRef}
          className="touch-carousel -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2"
          onScroll={handleMobileProjectScroll}
        >
          {active.projects.map((item, index) => (
            <ProjectMobileCard key={item.name} project={item} groupTitle={active.title} index={index} labels={labels} />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">
          <button className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-accentHover shadow-sm" onClick={() => scrollMobileProject(activeMobileProject - 1)} aria-label="Previous project">
            <ChevronLeft size={17} />
          </button>
          <div className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 shadow-sm">
            {active.projects.map((item, index) => (
              <button
                key={item.name}
                className={`h-2 rounded-full transition-all ${activeMobileProject === index ? "w-6 bg-brand" : "w-2 bg-slate-300"}`}
                onClick={() => scrollMobileProject(index)}
                aria-label={`Go to ${item.name}`}
              />
            ))}
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-accentHover shadow-sm" onClick={() => scrollMobileProject(activeMobileProject + 1)} aria-label="Next project">
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      <div className="mt-8 hidden overflow-visible lg:block">
        <div className="relative min-h-[610px] overflow-visible" data-project-carousel-stage>
          <div className="relative z-20 mx-auto h-[590px] max-w-6xl overflow-visible px-8">
            <AnimatePresence custom={projectDirection} initial={false}>
              <motion.div
                key={`${active.title}-${project.name}`}
                custom={projectDirection}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={handleProjectDragEnd}
                onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
                onTouchEnd={handleProjectTouchEnd}
                initial="enter"
                animate="center"
                exit="exit"
                variants={{
                  enter: (direction: number) => ({
                    opacity: 0,
                    x: direction > 0 ? 90 : -90,
                    scale: 0.992,
                    filter: "blur(4px)",
                  }),
                  center: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  },
                  exit: (direction: number) => ({
                    opacity: 0,
                    x: direction > 0 ? -90 : 90,
                    scale: 0.992,
                    filter: "blur(4px)",
                  }),
                }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-8 top-0"
              >
                <ProjectShowcase
                  project={project}
                  groupTitle={active.title}
                  index={activeProject}
                  labels={labels}
                  isEnglish={isEnglish}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="project-arrow-button absolute left-0 top-[44%] z-40 hidden -translate-y-1/2 rounded-full bg-white/95 lg:grid"
            onClick={() => moveProject(-1)}
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="project-arrow-button absolute right-0 top-[44%] z-40 hidden -translate-y-1/2 rounded-full bg-white/95 lg:grid"
            onClick={() => moveProject(1)}
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-2 flex items-center justify-center gap-3 lg:mt-4">
          <button className="project-arrow-button hidden lg:grid" onClick={() => moveProject(-1)} aria-label="Previous project">
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 shadow-sm lg:py-3">
            {active.projects.map((item, index) => (
              <button
                key={item.name}
                className={`h-2.5 rounded-full transition-all ${activeProject === index ? "w-7 bg-brand" : "w-2.5 bg-slate-300 hover:bg-brand/50"
                  }`}
                onClick={() => chooseProject(index)}
                aria-label={`Go to ${item.name}`}
              />
            ))}
          </div>
          <button className="project-arrow-button hidden lg:grid" onClick={() => moveProject(1)} aria-label="Next project">
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </Section>
  );
}

function ProjectPeek({ project, index, side }: { project: { name: string; problem?: string }; index: number; side: "left" | "right" }) {
  const Icon = [Building2, Users, BarChart3, Workflow, FileCode2][Math.abs(index) % 5];

  return (
    <div className={`h-[490px] rounded-lg border border-line bg-white p-5 shadow-soft ${side === "left" ? "-translate-x-2" : "translate-x-2"}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
        <span className="rounded-md bg-brandSoft px-2 py-1 text-[11px] font-semibold text-brand">Project</span>
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-6 text-slatecopy">{project.problem}</p>
      <div className="mt-8 rounded-lg border border-line bg-mist p-4">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-brand shadow-sm">
            <Icon size={19} />
          </span>
          <span className="text-xs font-semibold text-accentHover">+24.6%</span>
        </div>
        <div className="mt-5 flex h-24 items-end gap-2">
          {[38, 48, 35, 58, 52, 72, 66, 86].map((height) => (
            <span
              key={height}
              className="flex-1 rounded-t bg-gradient-to-t from-brand/80 to-primarySoft/80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-3">
        {[58, 78, 46].map((width, item) => (
          <div key={width} className="rounded-lg border border-line bg-white p-3">
            <div className="mb-2 h-2 w-16 rounded-full bg-slate-200" />
            <div className="h-2 rounded-full bg-brandSoft">
              <div className="h-full rounded-full bg-brand" style={{ width: `${width}%` }} />
            </div>
            <p className="mt-2 text-[11px] font-semibold text-slatecopy">{["Performance", "Automation", "Scale"][item]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectMobileCard({
  project,
  groupTitle,
  index,
  labels,
}: {
  project: { name: string; impact: string };
  groupTitle: string;
  index: number;
  labels: [string, string, string];
}) {
  const Icon = [Building2, Users, BarChart3, Workflow, FileCode2][index % 5];

  return (
    <article
      data-project-slide
      className="relative flex min-h-[310px] w-[82vw] shrink-0 snap-center flex-col rounded-[24px] border border-line bg-white p-5 shadow-soft sm:w-[360px]"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-accentSoft text-primary">
          <Icon size={23} />
        </span>
        <span className="rounded-full border border-line bg-surfaceAlt px-3 py-1 text-xs font-semibold text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <span className="mb-3 w-fit max-w-full truncate rounded-md bg-brandSoft px-2 py-1 text-xs font-semibold text-brand">
        {groupTitle}
      </span>
      <h3 className="text-2xl font-semibold leading-tight text-ink">{project.name}</h3>
      <div className="my-5 h-px bg-divider" />
      <div className="mt-auto">
        <div className="mb-3 flex items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accentUltraSoft text-accentHover">
            <TrendingUp size={16} />
          </span>
          <p className="text-base font-semibold text-ink">{labels[2]}</p>
        </div>
        <p className="text-sm leading-6 text-slatecopy">{project.impact}</p>
      </div>
    </article>
  );
}

function ProjectShowcase({
  project,
  groupTitle,
  index,
  labels,
  isEnglish,
}: {
  project: { name: string; problem: string; solution: string; impact: string };
  groupTitle: string;
  index: number;
  labels: [string, string, string];
  isEnglish: boolean;
}) {
  const Icon = [Building2, Users, BarChart3, Workflow, FileCode2][index % 5];

  return (
    <article className="mx-auto max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_22px_70px_rgba(15,23,42,.10)] sm:max-w-none">
      <div className="grid min-h-[560px] lg:grid-cols-[0.38fr_0.62fr]">
        <div className="relative border-line bg-white p-7 lg:border-r">
          <div className="flex items-start gap-5">
            <span className="grid h-[60px] w-[60px] shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-primaryHover text-white shadow-glow">
              <Icon size={27} />
            </span>
            <div className="min-w-0">
              <h3 className="text-[1.7rem] font-semibold leading-tight text-ink">{project.name}</h3>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-slatecopy">
                <span className="max-w-full truncate rounded-md bg-primaryUltraSoft px-3 py-1.5 text-primary">{groupTitle}</span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">{isEnglish ? "Production logic" : "Lógica productiva"}</span>
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-md text-base leading-7 text-slatecopy">{project.impact}</p>
          <div className="my-5 h-px bg-line" />

          <div className="space-y-0">
            <ProjectStatement icon={<Bot size={19} />} label={labels[0]} text={project.problem} tone="violet" />
            <ProjectStatement icon={<CheckCircle2 size={19} />} label={labels[1]} text={project.solution} tone="brand" />
            <ProjectStatement icon={<TrendingUp size={19} />} label={labels[2]} text={project.impact} tone="green" compact />
          </div>
        </div>

        <div className="hidden lg:block">
          <ProjectDiagram projectName={project.name} groupTitle={groupTitle} index={index} isEnglish={isEnglish} />
        </div>
      </div>
    </article>
  );
}

function ProjectStatement({
  icon,
  label,
  text,
  tone,
  compact,
  mobileHidden,
}: {
  icon: ReactNode;
  label: string;
  text: string;
  tone: "brand" | "violet" | "green";
  compact?: boolean;
  mobileHidden?: boolean;
}) {
  const color = tone === "green" ? "bg-primaryUltraSoft text-primary" : tone === "violet" ? "bg-surfaceAlt text-primary" : "bg-primaryUltraSoft text-primary";

  return (
    <div className={`border-b border-line py-4 first:pt-0 last:border-b-0 last:pb-0 ${mobileHidden ? "hidden lg:block" : ""}`}>
      <div className="flex items-start gap-4">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${color}`}>{icon}</span>
        <div>
          <p className="text-base font-semibold text-ink">{label}</p>
          <p className={`mt-1 text-sm leading-6 text-slatecopy ${compact ? "" : "max-w-md"}`}>{text}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectDiagram({
  projectName,
  groupTitle,
  index,
  isEnglish,
}: {
  projectName: string;
  groupTitle: string;
  index: number;
  isEnglish: boolean;
}) {
  const Icon = [Building2, Users, BarChart3, Workflow, FileCode2][index % 5];
  const nodes = getProjectRelations(projectName, groupTitle, isEnglish);
  const center = { x: 380, y: 236 };
  const nodeLayout = [
    { x: 380, y: 72 },
    { x: 164, y: 166 },
    { x: 596, y: 166 },
    { x: 164, y: 334 },
    { x: 596, y: 334 },
    { x: 380, y: 398 },
  ];
  const connectorPath = ({ x, y }: { x: number; y: number }) => {
    const elbowY = Math.abs(x - center.x) < 12 ? y : center.y + (y > center.y ? 44 : -44);
    return `M ${center.x} ${center.y} L ${center.x} ${elbowY} L ${x} ${elbowY} L ${x} ${y}`;
  };

  return (
    <div className="relative h-full min-h-[460px] overflow-hidden bg-[radial-gradient(circle_at_center,rgba(124,58,237,.08),transparent_34%),linear-gradient(135deg,#FFFFFF_0%,#F8FAFC_52%,#F5F3FF_100%)]">
      <svg className="absolute inset-0 h-full w-full text-primary/25" viewBox="0 0 760 460" fill="none" aria-hidden="true">
        <defs>
          <pattern id={`dots-${index}`} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" opacity=".42" />
          </pattern>
        </defs>
        <rect width="760" height="460" fill={`url(#dots-${index})`} opacity=".55" />
        {nodeLayout.map((point, pointIndex) => (
          <path key={`line-${pointIndex}`} d={connectorPath(point)} stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" strokeLinejoin="round" />
        ))}
        {nodeLayout.map((point, pointIndex) => (
          <circle key={`dot-${pointIndex}`} cx={point.x} cy={point.y} r="4" fill="#6D28D9" />
        ))}
      </svg>

      <div
        className="absolute z-20 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/10 bg-white/80 shadow-[0_18px_52px_rgba(109,40,217,.18)] backdrop-blur"
        style={{ left: `${(center.x / 760) * 100}%`, top: `${(center.y / 460) * 100}%` }}
      >
        <div className="absolute inset-3 rounded-full border border-primary/15" />
        <div className="absolute inset-6 rounded-full bg-primaryUltraSoft" />
        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-primary to-primaryHover text-white shadow-glow">
          <Icon size={31} />
        </span>
      </div>

      {nodes.map((node, nodeIndex) => {
        const NodeIcon = node.icon;
        const point = nodeLayout[nodeIndex] ?? center;
        return (
          <div
            key={node.title}
            className="absolute z-30 w-[178px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-lineHover bg-white/92 p-4 shadow-soft backdrop-blur-sm"
            style={{ left: `${(point.x / 760) * 100}%`, top: `${(point.y / 460) * 100}%` }}
          >
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surfaceAlt text-primary">
                <NodeIcon size={19} />
              </span>
              <div>
                <p className="text-xs font-bold text-ink">{node.title}</p>
                <ul className="mt-2 space-y-1">
                  {node.items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-[11px] font-medium leading-4 text-slatecopy">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function getProjectRelations(projectName: string, groupTitle: string, isEnglish: boolean) {
  const name = projectName.toLowerCase();
  const group = groupTitle.toLowerCase();
  const commonIcons = [Bot, DatabaseZap, ShieldCheck, Users, Activity, Cloud];

  if (name.includes("suiza partner")) {
    return [
      { title: isEnglish ? "Client portal" : "Portal cliente", items: isEnglish ? ["Payments", "Results", "Tracking"] : ["Pagos", "Resultados", "Seguimiento"], icon: Users },
      { title: isEnglish ? "Operations" : "Operación", items: isEnglish ? ["Requests", "Status", "Service flow"] : ["Solicitudes", "Estados", "Atenciones"], icon: Workflow },
      { title: isEnglish ? "Data" : "Datos", items: ["Customers", "Orders", "Reports"], icon: DatabaseZap },
      { title: isEnglish ? "Access" : "Accesos", items: isEnglish ? ["Roles", "Sessions", "Permissions"] : ["Roles", "Sesiones", "Permisos"], icon: ShieldCheck },
      { title: isEnglish ? "Experience" : "Experiencia", items: isEnglish ? ["Self-service", "Clarity", "Frictionless"] : ["Autoservicio", "Claridad", "Menos fricción"], icon: Activity },
      { title: isEnglish ? "Integrations" : "Integraciones", items: ["Web", "API", "Backoffice"], icon: Cloud },
    ];
  }

  if (name.includes("historia") || name.includes("health")) {
    return [
      { title: isEnglish ? "Clinical flow" : "Flujo clínico", items: isEnglish ? ["Care", "Records", "Orders"] : ["Atención", "Registros", "Órdenes"], icon: FileCode2 },
      { title: isEnglish ? "Privacy" : "Privacidad", items: isEnglish ? ["Access", "Audit", "Traceability"] : ["Acceso", "Auditoría", "Trazabilidad"], icon: ShieldCheck },
      { title: isEnglish ? "Data" : "Datos", items: isEnglish ? ["Patients", "History", "Results"] : ["Pacientes", "Historia", "Resultados"], icon: DatabaseZap },
      { title: isEnglish ? "Users" : "Usuarios", items: isEnglish ? ["Doctors", "Staff", "Admin"] : ["Médicos", "Staff", "Admin"], icon: Users },
      { title: isEnglish ? "Reports" : "Reportes", items: isEnglish ? ["Indicators", "Exports", "Control"] : ["Indicadores", "Exportes", "Control"], icon: BarChart3 },
      { title: isEnglish ? "Continuity" : "Continuidad", items: isEnglish ? ["Availability", "Support", "Scale"] : ["Disponibilidad", "Soporte", "Escala"], icon: Activity },
    ];
  }

  if (name.includes("citas") || name.includes("appointments")) {
    return [
      { title: isEnglish ? "Scheduling" : "Agenda", items: isEnglish ? ["Slots", "Doctors", "Branches"] : ["Horarios", "Médicos", "Sedes"], icon: Clock3 },
      { title: isEnglish ? "Patients" : "Pacientes", items: isEnglish ? ["Booking", "Reminders", "Status"] : ["Reserva", "Recordatorios", "Estado"], icon: Users },
      { title: isEnglish ? "Rules" : "Reglas", items: isEnglish ? ["Capacity", "Availability", "Conflicts"] : ["Capacidad", "Disponibilidad", "Cruces"], icon: Workflow },
      { title: isEnglish ? "Channels" : "Canales", items: ["Web", "Contact center", "CRM"], icon: Bot },
      { title: isEnglish ? "Metrics" : "Métricas", items: isEnglish ? ["Demand", "No-show", "Conversion"] : ["Demanda", "No-show", "Conversión"], icon: BarChart3 },
      { title: isEnglish ? "Data" : "Datos", items: ["Appointments", "Users", "Events"], icon: DatabaseZap },
    ];
  }

  if (name.includes("android") || name.includes("ios") || name.includes("app suiza")) {
    return [
      { title: isEnglish ? "Mobile" : "Mobile", items: ["Android", "iOS", "Stores"], icon: Code2 },
      { title: isEnglish ? "Compatibility" : "Compatibilidad", items: isEnglish ? ["SDK", "Policies", "Devices"] : ["SDK", "Políticas", "Equipos"], icon: CheckCircle2 },
      { title: isEnglish ? "Experience" : "Experiencia", items: isEnglish ? ["Flows", "Stability", "Access"] : ["Flujos", "Estabilidad", "Acceso"], icon: Activity },
      { title: isEnglish ? "Backend" : "Backend", items: ["API", "Auth", "Services"], icon: Cloud },
      { title: isEnglish ? "Security" : "Seguridad", items: isEnglish ? ["Sessions", "Tokens", "Validation"] : ["Sesiones", "Tokens", "Validación"], icon: ShieldCheck },
      { title: isEnglish ? "Release" : "Release", items: isEnglish ? ["Builds", "Testing", "Updates"] : ["Builds", "Testing", "Updates"], icon: Workflow },
    ];
  }

  if (name.includes("inpe") || name.includes("recorder")) {
    return [
      { title: isEnglish ? "Capture" : "Captura", items: isEnglish ? ["Webcam", "Screen", "Audio"] : ["Webcam", "Pantalla", "Audio"], icon: Bot },
      { title: isEnglish ? "Exam flow" : "Flujo examen", items: isEnglish ? ["Applicant", "Session", "Evidence"] : ["Postulante", "Sesión", "Evidencia"], icon: Users },
      { title: isEnglish ? "Storage" : "Storage", items: isEnglish ? ["Chunks", "Files", "Retention"] : ["Chunks", "Archivos", "Retención"], icon: DatabaseZap },
      { title: isEnglish ? "Integrity" : "Integridad", items: isEnglish ? ["Timeline", "Validation", "Audit"] : ["Timeline", "Validación", "Auditoría"], icon: ShieldCheck },
      { title: isEnglish ? "Monitoring" : "Monitoreo", items: isEnglish ? ["Status", "Errors", "Evidence"] : ["Estado", "Errores", "Evidencia"], icon: Activity },
      { title: isEnglish ? "Delivery" : "Entrega", items: isEnglish ? ["Review", "Export", "Control"] : ["Revisión", "Exportación", "Control"], icon: FileCode2 },
    ];
  }

  if (name.includes("gaugeforms")) {
    return [
      { title: isEnglish ? "Forms" : "Formularios", items: isEnglish ? ["Questions", "Logic", "Responses"] : ["Preguntas", "Lógica", "Respuestas"], icon: FileCode2 },
      { title: isEnglish ? "SaaS core" : "Core SaaS", items: ["Tenants", "Auth", "Plans"], icon: Cloud },
      { title: isEnglish ? "Analytics" : "Analítica", items: isEnglish ? ["Charts", "Exports", "Insights"] : ["Gráficos", "Exportes", "Insights"], icon: BarChart3 },
      { title: isEnglish ? "Automation" : "Automatización", items: isEnglish ? ["Notifications", "Rules", "Tasks"] : ["Notificaciones", "Reglas", "Tareas"], icon: Bot },
      { title: isEnglish ? "Data" : "Datos", items: ["Responses", "Storage", "Events"], icon: DatabaseZap },
      { title: isEnglish ? "Experience" : "Experiencia", items: isEnglish ? ["Builder", "Preview", "Sharing"] : ["Builder", "Preview", "Compartir"], icon: Activity },
    ];
  }

  if (name.includes("chat") || name.includes("chatsi")) {
    return [
      { title: isEnglish ? "Channels" : "Canales", items: ["Web", "API", "Chatwoot"], icon: Bot },
      { title: isEnglish ? "Billing" : "Billing", items: ["UniBee", "Izipay", "Plans"], icon: Activity },
      { title: isEnglish ? "Tenants" : "Tenants", items: ["Isolation", "Roles", "+N workspaces"], icon: Users },
      { title: isEnglish ? "Bridge" : "Bridge", items: ["Sync", "Webhooks", "Rules"], icon: Workflow },
      { title: isEnglish ? "Security" : "Seguridad", items: ["Tokens", "Access", "Audit"], icon: ShieldCheck },
      { title: isEnglish ? "Data" : "Datos", items: ["PostgreSQL", "Events", "Logs"], icon: DatabaseZap },
    ];
  }

  if (name.includes("nuvoro")) {
    return [
      { title: isEnglish ? "Inbox" : "Inbox", items: ["Email", "Forwarding", "Parsing"], icon: Mail },
      { title: isEnglish ? "Extraction" : "Extracción", items: ["Amount", "Bank", "Card"], icon: Bot },
      { title: isEnglish ? "Finance" : "Finanzas", items: ["Monthly spend", "Cards", "Forecast"], icon: BarChart3 },
      { title: isEnglish ? "Validation" : "Validación", items: ["Rules", "Duplicates", "Signals"], icon: CheckCircle2 },
      { title: isEnglish ? "Privacy" : "Privacidad", items: ["Secure flow", "Isolation", "Logs"], icon: ShieldCheck },
      { title: isEnglish ? "Dashboard" : "Dashboard", items: ["React", "Charts", "Insights"], icon: Activity },
    ];
  }

  if (name.includes("wordpress") || name.includes("payhip") || name.includes("plugin") || group.includes("saas")) {
    return [
      { title: isEnglish ? "Access" : "Accesos", items: ["Users", "Roles", "Expiration"], icon: Users },
      { title: isEnglish ? "Payments" : "Pagos", items: ["Payhip", "Webhook", "License"], icon: Activity },
      { title: isEnglish ? "WordPress" : "WordPress", items: ["Shortcode", "Gutenberg", "Admin"], icon: FileCode2 },
      { title: isEnglish ? "Automation" : "Automatización", items: ["Creation", "Renewal", "Cleanup"], icon: Bot },
      { title: isEnglish ? "Security" : "Seguridad", items: ["Validation", "Limits", "Audit"], icon: ShieldCheck },
      { title: isEnglish ? "Data" : "Datos", items: ["Tables", "Meta", "Events"], icon: DatabaseZap },
    ];
  }

  if (group.includes("web") || name.includes("seo")) {
    return [
      { title: isEnglish ? "Frontend" : "Frontend", items: ["UX", "Responsive", "Core UI"], icon: Globe2 },
      { title: isEnglish ? "SEO" : "SEO", items: ["Indexing", "Schema", "Content"], icon: Search },
      { title: isEnglish ? "Performance" : "Performance", items: ["CWV", "Cache", "Images"], icon: Activity },
      { title: isEnglish ? "CMS" : "CMS", items: ["WordPress", "Bricks", "Blocks"], icon: FileCode2 },
      { title: isEnglish ? "Analytics" : "Analítica", items: ["GA4", "Events", "Reports"], icon: BarChart3 },
      { title: isEnglish ? "Infra" : "Infra", items: ["Cloudflare", "Hosting", "DNS"], icon: Cloud },
    ];
  }

  return [
    { title: isEnglish ? "Channels" : "Canales", items: ["Web", "API", isEnglish ? "Ops" : "Operación"], icon: commonIcons[0] },
    { title: isEnglish ? "Core services" : "Servicios Core", items: isEnglish ? ["Processes", "Automation", "Analytics"] : ["Procesos", "Automatización", "Analítica"], icon: commonIcons[1] },
    { title: isEnglish ? "Data layer" : "Capa de datos", items: ["PostgreSQL", "Storage", "Events"], icon: commonIcons[2] },
    { title: "API Gateway", items: isEnglish ? ["Security", "Routing", "Scale"] : ["Seguridad", "Ruteo", "Escala"], icon: commonIcons[3] },
    { title: isEnglish ? "Users" : "Usuarios", items: isEnglish ? ["Roles", "Permissions", "Workflows"] : ["Roles", "Permisos", "Flujos"], icon: commonIcons[4] },
    { title: isEnglish ? "Automation" : "Automatización", items: isEnglish ? ["Tasks", "Reports", "Alerts"] : ["Tareas", "Reportes", "Alertas"], icon: commonIcons[5] },
  ];
}

function ArchitectureColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-white p-4">
      <p className="text-xs font-semibold text-slatecopy">{title}</p>
      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slatecopy">
            <span className="h-2 w-2 rounded-full bg-brand" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureNode({ title, value }: { title: string; value: string }) {
  return (
    <div className="grid min-h-[142px] place-items-center rounded-lg border border-line bg-white p-4 text-center">
      <div>
        <p className="text-xs font-semibold text-slatecopy">{title}</p>
        <div className="mx-auto mt-4 grid h-14 w-14 place-items-center rounded-lg border border-line bg-mist text-2xl font-light text-slatecopy">
          {value}
        </div>
      </div>
    </div>
  );
}

function Experience({ content: t }: ContentProps) {
  return (
    <Section id="experiencia" className="bg-mist">
      <SectionIntro title={t.experience.title} text={t.experience.intro} />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {t.experience.items.map((item) => (
          <article key={item.company} className="rounded-lg border border-line bg-white p-6 shadow-soft">
            <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-ink">{item.company}</h3>
                <p className="mt-2 text-sm font-semibold text-brand">{item.role}</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                <p className="rounded-lg bg-brandSoft px-3 py-2 text-sm font-semibold text-brand">{item.period}</p>
                <p className="rounded-lg border border-line bg-mist px-3 py-2 text-sm font-semibold text-slatecopy">{item.duration}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-6 text-slatecopy">
                  <ShieldCheck className="mt-0.5 shrink-0 text-brand" size={18} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Stack({ content: t }: ContentProps) {
  return (
    <Section id="stack" className="bg-white">
      <SectionIntro title={t.stack.title} text={t.stack.intro} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.stack.groups.map((group, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article key={group.title} className="min-w-0 rounded-xl border border-line bg-mist p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-brand shadow-sm ring-1 ring-line">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
              </div>
              <div className="touch-carousel -mx-2 flex min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto px-2 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
                {group.items.map((item) => (
                  <TechChip key={item} name={item} />
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function TechChip({ name }: { name: string }) {
  const tech = techIcons[name];
  const Icon = tech?.icon ?? Code2;

  return (
    <div className="group grid min-h-[96px] w-32 shrink-0 snap-start place-items-center rounded-xl border border-line bg-white px-3 py-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-soft md:w-auto">
      <Icon size={28} style={{ color: tech?.color ?? "#6D28D9" }} aria-hidden="true" />
      <span className="mt-3 max-w-full rounded-full border border-line bg-mist px-2 py-1 text-[11px] font-semibold leading-4 text-slatecopy transition group-hover:text-ink">
        {name}
      </span>
    </div>
  );
}

function Services({ content: t }: ContentProps) {
  const isEnglish = t.meta.location.includes("Peru");
  const serviceDetails = isEnglish
    ? [
      {
        title: "SaaS Development",
        body: "Multi-tenant SaaS products with authentication, billing, automation and scalable infrastructure.",
        label: "Core service",
        icon: Braces,
        featured: true,
      },
      {
        title: "Systems Architecture",
        body: "Resilient architectures designed for performance, maintainability, security and long-term growth.",
        icon: Network,
      },
      {
        title: "Process Automation",
        body: "Automations that streamline operations, reduce manual work and connect business tools.",
        icon: Bot,
      },
      {
        title: "Professional Web Development",
        body: "Fast, responsive and accessible platforms built with modern web standards and SEO foundations.",
        icon: Globe2,
      },
      {
        title: "Optimization & Performance",
        body: "Performance audits, technical fixes and scalability improvements for reliable user experiences.",
        icon: Activity,
      },
      {
        title: "Technical SEO",
        body: "Technical SEO strategies that improve visibility, indexing, crawlability and Core Web Vitals.",
        icon: Search,
      },
      {
        title: "Technology Consulting",
        body: "Guidance on architecture, infrastructure, tooling and product decisions before costly implementation.",
        icon: Sparkles,
      },
    ]
    : [
      {
        title: "Desarrollo de SaaS",
        body: "Productos SaaS multi-tenant con autenticación, billing, automatización e infraestructura escalable.",
        label: "Servicio core",
        icon: Braces,
        featured: true,
      },
      {
        title: "Arquitectura de Sistemas",
        body: "Arquitecturas resilientes diseñadas para performance, mantenibilidad, seguridad y crecimiento.",
        icon: Network,
      },
      {
        title: "Automatización de procesos",
        body: "Automatizaciones que reducen trabajo manual, conectan herramientas y ordenan la operación.",
        icon: Bot,
      },
      {
        title: "Desarrollo Web Profesional",
        body: "Plataformas rápidas, responsive y accesibles con estándares modernos, SEO y edición controlada.",
        icon: Globe2,
      },
      {
        title: "Optimización y performance",
        body: "Auditorías, mejoras técnicas y optimización de escalabilidad para experiencias web confiables.",
        icon: Activity,
      },
      {
        title: "SEO técnico",
        body: "Estrategias técnicas para mejorar visibilidad, indexación, rastreo y Core Web Vitals.",
        icon: Search,
      },
      {
        title: "Consultoría tecnológica",
        body: "Acompañamiento en arquitectura, infraestructura, herramientas y decisiones de producto.",
        icon: Sparkles,
      },
    ];
  const technologies = ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "Cloudflare", "Supabase"];

  return (
    <Section id="servicios" className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FAFC_0%,#F5F3FF_100%)]">
      <div className="pointer-events-none absolute right-0 top-0 hidden h-[420px] w-[540px] opacity-60 lg:block">
        <div className="h-full w-full bg-[linear-gradient(#E2E8F0_1px,transparent_1px),linear-gradient(90deg,#E2E8F0_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(124,58,237,0.12),transparent_26%),linear-gradient(90deg,rgba(248,250,252,0.96),rgba(248,250,252,0.42))]" />
      </div>

      <div className="relative">
        <div className="max-w-3xl">
          <SectionIntro title={t.services.title} text={t.services.intro} />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {serviceDetails.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 pr-2 text-xs font-bold uppercase tracking-[0.18em] text-slatecopy">
            <Sparkles size={14} className="text-brand" />
            {isEnglish ? "Technologies" : "Tecnologías"}
          </span>
          {technologies.map((name) => {
            const tech = techIcons[name];
            const Icon = tech?.icon ?? Code2;
            return (
              <span key={name} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-slatecopy shadow-sm">
                <Icon size={15} style={{ color: tech?.color ?? "#6D28D9" }} />
                {name}
              </span>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: {
    title: string;
    body: string;
    label?: string;
    icon: ElementType;
    featured?: boolean;
  };
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className={`group relative min-h-[290px] overflow-hidden rounded-[24px] border border-line bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_10px_30px_rgba(15,23,42,.06),0_0_0_1px_rgba(124,58,237,.06)] ${service.featured ? "lg:col-span-2" : ""
        }`}
    >
      <div className="relative z-10">
        <div className="mb-8 flex items-center gap-4">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border border-lineHover text-primary shadow-sm transition group-hover:border-primary/30 group-hover:bg-surfaceSoft">
            <Icon size={28} />
          </span>
          {service.label ? (
            <span className="inline-flex h-8 items-center rounded-full border border-lineHover bg-surfaceAlt px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-primary shadow-sm">
              {service.label}
            </span>
          ) : null}
        </div>

        <h3 className="max-w-sm text-2xl font-semibold leading-tight text-ink">{service.title}</h3>
        <p className="mt-4 max-w-md text-base leading-7 text-slatecopy">{service.body}</p>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accentHover">
          <span>{index === 0 ? "Learn more" : ""}</span>
          <ArrowUpRight size={18} />
        </a>
      </div>

      {service.featured ? <ServiceCubes /> : null}
    </motion.article>
  );
}

function ServiceCubes() {
  return (
    <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-1/2 opacity-70 lg:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(124,58,237,0.12),transparent_34%)]" />
      <svg className="absolute inset-0 h-full w-full text-brand/30" viewBox="0 0 320 260" fill="none" aria-hidden="true">
        <path d="M62 188 160 132l96 56M160 132V36M160 132v92M62 188v-82l98-56 96 56v82" stroke="currentColor" strokeWidth="1.4" />
        <path d="M160 36 98 72v70l62 36 62-36V72l-62-36Z" fill="url(#cubeA)" stroke="currentColor" strokeWidth="1.4" />
        <path d="M98 142 36 178v40l62 36 62-36v-40l-62-36Z" fill="url(#cubeB)" stroke="currentColor" strokeWidth="1.4" />
        <path d="M222 142 160 178v40l62 36 62-36v-40l-62-36Z" fill="url(#cubeC)" stroke="currentColor" strokeWidth="1.4" />
        <defs>
          <linearGradient id="cubeA" x1="98" x2="222" y1="36" y2="178">
            <stop stopColor="#F5F3FF" />
            <stop offset="1" stopColor="#A78BFA" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="cubeB" x1="36" x2="160" y1="142" y2="254">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E9D5FF" />
          </linearGradient>
          <linearGradient id="cubeC" x1="160" x2="284" y1="142" y2="254">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E9D5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Method({ content: t }: ContentProps) {
  const [activeMethod, setActiveMethod] = useState(0);
  const methodCarouselRef = useRef<HTMLDivElement>(null);
  const isEnglish = t.meta.location.includes("Peru");
  const methodIcons = [Building2, Layers3, Code2, Cloud, BarChart3];
  const badges = isEnglish
    ? ["Alignment and clarity", "Solid foundations", "Value delivery", "Stability and trust", "Sustainable growth"]
    : ["Alineación y claridad", "Cimientos sólidos", "Entregas con valor", "Estabilidad y confianza", "Crecimiento sostenible"];
  const bullets = isEnglish
    ? [
      ["Business analysis", "Process mapping", "KPI definition"],
      ["Architecture design", "Technology selection", "Technical roadmap"],
      ["Iterative sprints", "Clean implementation", "Continuous feedback"],
      ["Secure deployment", "Monitoring", "Technical documentation"],
      ["Metric analysis", "Continuous improvement", "Scalability"],
    ]
    : [
      ["Análisis de negocio", "Mapeo de procesos", "Definición de KPIs"],
      ["Diseño de arquitectura", "Selección tecnológica", "Roadmap técnico"],
      ["Sprints iterativos", "Código limpio", "Feedback constante"],
      ["Despliegue seguro", "Monitoreo", "Documentación técnica"],
      ["Análisis de métricas", "Mejora continua", "Escalabilidad"],
    ];

  const scrollMethod = (index: number) => {
    const target = methodCarouselRef.current;
    if (!target) return;
    const clampedIndex = Math.min(t.method.steps.length - 1, Math.max(0, index));
    const slide = target.querySelector<HTMLElement>("[data-method-slide]");
    const gap = 16;
    const slideWidth = slide?.offsetWidth ?? target.clientWidth;
    target.scrollTo({ left: clampedIndex * (slideWidth + gap), behavior: "smooth" });
    setActiveMethod(clampedIndex);
  };

  return (
    <Section id="metodologia" className="relative overflow-hidden bg-surfaceAlt">
      <SectionIntro title={t.method.title} text={t.method.intro} />

      <div className="relative mt-10 rounded-[24px] border border-line bg-white p-4 shadow-soft lg:mt-14 lg:p-8">
        <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(124,58,237,.08),transparent_38%)]" />
        <svg className="pointer-events-none absolute inset-x-10 top-24 hidden h-72 text-primary/25 lg:block" viewBox="0 0 1000 260" fill="none" preserveAspectRatio="none" aria-hidden="true">
          <path d="M20 72 C 165 20, 245 222, 390 168 S 620 35, 760 104 S 890 205, 980 150" stroke="currentColor" strokeWidth="3" strokeDasharray="9 12" strokeLinecap="round" />
        </svg>
        <div
          ref={methodCarouselRef}
          className="touch-carousel relative -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
          onScroll={(event) => {
            const target = event.currentTarget;
            const itemWidth = target.scrollWidth / t.method.steps.length;
            setActiveMethod(Math.min(t.method.steps.length - 1, Math.max(0, Math.round(target.scrollLeft / itemWidth))));
          }}
        >
          {t.method.steps.map((step, index) => {
            const Icon = methodIcons[index] ?? Workflow;
            const offset = index % 2 === 0 ? "" : "lg:mt-20";
            return (
              <motion.article
                key={step.title}
                data-method-slide
                className={`relative flex min-h-[430px] w-[82vw] shrink-0 snap-center flex-col rounded-[24px] border border-line bg-white p-5 shadow-soft transition hover:border-primary/20 sm:w-[360px] lg:min-h-[510px] lg:w-auto ${offset}`}
                whileHover={{ y: -6 }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-lineHover bg-primaryUltraSoft text-primary">
                    <Icon size={24} />
                  </span>
                  <span className="rounded-full border border-line bg-surfaceAlt px-3 py-1 text-xs font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 min-h-[96px] text-sm leading-6 text-slatecopy">{step.detail}</p>
                <div className="my-5 h-px bg-divider" />
                <ul className="space-y-2">
                  {bullets[index].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-medium text-slatecopy">
                      <CheckCircle2 size={15} className="shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto rounded-lg border border-primary bg-primary px-3 py-2 text-center text-xs font-bold text-white shadow-sm">
                  {badges[index]}
                </div>
              </motion.article>
            );
          })}
        </div>
        <div className="mt-5 flex items-center justify-center gap-3 lg:hidden">
          <button className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-primary shadow-sm" onClick={() => scrollMethod(activeMethod - 1)} aria-label="Previous methodology step">
            <ChevronLeft size={17} />
          </button>
          <div className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 shadow-sm">
            {t.method.steps.map((step, index) => (
              <button
                key={step.title}
                className={`h-2 rounded-full transition-all ${activeMethod === index ? "w-6 bg-primary" : "w-2 bg-slate-300"}`}
                onClick={() => scrollMethod(index)}
                aria-label={`Go to ${step.title}`}
              />
            ))}
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-primary shadow-sm" onClick={() => scrollMethod(activeMethod + 1)} aria-label="Next methodology step">
            <ChevronRight size={17} />
          </button>
        </div>
        <div className="hidden h-20 lg:block" />
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-6 overflow-hidden rounded-[24px] border border-line bg-white p-5 shadow-soft lg:grid-cols-[0.42fr_1fr_0.28fr] lg:items-stretch lg:p-6">
        <div className="relative flex items-center gap-4 rounded-2xl border border-lineHover bg-[linear-gradient(135deg,#F5F3FF_0%,#FFFFFF_100%)] p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,.12),transparent_36%)]" />
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary text-white shadow-glow">
            <TargetIcon />
          </span>
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{isEnglish ? "Method" : "Método"}</p>
            <p className="mt-1 text-xl font-semibold leading-tight text-ink">{isEnglish ? "Outcome-centered execution" : "Enfoque centrado en resultados"}</p>
          </div>
        </div>
        <div className="flex items-center rounded-2xl border border-line bg-mist p-5 lg:px-7">
          <p className="text-sm leading-7 text-slatecopy">
            {isEnglish
              ? "Each stage is designed to reduce risk, maximize value and make technology a real growth driver."
              : "Cada etapa está diseñada para reducir riesgos, maximizar valor y asegurar que la tecnología sea un verdadero impulsor de crecimiento."}
          </p>
        </div>
        <a href="#contact" className="button-primary px-4 py-3 lg:self-center">
          {t.hero.secondaryCta}
          <ArrowUpRight size={17} />
        </a>
      </div>
    </Section>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M12 21a9 9 0 1 0-9-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 17a5 5 0 1 0-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 13a1 1 0 1 0-1-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 11 20 4m0 0h-4m4 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FinalCta({ content: t }: ContentProps) {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary px-5 py-20 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(217,70,239,.18),transparent_34%),linear-gradient(180deg,#6D28D9_0%,#4C1D95_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">{t.finalCta.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{t.finalCta.body}</p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_60px_rgba(0,0,0,.16)]">
          <div className="grid gap-4">
            <a href={`mailto:${t.meta.email}`} className="contact-link">
              <Mail size={20} />
              {t.meta.email}
            </a>
            <p className="contact-link">
              <MapPin size={20} />
              {t.meta.location}
            </p>
            <LocalTime label={t.finalCta.localTimeLabel} />
          </div>
          <a href={`mailto:${t.meta.email}`} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-accentSoft hover:text-accentHover">
            {t.finalCta.action}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function LocalTime({ label }: { label: string }) {
  const [time, setTime] = useState(() => formatPeruTime());
  const timezoneText = label.toLowerCase().startsWith("hora") ? "Perú GMT-5" : "Peru GMT-5";

  useEffect(() => {
    const updateTime = () => setTime(formatPeruTime());
    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <p className="contact-link">
      <Clock3 size={20} />
      <span>
        {label}: <span className="text-white">{time}</span>
        <span className="ml-2 text-slate-400"> {timezoneText}</span>
      </span>
    </p>
  );
}

function formatPeruTime() {
  return new Intl.DateTimeFormat("es-PE", {
    timeZone: "America/Lima",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

function Footer({ content: t }: ContentProps) {
  return (
    <footer className="border-t border-line bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slatecopy md:flex-row md:items-center md:justify-between">
        <p>{t.meta.name} · {t.meta.role}</p>
        <p>{t.meta.location}</p>
      </div>
    </footer>
  );
}

function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-20 px-5 py-20 lg:px-8 lg:py-24 ${className ?? ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="mx-auto max-w-7xl">
        {children}
      </motion.div>
    </motion.section>
  );
}

function SectionIntro({ title, text }: { title: string; text?: string }) {
  return (
    <div className="section-intro relative max-w-4xl lg:pl-6">
      <div className="pointer-events-none absolute left-0 top-1 hidden h-full w-[3px] rounded-full bg-gradient-to-b from-primary via-primarySoft to-transparent lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-4 top-3 hidden h-20 w-20 rounded-full bg-primaryUltraSoft/75 blur-2xl lg:block" aria-hidden="true" />
      <h2 className="relative isolate text-4xl font-semibold leading-tight text-ink md:text-5xl">
        <span className="relative inline">
          <span className="pointer-events-none absolute inset-x-0 bottom-1 -z-10 h-4 rounded-full bg-primaryUltraSoft/80" aria-hidden="true" />
          {title}
        </span>
      </h2>
      {text ? <p className="mt-5 text-lg leading-8 text-slatecopy">{text}</p> : null}
    </div>
  );
}

function slug(item: string) {
  const normalized = item
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (normalized.includes("about") || normalized.includes("sobre")) return "sobre-mi";
  if (normalized.includes("project") || normalized.includes("proyecto")) return "proyectos";
  if (normalized.includes("experience") || normalized.includes("experiencia")) return "experiencia";
  if (normalized.includes("method") || normalized.includes("metodologia")) return "metodologia";
  if (normalized.includes("service") || normalized.includes("servicio")) return "servicios";
  return normalized.replace(/\s+/g, "-");
}

export default App;
