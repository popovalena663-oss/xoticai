"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-bold tracking-tight">
            xoticai<span className="text-purple-500">.</span>
          </a>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              Обо мне
            </a>
            <a href="#projects" className="transition hover:text-white">
              Проекты
            </a>
            <a href="#skills" className="transition hover:text-white">
              Навыки
            </a>
            <a href="#contact" className="transition hover:text-white">
              Контакты
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm md:hidden"
          >
            Меню
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-white/70">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                Обо мне
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Проекты
              </a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Навыки
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Контакты
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-6xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            AI • Development • Design
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl">
            Создаю цифровые
            <br />
            <span className="text-white/40">продукты с AI.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
            Привет! Я xoticai. Разрабатываю современные сайты,
            приложения и AI-проекты, превращая идеи в работающие продукты.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/80"
            >
              Мои проекты
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-white/50"
            >
              Связаться
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-purple-400">
            01 — Обо мне
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Идеи превращаются
              <br />
              <span className="text-white/40">в реальность.</span>
            </h2>

            <div className="space-y-5 text-lg leading-8 text-white/60">
              <p>
                Мне нравится создавать вещи, которые выглядят современно,
                работают быстро и действительно решают задачи.
              </p>
              <p>
                Использую веб-технологии, автоматизацию и искусственный
                интеллект, чтобы создавать новые цифровые продукты.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-purple-400">
            02 — Проекты
          </p>

          <h2 className="mb-12 text-4xl font-bold sm:text-5xl">
            Избранные работы
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Project
              number="01"
              title="AI Assistant"
              description="Интеллектуальный помощник для работы с информацией и задачами."
              tags={["AI", "Next.js", "TypeScript"]}
            />

            <Project
              number="02"
              title="Personal Website"
              description="Минималистичный персональный сайт с современным интерфейсом."
              tags={["Web", "React", "Design"]}
            />

            <Project
              number="03"
              title="Automation"
              description="Автоматизация рутинных процессов с использованием AI."
              tags={["Automation", "AI", "API"]}
            />

            <Project
              number="04"
              title="Coming Soon"
              description="Новый проект уже находится в разработке."
              tags={["Soon"]}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-purple-400">
            03 — Навыки
          </p>

          <h2 className="mb-12 text-4xl font-bold sm:text-5xl">
            Технологии
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "AI",
              "API",
              "Git",
              "Vercel",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-white/70 transition hover:border-purple-500/50 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-purple-400">
            04 — Контакты
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-6xl">
            Есть идея?
            <br />
            <span className="text-white/40">Давайте создадим её.</span>
          </h2>

          <a
            href="mailto:hello@example.com"
            className="mt-10 inline-block rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:bg-white/80"
          >
            Написать мне →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-white/40 sm:flex-row">
          <p>© 2026 xoticai. Все права защищены.</p>
          <p>Создано с помощью Next.js + AI</p>
        </div>
      </footer>
    </main>
  );
}

function Project({
  number,
  title,
  description,
  tags,
}: {
  number: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.05]">
      <div className="mb-12 flex items-center justify-between">
        <span className="text-sm text-white/30">{number}</span>
        <span className="text-2xl text-white/30 transition group-hover:text-purple-400">
          ↗
        </span>
      </div>

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-3 min-h-14 leading-7 text-white/50">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
