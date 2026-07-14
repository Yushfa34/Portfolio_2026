import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import {
  Code2, Server, Database, Cloud, Github, Linkedin, Mail, Download,
  Trophy, Rocket, Star, Sparkles, Flame, Zap, Heart, ArrowRight,
  ExternalLink, Send, CheckCircle2, Terminal, Cpu, GitBranch,
  MessageSquare, Clock, MapPin,Palette,X,Hand,
  Fingerprint, Network, Lock, ShoppingCart, BookOpen, ArrowDownUp,
  Droplet, Ghost, Spade, GraduationCap, ShoppingBasket,Menu,
} from "lucide-react";
import { Mascot } from "@/component/portfolio/Mascot";
import { ProgressRing } from "@/component/portfolio/ProgressRing";
import { Counter } from "@/component/portfolio/Counter";
import { ThemeToggle } from "@/component/portfolio/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yushfa Shafiq — Full Stack Developer" },
      { name: "description", content: "Gamified portfolio of a Full Stack Developer building delightful, scalable web products. Level up with React, Next.js, Node, and the Cloud." },
      { property: "og:title", content: "Yushfa Shafiq — Full Stack Developer" },
      { property: "og:description", content: "A playful, gamified portfolio showcasing projects, skills, and the developer journey." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: PortfolioPage,
});

// ---------- data ----------
const skills = [
  // Frontend
  { name: "Figma", level: 8, xp: 85, group: "Design", color: "var(--color-accent)" },
  { name: "Canva", level: 9, xp: 92, group: "Design", color: "var(--color-primary)" },
  { name: "React", level: 8, xp: 85, group: "Frontend", color: "var(--color-accent)" },
  { name: "Next.js", level: 7, xp: 78, group: "Frontend", color: "var(--color-foreground)" },
  { name: "TypeScript", level: 7, xp: 75, group: "Frontend", color: "var(--color-accent)" },
  { name: "Tailwind", level: 8, xp: 85, group: "Frontend", color: "var(--color-accent)" },
  // Backend
  { name: "Node.js", level: 8, xp: 85, group: "Backend", color: "var(--color-primary)" },
  { name: "Express", level: 8, xp: 82, group: "Backend", color: "var(--color-primary-dark)" },
  { name: "PHP", level: 7, xp: 75, group: "Backend", color: "var(--color-accent)" },
  { name: "Python", level: 7, xp: 78, group: "Backend", color: "var(--color-warning)" },
  { name: "C#", level: 7, xp: 76, group: "Backend", color: "var(--color-destructive)" },
  { name: "C++", level: 7, xp: 74, group: "Backend", color: "var(--color-primary)" },
  // Database
  { name: "MongoDB", level: 8, xp: 82, group: "Database", color: "var(--color-primary)" },
  { name: "PostgreSQL", level: 7, xp: 75, group: "Database", color: "var(--color-accent)" },
  { name: "MySQL", level: 7, xp: 72, group: "Database", color: "var(--color-warning)" },
  { name: "SQL", level: 7, xp: 76, group: "Database", color: "var(--color-foreground)" },
  // Cloud & Tools
  { name: "Docker", level: 6, xp: 65, group: "Cloud", color: "var(--color-accent)" },
  { name: "Git / GitHub", level: 8, xp: 80, group: "Cloud", color: "var(--color-foreground)" },
  { name: "Vercel", level: 7, xp: 72, group: "Cloud", color: "var(--color-foreground)" },
  { name: "Railway", level: 7, xp: 70, group: "Cloud", color: "var(--color-warning)" },
];

const journey = [
  { level: 1, title: "C++ & Fundamentals", icon: Code2, done: true },
  { level: 5, title: "OOP, C# & SQL", icon: Database, done: true },
  { level: 10, title: "DSA & Python", icon: Zap, done: true },
  { level: 15, title: "Web & REST APIs", icon: Server, done: true },
  { level: 20, title: "Internship @ DevelopersHub", icon: Cloud, done: true },
  { level: 25, title: "Full Stack + Design", icon: Trophy, done: true, current: true },
];

