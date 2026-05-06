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
import type { MotionValue } from "framer-motion";
import type { ElementType, PointerEvent, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
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
  Coolify: { icon: Cloud, color: "#10B981" },
  "Linux Servers": { icon: SiLinux, color: "#FCC624" },
  Zendesk: { icon: SiZendesk, color: "#03363D" },
  SurveyMonkey: { icon: SiSurveymonkey, color: "#00BF6F" },
  MailerLite: { icon: Mail, color: "#00A154" },
  Mailcow: { icon: Mail, color: "#0EA5E9" },
};

function App() {
  const { locale, setLocale } = usePreferredLocale();
  const [menuOpen, setMenuOpen] = useState(false);
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
              className={`relative py-2 transition hover:text-brand ${
                activeSection === slug(item) ? "text-primary" : "text-slatecopy"
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
    <div className="flex rounded-lg border border-line bg-white p-1 shadow-sm" aria-label="Language selector">
      {(["es", "en"] as Locale[]).map((item) => (
        <button
          key={item}
          className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold uppercase transition ${
            locale === item ? "bg-primary text-white" : "text-slatecopy hover:text-accentHover"
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
  const panelX = useSpring(useTransform(pointerX, [-1, 1], [12, -12]), { stiffness: 90, damping: 24 });
  const panelY = useSpring(useTransform(pointerY, [-1, 1], [10, -10]), { stiffness: 90, damping: 24 });
  const panelRotate = useSpring(useTransform(pointerX, [-1, 1], [-0.7, 0.7]), { stiffness: 90, damping: 24 });
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_16%,rgba(16,185,129,0.12),transparent_30%),linear-gradient(90deg,#ffffff_0%,#ffffff_48%,#F8FAFC_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-14 lg:min-h-[760px] lg:grid-cols-[1fr_0.96fr] lg:gap-12 lg:px-8 lg:pb-20 lg:pt-24">
        <motion.div initial="hidden" animate="visible" variants={stagger} style={{ y: copyY }} className="flex flex-col justify-center">
          <motion.div style={{ y: heroCopyScroll }}>
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
            )})}
          </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ x: panelX, y: panelY, rotate: panelRotate }}
          className="relative"
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
  const stats = isEnglish
    ? [
        ["Users", "12,540", "+12.9%"],
        ["MRR", "$24,830", "+8.1%"],
        ["Churn", "2.4%", "-0.6%"],
      ]
    : [
        ["Usuarios", "12,540", "+12.9%"],
        ["MRR", "$24,830", "+8.1%"],
        ["Churn", "2.4%", "-0.6%"],
      ];

  return (
    <div className="relative rounded-[28px] border border-line bg-white p-4 shadow-glow">
      <motion.div style={{ y: dotsY }} className="absolute -right-10 -top-12 hidden h-24 w-40 bg-[radial-gradient(circle,#99F6E4_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-60 lg:block" />
      <div className="rounded-2xl border border-line bg-mist p-5">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-ink">{title}</p>
            <p className="mt-1 text-xs text-slatecopy">Chatwoot · UniBee · SaaS · Data</p>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white">
            <Sparkles size={18} />
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {stats.map(([label, value, delta]) => (
            <div key={label} className="rounded-lg border border-line bg-white p-4 shadow-sm">
              <p className="text-[11px] font-semibold text-slatecopy">{label}</p>
              <p className="mt-2 text-xl font-semibold text-ink">{value}</p>
              <p className="mt-1 text-xs font-semibold text-emerald-500">{delta}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-line bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold text-slatecopy">{isEnglish ? "Revenue" : "Ingresos"}</p>
              <Activity size={16} className="text-brand" />
            </div>
            <div className="flex h-28 items-end gap-2">
              {[30, 42, 38, 52, 68, 58, 76, 84].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand to-teal-200"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-ink p-4 font-mono text-[11px] leading-5 text-slate-300 shadow-soft">
            <p className="text-teal-200">export const solution = &#123;</p>
            <p className="pl-4">core: "operations",</p>
            <p className="pl-4 text-violet-300">billing: "subscriptions",</p>
            <p className="pl-4 text-emerald-300">automation: true,</p>
            <p>&#125;;</p>
          </div>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-line bg-white p-4">
            <p className="mb-3 text-xs font-semibold text-slatecopy">{isEnglish ? "Distribution" : "Distribución"}</p>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-[conic-gradient(#10B981_0_46%,#0D9488_46%_74%,#CCFBF1_74%_100%)] p-3">
                <div className="h-full w-full rounded-full bg-white" />
              </div>
              <div className="space-y-2 text-xs font-medium text-slatecopy">
                <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand" />Web</p>
                <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-violet" />SaaS</p>
                <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-brandSoft" />Data</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-white p-4">
            <p className="mb-3 text-xs font-semibold text-slatecopy">{isEnglish ? "Services" : "Servicios"}</p>
            <div className="grid gap-2">
              {items.slice(0, 4).map((item) => (
                <div key={item} className="flex items-center justify-between rounded-md bg-mist px-3 py-2 text-xs font-semibold text-slatecopy">
                  <span>{item}</span>
                  <span className="text-emerald-500">{isEnglish ? "Active" : "Activo"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end">
          <div className="grid w-full max-w-sm grid-cols-3 gap-2 text-center">
            {["API", "CRM", "BI"].map((item) => (
              <div key={item} className="rounded-lg border border-line bg-white p-3 text-xs font-semibold text-slatecopy">
                {item}
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
    <div className="mt-8 rounded-xl border border-emerald-200 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
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
  const active = t.projects.groups[activeGroup] ?? t.projects.groups[0];
  const project = active.projects[activeProject] ?? active.projects[0];
  const previousProject = active.projects[(activeProject - 1 + active.projects.length) % active.projects.length];
  const nextProject = active.projects[(activeProject + 1) % active.projects.length];
  const labels: [string, string, string] = t.meta.location.includes("Peru") ? ["Problem", "Solution", "Impact"] : ["Problema", "Solución", "Impacto"];
  const isEnglish = t.meta.location.includes("Peru");

  const chooseGroup = (index: number) => {
    setProjectDirection(1);
    setActiveGroup(index);
    setActiveProject(0);
  };

  const moveProject = (direction: number) => {
    setProjectDirection(direction);
    setActiveProject((current) => (current + direction + active.projects.length) % active.projects.length);
  };

  const chooseProject = (index: number) => {
    setProjectDirection(index >= activeProject ? 1 : -1);
    setActiveProject(index);
  };

  return (
    <Section id="proyectos" className="bg-white">
      <SectionIntro title={t.projects.title} text={t.projects.intro} />

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {t.projects.groups.map((group, index) => (
            <button
              key={group.title}
              className={`shrink-0 rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                activeGroup === index
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
      </div>

      <div className="mt-8 overflow-hidden">
        <AnimatePresence mode="wait" custom={projectDirection}>
          <motion.div
            key={`${active.title}-${project.name}`}
            custom={projectDirection}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: (direction: number) => ({
                opacity: 0,
                x: direction > 0 ? 64 : -64,
                scale: 0.985,
                filter: "blur(6px)",
              }),
              center: {
                opacity: 1,
                x: 0,
                scale: 1,
                filter: "blur(0px)",
              },
              exit: (direction: number) => ({
                opacity: 0,
                x: direction > 0 ? -64 : 64,
                scale: 0.985,
                filter: "blur(6px)",
              }),
            }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative min-h-[610px] lg:min-h-[560px]">
              <button
                className="absolute left-0 top-16 z-10 hidden w-[255px] text-left opacity-50 blur-[0.8px] transition duration-300 hover:-translate-x-1 hover:opacity-75 hover:blur-0 lg:block xl:w-[285px]"
                onClick={() => moveProject(-1)}
                aria-label="Previous project preview"
              >
                <ProjectPeek project={previousProject} index={activeProject - 1} side="left" />
              </button>

              <div className="relative z-20 mx-auto max-w-5xl px-0 lg:px-8">
                <ProjectShowcase
                  project={project}
                  groupTitle={active.title}
                  index={activeProject}
                  labels={labels}
                  isEnglish={isEnglish}
                />
              </div>

              <button
                className="icon-button absolute left-[calc(50%-520px)] top-[45%] z-40 hidden -translate-y-1/2 lg:grid"
                onClick={() => moveProject(-1)}
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="icon-button absolute right-[calc(50%-520px)] top-[45%] z-40 hidden -translate-y-1/2 lg:grid"
                onClick={() => moveProject(1)}
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>

              <button
                className="absolute right-0 top-16 z-10 hidden w-[255px] text-left opacity-50 blur-[0.8px] transition duration-300 hover:translate-x-1 hover:opacity-75 hover:blur-0 lg:block xl:w-[285px]"
                onClick={() => moveProject(1)}
                aria-label="Next project preview"
              >
                <ProjectPeek project={nextProject} index={activeProject + 1} side="right" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <button className="icon-button" onClick={() => moveProject(-1)} aria-label="Previous project">
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-3 shadow-sm">
                {active.projects.map((item, index) => (
                  <button
                    key={item.name}
                    className={`h-2.5 rounded-full transition-all ${
                      activeProject === index ? "w-7 bg-brand" : "w-2.5 bg-slate-300 hover:bg-brand/50"
                    }`}
                    onClick={() => chooseProject(index)}
                    aria-label={`Go to ${item.name}`}
                  />
                ))}
              </div>
              <button className="icon-button" onClick={() => moveProject(1)} aria-label="Next project">
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

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
          <span className="text-xs font-semibold text-emerald-500">+24.6%</span>
        </div>
        <div className="mt-5 flex h-24 items-end gap-2">
          {[38, 48, 35, 58, 52, 72, 66, 86].map((height) => (
            <span
              key={height}
              className="flex-1 rounded-t bg-gradient-to-t from-brand/80 to-teal-200/80"
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
  const tech = ["Node", "TS", "API", "React", "+2"];

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white p-6 shadow-soft">
      <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <div className="flex items-start gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-violet text-white shadow-glow">
              <Icon size={24} />
            </span>
            <div>
              <h3 className="text-3xl font-semibold leading-tight text-ink">{project.name}</h3>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-slatecopy">
                <span className="rounded-md bg-brandSoft px-2 py-1 text-brand">{groupTitle}</span>
                <span>·</span>
                <span>{isEnglish ? "Production logic" : "Lógica productiva"}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <ProjectStatement icon={<Bot size={16} />} label={labels[0]} text={project.problem} tone="violet" />
            <ProjectStatement icon={<MapPin size={16} />} label={labels[1]} text={project.solution} tone="brand" />
            <ProjectStatement icon={<TrendingUp size={16} />} label={labels[2]} text={project.impact} tone="green" compact />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex flex-wrap items-center justify-end gap-2">
            {tech.map((item, itemIndex) => (
              <span key={item} className="grid h-10 min-w-10 place-items-center rounded-lg border border-line bg-mist px-3 text-xs font-semibold text-brand">
                {itemIndex < 4 ? item : item}
              </span>
            ))}
          </div>

          <div className="rounded-lg border border-line bg-mist p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">{isEnglish ? "Architecture map" : "Mapa de arquitectura"}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs font-semibold text-brand">
                {isEnglish ? "View details" : "Ver detalles"}
                <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="grid gap-3 md:grid-cols-[0.72fr_0.84fr_1fr_0.84fr] md:items-stretch">
              <ArchitectureColumn title={isEnglish ? "Channels" : "Canales"} items={["Web", "API", "Chat"]} />
              <ArchitectureNode title="API Gateway" value="ex" />
              <ArchitectureColumn title={isEnglish ? "Core Services" : "Servicios Core"} items={isEnglish ? ["Conversations", "Automations", "Analytics"] : ["Conversaciones", "Automatización", "Analítica"]} />
              <ArchitectureColumn title={isEnglish ? "Data Layer" : "Capa de datos"} items={["PostgreSQL", "Storage", "Events"]} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-line bg-white p-4">
              <p className="mb-4 text-sm font-semibold text-ink">{isEnglish ? "Tenants" : "Tenants"}</p>
              <div className="flex -space-x-2">
                {["AC", "CL", "PE", "MX", "+12"].map((tenant, itemIndex) => (
                  <span
                    key={tenant}
                    className={`grid h-9 w-9 place-items-center rounded-full border-2 border-white text-[11px] font-semibold ${
                      itemIndex % 3 === 0 ? "bg-brandSoft text-brand" : itemIndex % 3 === 1 ? "bg-violet/10 text-violet" : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    {tenant}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-line bg-white p-4">
              <p className="mb-4 text-sm font-semibold text-ink">{isEnglish ? "Live overview" : "Vista operativa"}</p>
              <div className="grid grid-cols-3 gap-3">
                {[["98.4K", 74], ["32.1K", 58], ["68%", 82]].map(([value, height]) => (
                  <div key={value} className="rounded-md bg-mist p-3">
                    <p className="text-sm font-semibold text-ink">{value}</p>
                    <div className="mt-3 flex h-12 items-end gap-1">
                      {[44, Number(height), 62, 80].map((bar, barIndex) => (
                        <span key={barIndex} className="flex-1 rounded-t bg-brand" style={{ height: `${bar}%` }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
}: {
  icon: ReactNode;
  label: string;
  text: string;
  tone: "brand" | "violet" | "green";
  compact?: boolean;
}) {
  const color = tone === "green" ? "bg-emerald-100 text-emerald-600" : tone === "violet" ? "bg-violet/10 text-violet" : "bg-brandSoft text-brand";

  return (
    <div className="border-t border-line pt-5 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-3">
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${color}`}>{icon}</span>
        <p className="text-lg font-semibold text-ink">{label}</p>
      </div>
      <p className={`mt-3 text-sm leading-6 text-slatecopy ${compact ? "" : "max-w-md"}`}>{text}</p>
    </div>
  );
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
            <article key={group.title} className="rounded-xl border border-line bg-mist p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-brand shadow-sm ring-1 ring-line">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
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
    <div className="group grid min-h-[96px] place-items-center rounded-xl border border-line bg-white px-3 py-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-soft">
      <Icon size={28} style={{ color: tech?.color ?? "#10B981" }} aria-hidden="true" />
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
    <Section id="servicios" className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2F7_100%)]">
      <div className="pointer-events-none absolute right-0 top-0 hidden h-[420px] w-[540px] opacity-60 lg:block">
        <div className="h-full w-full bg-[linear-gradient(#E2E8F0_1px,transparent_1px),linear-gradient(90deg,#E2E8F0_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(16,185,129,0.18),transparent_26%),linear-gradient(90deg,rgba(248,250,252,0.96),rgba(248,250,252,0.42))]" />
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
                <Icon size={15} style={{ color: tech?.color ?? "#10B981" }} />
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
      className={`group relative min-h-[290px] overflow-hidden rounded-[24px] border border-line bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_10px_30px_rgba(15,23,42,.06),0_0_0_1px_rgba(20,184,166,.08)] ${
        service.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative z-10">
        <div className="mb-8 flex items-start gap-4">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border border-line bg-accentSoft text-primary shadow-sm transition group-hover:border-accent/30 group-hover:bg-teal-100">
            <Icon size={28} />
          </span>
          {service.label ? (
            <span className="mt-1 rounded-full border border-accent/20 bg-accentSoft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accentHover">
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(16,185,129,0.18),transparent_34%)]" />
      <svg className="absolute inset-0 h-full w-full text-brand/30" viewBox="0 0 320 260" fill="none" aria-hidden="true">
        <path d="M62 188 160 132l96 56M160 132V36M160 132v92M62 188v-82l98-56 96 56v82" stroke="currentColor" strokeWidth="1.4" />
        <path d="M160 36 98 72v70l62 36 62-36V72l-62-36Z" fill="url(#cubeA)" stroke="currentColor" strokeWidth="1.4" />
        <path d="M98 142 36 178v40l62 36 62-36v-40l-62-36Z" fill="url(#cubeB)" stroke="currentColor" strokeWidth="1.4" />
        <path d="M222 142 160 178v40l62 36 62-36v-40l-62-36Z" fill="url(#cubeC)" stroke="currentColor" strokeWidth="1.4" />
        <defs>
          <linearGradient id="cubeA" x1="98" x2="222" y1="36" y2="178">
            <stop stopColor="#F0FDF4" />
            <stop offset="1" stopColor="#99F6E4" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="cubeB" x1="36" x2="160" y1="142" y2="254">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#CCFBF1" />
          </linearGradient>
          <linearGradient id="cubeC" x1="160" x2="284" y1="142" y2="254">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#CCFBF1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Method({ content: t }: ContentProps) {
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

  return (
    <Section id="metodologia" className="relative overflow-hidden bg-surfaceAlt">
      <SectionIntro title={t.method.title} text={t.method.intro} />

      <div className="relative mt-14 rounded-[24px] border border-line bg-white p-5 shadow-soft lg:p-8">
        <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(20,184,166,.06),transparent_38%)]" />
        <svg className="pointer-events-none absolute inset-x-10 top-24 hidden h-72 text-accent/30 lg:block" viewBox="0 0 1000 260" fill="none" preserveAspectRatio="none" aria-hidden="true">
          <path d="M20 72 C 165 20, 245 222, 390 168 S 620 35, 760 104 S 890 205, 980 150" stroke="currentColor" strokeWidth="3" strokeDasharray="9 12" strokeLinecap="round" />
        </svg>
        <div className="relative grid gap-5 lg:grid-cols-5">
          {t.method.steps.map((step, index) => {
            const Icon = methodIcons[index] ?? Workflow;
            const offset = index % 2 === 0 ? "" : "lg:mt-20";
            return (
              <motion.article
                key={step.title}
                className={`relative flex min-h-[510px] flex-col rounded-[24px] border border-line bg-white p-5 shadow-soft transition hover:border-accent/25 ${offset}`}
                whileHover={{ y: -6 }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-accentSoft text-primary">
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
                      <CheckCircle2 size={15} className="shrink-0 text-accentHover" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto rounded-lg border border-accent/15 bg-accentSoft px-3 py-2 text-center text-xs font-semibold text-accentHover">
                  {badges[index]}
                </div>
              </motion.article>
            );
          })}
        </div>
        <div className="hidden h-20 lg:block" />
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-5 rounded-[24px] border border-line bg-white p-5 shadow-soft lg:grid-cols-[0.35fr_1fr_0.32fr] lg:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-lg bg-accentSoft text-primary">
            <TargetIcon />
          </span>
          <p className="text-lg font-semibold text-ink">{isEnglish ? "Outcome-centered execution" : "Enfoque centrado en resultados"}</p>
        </div>
        <p className="border-line text-sm leading-6 text-slatecopy lg:border-l lg:border-r lg:px-6">
          {isEnglish
            ? "Each stage is designed to reduce risk, maximize value and make technology a real growth driver."
            : "Cada etapa está diseñada para reducir riesgos, maximizar valor y asegurar que la tecnología sea un verdadero impulsor de crecimiento."}
        </p>
        <a href="#contact" className="button-primary px-4 py-3">
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(20,184,166,.16),transparent_34%),linear-gradient(180deg,#111827_0%,#0F172A_100%)]" />
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
    <div className="max-w-3xl">
      <h2 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">{title}</h2>
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