const projects = [

  {
    title: "Puzzlify AI", icon: Hand,
    desc: "A webcam hand-tracking puzzle game. Make a rectangle with your hands to snap a photo, which becomes a sliding-style swap puzzle. Runs fully in-browser with MediaPipe hand tracking — no backend, no uploads, photos never leave your device.",
    tech: ["Next.js 15", "TypeScript", "MediaPipe", "Framer Motion", "Zustand", "Canvas"],
    xp: 4500, difficulty: 5, status: "Completed",
    gradient: "from-[oklch(0.72_0.16_230)] to-[oklch(0.65_0.22_300)]",
    github: "https://github.com/Yushfa34/puzzlify",
    live: "https://puzzlify-ten.vercel.app",
  },
  {
    title: "ContentDNA", icon: Fingerprint,
    desc: "Full-stack digital forensics platform to trace origin and spread of harmful content. Generates SHA-256, pHash, aHash, and dHash fingerprints per image, embeds LSB steganography watermarks, builds propagation lineage graphs, and produces court-ready PDF reports with full chain of custody logs. Runs in 4 Docker containers.",
    tech: ["PHP", "PostgreSQL", "Docker", "JWT", "CryptoJS", "Steganography"],
    xp: 5000, difficulty: 5, status: "Completed",
    gradient: "from-[oklch(0.65_0.22_300)] to-[oklch(0.65_0.24_25)]",
    github: "https://github.com/Yushfa34/Yushfa",
  },
  {
    title: "Syncd", icon: Network,
    desc: "AI-powered developer collaboration platform with Neo4j network graphs, Kanban boards, AI developer matching using Sentence Transformers, and real-time messaging via Socket.IO.",
    tech: ["Next.js", "Node.js", "MongoDB", "Neo4j", "Python/FastAPI", "Socket.IO"],
    xp: 5000, difficulty: 5, status: "In Progress",
    gradient: "from-[oklch(0.76_0.21_135)] to-[oklch(0.72_0.16_230)]",
    github: "https://github.com/Yushfa34/Syncd",
  },
  {
    title: "SecureNote", icon: Lock,
    desc: "Zero-knowledge encrypted note sharing platform. Notes are encrypted in the browser using AES-256-CBC before transmission — the server only ever sees ciphertext, never passwords or plaintext.",
    tech: ["PHP 8", "MySQL", "CryptoJS", "JavaScript"],
    xp: 3500, difficulty: 4, status: "Completed",
    gradient: "from-[oklch(0.65_0.24_25)] to-[oklch(0.72_0.16_230)]",
    github: "https://github.com/Yushfa34/Secure_note",
  },
  {
    title: "ShopEase — eCommerce Backend", icon: ShoppingCart,
    desc: "Full eCommerce backend with user authentication, admin panel, product search, and pagination. Tested with Postman and deployed live to Railway.",
    tech: ["Node.js", "Express", "MongoDB", "Postman", "Railway"],
    xp: 4000, difficulty: 4, status: "Completed",
    gradient: "from-[oklch(0.72_0.16_230)] to-[oklch(0.65_0.22_300)]",
    github: "https://github.com/Yushfa34/ecommerce-backend-design",
  },
  {
    title: "Bookstore API", icon: BookOpen,
    desc: "RESTful API for a bookstore with full CRUD operations built with Node.js, Express, and MongoDB. Documented with Postman and deployed to Railway.",
    tech: ["Node.js", "Express", "MongoDB", "Railway"],
    xp: 3000, difficulty: 3, status: "Completed",
    gradient: "from-[oklch(0.85_0.17_90)] to-[oklch(0.76_0.21_135)]",
    github: "https://github.com/Yushfa34/bookstore-api",
  },
  {
    title: "DSA Sorting & Scraper", icon: ArrowDownUp,
    desc: "Scrapes live product data from Daraz.pk using Selenium and BeautifulSoup across 72 pages, extracts 10 fields per product, and sorts using 9 DSA algorithms — Bubble, Selection, Insertion, Merge, Quick, Hybrid Merge, Counting, Radix, and Bucket Sort.",
    tech: ["Python", "Selenium", "BeautifulSoup", "Pandas", "DSA"],
    xp: 3500, difficulty: 4, status: "Completed",
    gradient: "from-[oklch(0.85_0.17_90)] to-[oklch(0.72_0.16_230)]",
    github: "https://github.com/Yushfa34/Sorting_DSA",
  },
  {
    title: "Muawan — Blood Bank System", icon: Droplet,
    desc: "Blood Bank Management System deployable by UET's Blood Donating Society. Built with OOP, SQL and C# as a 3-member team final semester project.",
    tech: ["C#", "SQL", "OOP"],
    xp: 3500, difficulty: 4, status: "Completed",
    gradient: "from-[oklch(0.76_0.21_135)] to-[oklch(0.65_0.24_25)]",
    github: "https://github.com/Kashaf15/DBS25F032",
  },
  {
    title: "The Haunted Maze", icon: Ghost,
    desc: "A maze game using advanced DSA concepts built in JavaScript as a 2-member final semester team project.",
    tech: ["JavaScript", "DSA"],
    xp: 2500, difficulty: 4, status: "Completed",
    gradient: "from-[oklch(0.65_0.24_25)] to-[oklch(0.85_0.17_90)]",
    github: "https://github.com/Yushfa34/Haunted_Maze_Runner",
  },
  {
    title: "Solitaire Game", icon: Spade,
    desc: "Fully functional classic Solitaire built in Python with Pygame, implementing all official rules using DSA concepts as a pre-midsem individual project.",
    tech: ["Python", "Pygame", "DSA"],
    xp: 2500, difficulty: 3, status: "Completed",
    gradient: "from-[oklch(0.72_0.16_230)] to-[oklch(0.76_0.21_135)]",
    github: "https://github.com/Yushfa34/Solitaire-",
  },
  {
    title: "Faculty Management System", icon: GraduationCap,
    desc: "University faculty management system based on OOP concepts and SQL built in C# as a mid-semester individual project.",
    tech: ["C#", "SQL", "OOP"],
    xp: 2000, difficulty: 3, status: "Completed",
    gradient: "from-[oklch(0.76_0.21_135)] to-[oklch(0.85_0.17_90)]",
    github: "https://github.com/Yushfa34/DBS25P159",
  },
  {
    title: "ORDERLY — Grocery Shopping System", icon: ShoppingBasket,
    desc: "CLI-based grocery shopping system built in C++ with comprehensive CRUD operations. Covers file handling, data management, and object-oriented programming concepts. Built as a 1st semester Programming Fundamentals project.",
    tech: ["C++", "File Handling", "CRUD", "OOP"],
    xp: 1500, difficulty: 2, status: "Completed",
    gradient: "from-[oklch(0.76_0.21_135)] to-[oklch(0.85_0.17_90)]",
    github: "https://github.com/Yushfa34/Yushfa",
  },
];



const experience = [
  {
    role: "Backend Developer Intern",
    company: "DevelopersHub Corporation",
    period: "2025 — 2026",
    points: [
      "Built a full RESTful Bookstore API using Node.js, Express, and MongoDB",
      "Built an eCommerce backend (ShopEase) with user auth, admin panel, search, and pagination",
      "Tested and documented APIs using Postman",
      "Deployed projects to Railway with GitHub integration",
    ],
  },
  {
    role: "Graphic Design Intern",
    company: "JSS",
    period: "2025 — 2026",
    points: [
      "Assisted in creating visual designs for various marketing materials",
      "Collaborated with the team to develop a cohesive brand identity",
      "Designed social media graphics and event posters",
    ],
  },
  {
    role: "Graphic Design Director",
    company: "PALS UET — PakLaunch Chapter",
    period: "2025 — Present",
    points: [
      "Leading visual communication and creative design for chapter events",
      "Designing promotional material, social media graphics, and branding assets",
      "Collaborating with the core team on event planning and execution",
    ],
  },
  {
    role: "Graphic Design Director",
    company: "JSS UET — Student Ambassador Program",
    period: "2025 — Present",
    points: [
      "Contributing to visual design for chapter events and initiatives",
      "Creating design assets for social media and internal communications",
    ],
  },

];

const achievements = [
  { icon: "🎓", title: "CS @ UET Lahore", desc: "Batch 2024–2028" },
  { icon: "🏆", title: "Backend Intern", desc: "DevelopersHub Corporation" },
  { icon: "🎨", title: "Graphic Design Intern", desc: "JSS" },
  { icon: "📜", title: "Event Certificates", desc: "Active in tech community" },
  { icon: "🎨", title: "Design Director", desc: "PALS UET & JSS UET" },
  { icon: "🚀", title: `${projects.length}+ Projects Built`, desc: "Academic & personal" },
  { icon: "🔐", title: "InfoSec Projects", desc: "Content DNA & SecureNote" },
  { icon: "🛒", title: "Live Deployments", desc: "Railway & Vercel" },
  { icon: "🤖", title: "AI Platform", desc: "Syncd — co-built with team" },
  { icon: "💻", title: "Full Stack Dev", desc: "Frontend + Backend" },
];

const testimonials = [
  {
    name: "Internship Supervisor",
    role: "DevelopersHub Corporation",
    text: "Yushfa showed great initiative during her internship — her Bookstore API and ShopEase backend were clean, well-structured, and deployed successfully.",
  },
  {
    name: "Internship Supervisor",
    role: "JSS",
    text: "Yushfa demonstrated excellent design skills during her internship — her visual designs for marketing materials were creative and well-executed.",
  },
  {
    name: "Kashaf Rauf",
    role: "Teammate — Syncd Project, UET Lahore",
    text: "Working with Yushfa on Syncd has been great. She handles both frontend and backend confidently and always brings creative ideas to the table.",
  },
  {
    name: "Miss Fiza Khalid",
    role: "AI Supervisor, UET Lahore",
    text: "Yushfa's project proposal for Syncd was well thought out and demonstrated a solid understanding of AI integration in real-world applications.",
  },
];

// ---------- decorative floating icons ----------
function FloatingIcons() {
  const items = [
    { Icon: Code2, x: "8%", y: "20%", d: 0 },
    { Icon: Terminal, x: "85%", y: "15%", d: 0.5 },
    { Icon: Cpu, x: "12%", y: "75%", d: 1 },
    { Icon: GitBranch, x: "82%", y: "70%", d: 1.5 },
    { Icon: Sparkles, x: "92%", y: "40%", d: 0.8 },
    { Icon: Zap, x: "5%", y: "50%", d: 1.2 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map(({ Icon, x, y, d }, i) => (
        <motion.div
          key={i}
          className="absolute grid h-12 w-12 place-items-center rounded-2xl border-2 border-border bg-card"
          style={{ left: x, top: y, boxShadow: "0 4px 0 0 var(--color-border)" }}
          animate={{ y: [0, -14, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, delay: d, ease: "easeInOut" }}
        >
          <Icon className="h-5 w-5 text-primary" />
        </motion.div>
      ))}
    </div>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: {
  id: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        {eyebrow && <span className="chip mb-4">{eyebrow}</span>}
        <h2 className="text-4xl sm:text-5xl">{title}</h2>
        {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#skills", label: "Skills" },
    { href: "#journey", label: "Journey" },
    { href: "#projects", label: "Projects" },
    { href: "#design", label: "Design" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold">
          <img
            src="/yushfa.jpeg"
            alt="Yushfa Shafiq"
            className="h-9 w-9 rounded-full border-2 border-border object-cover"
            style={{ boxShadow: "0 3px 0 0 var(--color-primary-dark)" }}
          />
          yushfashafiq
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="rounded-xl px-3 py-2 text-sm font-bold text-muted-foreground transition hover:bg-secondary hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

       <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="https://drive.google.com/file/d/1BTeYPopOFZfBdySGbW6D-CFvmtkLL2Zs/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume"
            title="Download resume"
            className="group relative hidden sm:grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground transition hover:brightness-105"
            style={{ boxShadow: "0 3px 0 0 var(--color-primary-dark)" }}
          >
            <Download className="h-5 w-5" />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-display text-[9px] font-extrabold uppercase tracking-wide text-muted-foreground">
              Resume
            </span>
          </a>
          <a href="#contact" className="btn-duo hidden sm:inline-flex">Hire me</a>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-border bg-card text-foreground md:hidden"
            style={{ boxShadow: "0 3px 0 0 var(--color-border)" }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t-2 border-border bg-background md:hidden"
          >
            <div className="mx-auto grid max-w-6xl gap-1 px-5 py-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-bold text-muted-foreground transition hover:bg-secondary hover:text-foreground">
                  {l.label}
                </a>
              ))}
              <a 
              href="https://drive.google.com/file/d/1zqtJjXpzjakfhOiBiTaLT5hftVoVSra8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-duo-outline mt-2 justify-center"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-duo justify-center">
                Hire me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <FloatingIcons />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="chip"><Flame className="h-3.5 w-3.5" /> Level 25 • Full Stack</span>
            <span className="chip" style={{ background: "color-mix(in oklab, var(--color-accent) 12%, transparent)", color: "var(--color-accent)", borderColor: "color-mix(in oklab, var(--color-accent) 30%, transparent)" }}>
              <Sparkles className="h-3.5 w-3.5" /> Available for work
            </span>
          </div>
          <h1 className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
           Building full-stack apps people
            <span className="relative ml-2 inline-block text-primary">
              love to use
              <motion.span
                className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-primary/30"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }} style={{ originX: 0 }}
              />
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            CS student at UET Lahore and a full-stack developer. I build and ship web apps
            end-to-end — React on the front, Node and databases on the back. Backend Dev
            Intern at DevelopersHub.
          </p>

          {/* XP bar */}
          <div className="mt-8 max-w-md rounded-2xl border-2 border-border bg-card p-4" style={{ boxShadow: "0 4px 0 0 var(--color-border)" }}>
            <div className="mb-2 flex items-center justify-between text-sm font-bold">
              <span className="flex items-center gap-2"><Trophy className="h-4 w-4 text-warning" /> XP Progress</span>
              <span className="text-muted-foreground"><Counter to={25000} /> / 30,000</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-soft"
                initial={{ width: 0 }} animate={{ width: "83%" }}
                transition={{ delay: 0.4, duration: 1.4, ease: "easeOut" }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">5,000 XP to next level: Senior Full Stack</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-duo">
              View projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-duo-outline">Contact me</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mx-auto"
        >
          <div className="relative grid place-items-center rounded-[3rem] border-2 border-border bg-card p-10"
            style={{ boxShadow: "0 8px 0 0 var(--color-border)" }}>
            <div className="relative">
              <img
                src="/yushfa.jpeg"
                alt="Yushfa Shafiq"
                className="h-60 w-60 rounded-full border-4 border-border object-cover"
                style={{ boxShadow: "0 6px 0 0 var(--color-primary-dark)" }}
              />
              <div className="absolute -bottom-3 -right-3 rounded-2xl border-4 border-card bg-card">
                <Mascot size={96} />
              </div>
            </div>
            <motion.div
              className="absolute -right-4 top-6 flex items-center gap-2 rounded-2xl border-2 border-border bg-warning px-3 py-2 text-sm font-extrabold text-warning-foreground"
              style={{ boxShadow: "0 4px 0 0 oklch(0.7 0.18 75)" }}
              animate={{ y: [0, -6, 0] }} transition={{ duration: 2.4, repeat: Infinity }}
            >
              <Star className="h-4 w-4" /> +250 XP
            </motion.div>
            <motion.div
              className="absolute -left-4 bottom-10 flex items-center gap-2 rounded-2xl border-2 border-border bg-accent px-3 py-2 text-sm font-extrabold text-accent-foreground"
              style={{ boxShadow: "0 4px 0 0 oklch(0.6 0.16 230)" }}
              animate={{ y: [0, 6, 0] }} transition={{ duration: 2.8, repeat: Infinity }}
            >
              <Flame className="h-4 w-4" />  Always Learning
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = ["Frontend", "Backend", "Database", "Cloud", "Design"] as const;
  const icons: Record<string, typeof Code2> = { Frontend: Code2, Backend: Server, Database: Database, Cloud: Cloud, Design: Palette  };
  return (
    <Section id="skills" eyebrow="Skill tree" title="My skill tree" subtitle="Every skill here I've actually used to build and ship something — not just watch tutorials.">
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g) => {
          const Icon = icons[g];
          return (
            <motion.div key={g}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card-duo p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground" style={{ boxShadow: "0 3px 0 0 var(--color-primary-dark)" }}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-2xl">{g}</h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {skills.filter(s => s.group === g).map((s) => (
                  <li key={s.name}
                    className="flex items-center gap-3 rounded-2xl border-2 border-border bg-background p-3 transition hover:-translate-y-0.5"
                    style={{ boxShadow: "0 3px 0 0 var(--color-border)" }}>
                    <ProgressRing progress={s.xp} size={56} stroke={6} color={s.color} label={`${s.level}`} />
                    <div>
                      <div className="font-display text-base font-extrabold">{s.name}</div>
                      <div className="text-xs text-muted-foreground">Lv {s.level} • {s.xp}% mastered</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Journey() {
  return (
    <Section id="journey" eyebrow="The path" title="My developer journey" subtitle="From my first C++ program at UET to shipping full-stack apps. Here's how the levels unlocked.">
      <div className="relative mx-auto max-w-2xl">
        {journey.map((node, i) => {
          const left = i % 2 === 0;
          const Icon = node.icon;
          return (
            <motion.div
              key={node.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`relative my-3 flex ${left ? "justify-start" : "justify-end"}`}
            >
              <div className="flex w-1/2 items-center gap-4">
                {!left && <div className="flex-1 text-right">
                  <div className="font-display text-sm font-extrabold uppercase tracking-wider text-muted-foreground">Level {node.level}</div>
                  <div className="text-xl font-extrabold">{node.title}</div>
                </div>}
                <motion.button
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative grid h-20 w-20 place-items-center rounded-full border-4 ${node.current ? "border-warning" : "border-border"} ${node.done ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}
                  style={{ boxShadow: node.done ? "0 6px 0 0 var(--color-primary-dark)" : "0 6px 0 0 var(--color-border)" }}
                  aria-label={`Level ${node.level}: ${node.title}`}
                >
                  <Icon className="h-8 w-8" />
                  {node.current && (
                    <motion.span
                      className="absolute -top-3 right-0 rounded-full bg-warning px-2 py-0.5 text-xs font-extrabold text-warning-foreground"
                      animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.4, repeat: Infinity }}
                    >YOU</motion.span>
                  )}
                </motion.button>
                {left && <div className="flex-1">
                  <div className="font-display text-sm font-extrabold uppercase tracking-wider text-muted-foreground">Level {node.level}</div>
                  <div className="text-xl font-extrabold">{node.title}</div>
                </div>}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Achievements unlocked" title="Featured projects" subtitle="Side quests and main campaigns. Each one earned XP, lessons, and a few late nights.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, rotate: -0.4 }}
            className="card-duo group overflow-hidden p-0"
          >
            <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.gradient}`}>
              <div className="absolute inset-0 grid place-items-center">
               <p.icon className="h-16 w-16 text-white/90 drop-shadow-lg transition group-hover:scale-110" /> 
              </div>
              <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/30 px-2 py-1 text-xs font-bold text-white backdrop-blur">
                <CheckCircle2 className="h-3.5 w-3.5" /> {p.status}
              </div>
              <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-warning px-2 py-1 text-xs font-extrabold text-warning-foreground">
                <Star className="h-3.5 w-3.5" /> +{p.xp.toLocaleString()} XP
              </div>
            </div>
            <div className="p-6">
              <div className="mb-1 flex items-center gap-1 text-warning">
                {Array.from({ length: p.difficulty }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <h3 className="text-2xl">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">{t}</span>)}
              </div>
              <div className="mt-5 flex gap-2">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-duo flex-1">
                    Live <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noopener noreferrer" className={p.live ? "btn-duo-outline flex-1" : "btn-duo flex-1"}>
                  {p.live ? "Code" : "View on GitHub"} <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Battle log" title="Experience timeline">
      <div className="relative border-l-4 border-dashed border-border pl-8">
        {experience.map((e, i) => (
          <motion.div key={e.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[42px] grid h-10 w-10 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground" style={{ boxShadow: "0 3px 0 0 var(--color-primary-dark)" }}>
              <Trophy className="h-4 w-4" />
            </span>
            <div className="card-duo p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl">{e.role}</h3>
                <span className="text-sm font-bold text-muted-foreground">{e.period}</span>
              </div>
              <p className="text-sm font-bold text-primary">{e.company}</p>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Badges" title="Achievements" subtitle="Trophies collected along the way.">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div key={a.title}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 14, delay: i * 0.06 }}
            whileHover={{ y: -4, rotate: 2 }}
            className="card-duo flex flex-col items-center gap-2 p-5 text-center"
          >
            <div className="text-5xl">{a.icon}</div>
            <div className="font-display text-base font-extrabold">{a.title}</div>
            <div className="text-xs text-muted-foreground">{a.desc}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function GitHubStats() {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
  });

  useEffect(() => {
    fetch("https://api.github.com/users/Yushfa34")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          repos: typeof data.public_repos === "number" ? data.public_repos : 12,
          followers: typeof data.followers === "number" ? data.followers : 5,
        });
      })
      .catch(() => {
        // fallback to hardcoded if API fails
        setStats({ repos: 12, followers: 5 });
      });
  }, []);

  const statCards = [
    { label: "Contributions", value: 47, icon: Flame },
    { label: "Repositories", value: stats.repos, icon: GitBranch },
    { label: "Stars earned", value: 2, icon: Star },
    { label: "Followers", value: stats.followers, icon: Heart },
  ];

  // simple contribution heatmap
  const weeks = 26, days = 7;
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    return Math.floor((seed / 233280) * 5);
  });

  return (
    <Section id="github" eyebrow="Dashboard" title="GitHub statistics">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map(({ label, value, icon: Icon }, i) => (
          <motion.div key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="card-duo p-5"
          >
            <Icon className="mb-2 h-6 w-6 text-primary" />
            <div className="font-display text-3xl font-extrabold"><Counter to={value ?? 0} /></div>
            <div className="text-sm font-bold text-muted-foreground">{label}</div>
          </motion.div>
        ))}
      </div>

      <div className="card-duo mt-6 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl">Contribution heatmap</h3>
          <span className="text-xs font-bold text-muted-foreground">Last 6 months</span>
        </div>
        <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}>
          {Array.from({ length: weeks }).map((_, w) => (
            <div key={w} className="grid gap-[3px]">
              {Array.from({ length: days }).map((_, d) => {
                const v = cells[w * days + d];
                const opacity = 0.15 + v * 0.2;
                return (
                  <motion.div key={d}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (w * days + d) * 0.003 }}
                    className="aspect-square rounded-[3px]"
                    style={{ background: v === 0 ? "var(--color-secondary)" : `color-mix(in oklab, var(--color-primary) ${opacity * 100}%, transparent)` }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <Section id="testimonials" eyebrow="Kind Words" title="What people say">
      <div className="relative mx-auto max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.35 }}
            className="relative rounded-3xl border-2 border-border bg-card p-8"
            style={{ boxShadow: "0 6px 0 0 var(--color-border)" }}
          >
            <span className="absolute -bottom-4 left-10 h-6 w-6 rotate-45 border-b-2 border-r-2 border-border bg-card" />
            <blockquote className="text-lg font-medium leading-relaxed">"{testimonials[i].text}"</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display font-extrabold text-primary-foreground">
                {testimonials[i].name[0]}
              </span>
              <div>
                <div className="font-display font-extrabold">{testimonials[i].name}</div>
                <div className="text-xs text-muted-foreground">{testimonials[i].role}</div>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, k) => (
            <button key={k} onClick={() => setI(k)}
              className={`h-2.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2.5 bg-border"}`}
              aria-label={`Show testimonial ${k + 1}`} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          * Quotes are representative of feedback received during collaboration and internship work.
        </p>
      </div>
    </Section>
  );
}
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const MAX = 1000;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setError(false);

    try {
      const res = await fetch("https://formspree.io/f/mrewqvng", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        setError(false);
        setMessage("");
        confetti({
          particleCount: 140,
          spread: 90,
          origin: { y: 0.7 },
          colors: ["#58CC02", "#1CB0F6", "#FFC800", "#FF4B4B"],
        });
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="New quest"
      title="Ready to start a new quest?"
      subtitle="Tell me about your project. I'll get back within 24 hours."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ── Left: quick-connect panel ── */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="card-duo flex flex-col gap-5 p-6 sm:p-8"
        >
          <div>
            <span
              className="chip"
              style={{
                background: "color-mix(in oklab, var(--color-accent) 12%, transparent)",
                color: "var(--color-accent)",
                borderColor: "color-mix(in oklab, var(--color-accent) 30%, transparent)",
              }}
            >
              <Sparkles className="h-3.5 w-3.5" /> Available for work
            </span>
            <h3 className="mt-4 text-2xl">Let's connect</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Got a project, a role, or just want to say hi? Pick a channel —
              I read every message.
            </p>
          </div>

          <div className="grid gap-2.5">
            <ContactRow
              href="https://mail.google.com/mail/?view=cm&to=yushfashafiq@gmail.com"
              icon={Mail}
              label="Email"
              value="yushfashafiq@gmail.com"
            />
            <ContactRow
              href="https://www.linkedin.com/in/yushfa-shafiq-673ba9312"
              icon={Linkedin}
              label="LinkedIn"
              value="@yushfa-shafiq"
            />
            <ContactRow
              href="https://github.com/Yushfa34"
              icon={Github}
              label="GitHub"
              value="@Yushfa34"
            />
          </div>

          <div className="mt-auto grid grid-cols-2 gap-3">
            <div
              className="rounded-2xl border-2 border-border bg-background p-3"
              style={{ boxShadow: "0 3px 0 0 var(--color-border)" }}
            >
              <Clock className="mb-1 h-4 w-4 text-primary" />
              <div className="font-display text-sm font-extrabold">~24 hours</div>
              <div className="text-xs text-muted-foreground">Reply time</div>
            </div>
            <div
              className="rounded-2xl border-2 border-border bg-background p-3"
              style={{ boxShadow: "0 3px 0 0 var(--color-border)" }}
            >
              <MapPin className="mb-1 h-4 w-4 text-primary" />
              <div className="font-display text-sm font-extrabold">Lahore, PK</div>
              <div className="text-xs text-muted-foreground">Remote-friendly</div>
            </div>
          </div>
        </motion.aside>

        {/* ── Right: the form / success card ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="card-duo p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="grid min-h-[420px] place-items-center text-center"
              >
                <div>
                  <motion.div
                    initial={{ rotate: -10, scale: 0.5 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground"
                    style={{ boxShadow: "0 6px 0 0 var(--color-primary-dark)" }}
                  >
                    <CheckCircle2 className="h-10 w-10" />
                  </motion.div>
                  <h3 className="mt-5 text-3xl">Quest received! 🎉</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thanks for reaching out — I'll get back to you within 24 hours.
                  </p>
                  <span className="chip mt-4 inline-flex">
                    <Zap className="h-3.5 w-3.5" /> +500 XP for starting a quest
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                className="grid gap-4"
              >
                <div className="mb-1 flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="font-display text-sm font-extrabold">
                    Send a message
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" name="name" placeholder="Jane Doe" required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                  />
                </div>

                <Field
                  label="Project type"
                  name="type"
                  placeholder="Web app, API, design system…"
                />

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block font-display text-sm font-extrabold"
                    >
                      Message
                    </label>
                    <span
                      className={`text-xs font-bold ${
                        message.length > MAX * 0.9
                          ? "text-destructive"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.length}/{MAX}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    name="message"
                    maxLength={MAX}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the quest…"
                    className="w-full resize-y rounded-2xl border-2 border-border bg-background px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20"
                  />
                </div>

                {error && (
                  <p className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 px-4 py-3 text-sm font-bold text-destructive">
                    Something went wrong. Please try again or email me directly at
                    yushfashafiq@gmail.com
                  </p>
                )}

                <motion.button
                  whileTap={{ scale: 0.97, y: 4 }}
                  className="btn-duo mt-1 justify-self-start disabled:cursor-not-allowed disabled:opacity-70"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}

function ContactRow({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-2xl border-2 border-border bg-background p-3 transition hover:-translate-y-0.5 hover:border-primary"
      style={{ boxShadow: "0 3px 0 0 var(--color-border)" }}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="font-display text-sm font-extrabold">{label}</div>
        <div className="truncate text-xs text-muted-foreground">{value}</div>
      </div>
      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
    </a>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-display text-sm font-extrabold"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20"
      />
    </div>
  );
}
function FooterIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
      className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-border bg-card text-foreground transition hover:-translate-y-0.5 hover:text-primary"
      style={{ boxShadow: "0 3px 0 0 var(--color-border)" }}>
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-extrabold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground" style={{ boxShadow: "0 3px 0 0 var(--color-primary-dark)" }}>
                <Code2 className="h-5 w-5" />
              </span>
              yushfashafiq
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Full Stack Developer leveling up skills and Graphic designer aiming to design beautiful and functional user experiences.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-display font-extrabold">Progress</h4>
            <div className="rounded-2xl border-2 border-border bg-card p-4" style={{ boxShadow: "0 3px 0 0 var(--color-border)" }}>
              <div className="text-sm font-bold">Current level</div>
              <div className="font-display text-3xl font-extrabold text-primary">Level 25</div>
              <div className="mt-2 text-xs text-muted-foreground">Next goal: Senior Full Stack Engineer</div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[83%] bg-primary" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-display font-extrabold">Connect</h4>
            <div className="flex flex-wrap gap-2">
             <FooterIcon href="https://github.com/Yushfa34" label="GitHub">
  <Github className="h-5 w-5" />
</FooterIcon>
<FooterIcon href="https://www.linkedin.com/in/yushfa-shafiq-673ba9312" label="LinkedIn">
  <Linkedin className="h-5 w-5" />
</FooterIcon>
<FooterIcon href="https://mail.google.com/mail/?view=cm&to=yushfashafiq@gmail.com" label="Email">
  <Mail className="h-5 w-5" />
</FooterIcon>
<a href="https://drive.google.com/file/d/1zqtJjXpzjakfhOiBiTaLT5hftVoVSra8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-duo-outline !py-2 !px-3 !text-xs">
  <Download className="h-4 w-4" /> Resume
</a>
              
            </div>
          </div>
        </div>
        <div className="mt-10 border-t-2 border-border pt-6 text-center text-xs font-bold text-muted-foreground">
           {new Date().getFullYear()} yushfashafiq
        </div>
      </div>
    </footer>
  );
}



function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1.5 w-full origin-left bg-gradient-to-r from-primary via-primary-soft to-accent"
      style={{ scaleX: x }}
    />
  );
}

function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Skills />
      <Journey />
      <Projects />
      <DesignWork />
      <Experience />
      <Achievements />
      <GitHubStats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
const collections = [
  {
    id: "pals",
    name: "PALS UET — Core Body 2026",
    blurb: "A cohesive reveal series announcing the chapter's core body — one visual system across directors, co-directors and leads.",
    tag: "Reveal Series",
    cover: "/designs/pals-graphics.jpg",
    images: [
      { src: "/designs/pals-graphics.jpg", title: "Graphics Director — Reveal Card" },
      { src: "/designs/pals-directors.jpg", title: "Directors Series" },
      { src: "/designs/pals-codirectors.jpg", title: "Co-Directors Series" },
      { src: "/designs/pals-leads.jpg", title: "Leads Series" },
    ],
  },
  {
    id: "tech4d",
    name: "Tech4D — Internship Campaign",
    blurb: "Two art directions for the same campaign: a bold, urgent poster and a calm editorial layout.",
    tag: "Campaign",
    cover: "/designs/tech4d-finalcall.png",
    images: [
      { src: "/designs/tech4d-finalcall.png", title: "Final Call — Poster" },
      { src: "/designs/tech4d-tracks.png", title: "Internship Tracks — Editorial" },
    ],
  },
];

function DesignWork() {
  const [openSet, setOpenSet] = useState<number | null>(null);
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <Section
      id="design"
      eyebrow="Creative quests"
      title="Design work"
      subtitle="Beyond code — I lead the design team for university societies, building full campaigns and reveal series from scratch in Figma & Canva."
    >
      {/* Collection cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {collections.map((c, i) => (
          <motion.button
            key={c.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            onClick={() => setOpenSet(i)}
            className="card-duo group overflow-hidden p-0 text-left"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={c.cover}
                alt={c.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute right-3 top-3 rounded-full bg-warning px-2.5 py-1 text-xs font-extrabold text-warning-foreground">
                {c.images.length} designs
              </span>
              <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
                {c.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
              <span className="btn-duo mt-4 inline-flex">
                View collection <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Collection panel */}
      <AnimatePresence>
        {openSet !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpenSet(null)}
            className="fixed inset-0 z-[55] overflow-y-auto bg-black/85 p-4 backdrop-blur sm:p-8"
          >
            <button
              onClick={() => setOpenSet(null)} aria-label="Close"
              className="fixed right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-2xl border-2 border-white/30 bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto max-w-5xl"
            >
              <h3 className="font-display text-3xl font-extrabold text-white">
                {collections[openSet].name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-white/70">
                {collections[openSet].blurb}
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {collections[openSet].images.map((img) => (
                  <button
                    key={img.src}
                    onClick={() => setZoom(img.src)}
                    className="group overflow-hidden rounded-2xl border-2 border-white/20 text-left"
                  >
                    <img
                      src={img.src} alt={img.title} loading="lazy"
                      className="w-full transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="bg-white/10 px-4 py-3 font-display text-sm font-extrabold text-white">
                      {img.title}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen zoom */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setZoom(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/95 p-4"
          >
            <motion.img
              initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }}
              src={zoom} alt="" onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] max-w-full rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}