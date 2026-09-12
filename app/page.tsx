import {
  awards,
  beyond,
  education,
  experience,
  highlights,
  profile,
  projects,
  research,
  skills,
  type Project,
} from "./content";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section id={title.toLowerCase().replace(/\s+/g, "-")} className="mt-16 scroll-mt-8">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">{title}</h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5 text-sm leading-6">
      {items.map((h) => (
        <li key={h} className="flex gap-2">
          <span className="text-muted">–</span>
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const card = (
    <div className="rounded-xl border border-line p-5 transition-colors hover:border-foreground/30">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium">{p.title}</h3>
        {p.href ? (
          <span className="text-muted">↗</span>
        ) : (
          p.period && <span className="shrink-0 font-mono text-xs text-muted">{p.period}</span>
        )}
      </div>
      <p className="mt-2 text-sm leading-6 text-muted">{p.description}</p>
      <Bullets items={p.highlights} />
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full bg-chip px-2.5 py-0.5 font-mono text-xs">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
  return p.href ? (
    <a href={p.href} target="_blank" rel="noopener noreferrer" className="block">
      {card}
    </a>
  ) : (
    card
  );
}

function CardList({ items }: { items: Project[] }) {
  return (
    <ul className="grid gap-4">
      {items.map((p) => (
        <li key={p.title}>
          <ProjectCard p={p} />
        </li>
      ))}
    </ul>
  );
}

function TitledList({ items }: { items: { title: string; detail: string }[] }) {
  return (
    <ul className="space-y-5">
      {items.map((e) => (
        <li key={e.title}>
          <p className="font-medium">{e.title}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{e.detail}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-20 sm:py-28">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
        <a
          href={profile.github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link mt-3 inline-block font-mono text-sm"
        >
          {profile.github.label} ↗
        </a>
      </header>

      <ul className="mt-10 space-y-2.5">
        {highlights.map((h) => (
          <li key={h.text}>
            <a href={`#${h.section}`} className="group flex gap-3 leading-6">
              <span className="text-muted transition-colors group-hover:text-foreground">→</span>
              <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-line">
                {h.text}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <Section title="About">
        <div className="space-y-4 leading-7">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <ul className="space-y-8">
          {experience.map((e) => (
            <li key={e.role + e.org}>
              <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-4">
                <div>
                  <p className="font-medium">{e.role}</p>
                  <p className="text-sm text-muted">{e.org}</p>
                </div>
                <p className="font-mono text-xs text-muted sm:pt-1">{e.period}</p>
              </div>
              <Bullets items={e.highlights} />
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Research">
        <CardList items={research} />
      </Section>

      <Section title="Projects">
        <CardList items={projects} />
      </Section>

      <Section title="Awards">
        <TitledList items={awards.map((a) => ({ title: a.title, detail: a.org }))} />
      </Section>

      <Section title="Education">
        <TitledList items={education} />
      </Section>

      <Section title="Skills">
        <div className="space-y-5">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="grid gap-2 sm:grid-cols-[6rem_1fr] sm:gap-4">
              <p className="pt-1 text-sm text-muted">{group}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-full border border-line px-3 py-1 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Beyond Code">
        <TitledList items={beyond} />
      </Section>

      <footer className="mt-24 flex flex-wrap gap-x-2 gap-y-1 border-t border-line pt-6 text-sm text-muted">
        <a href={`mailto:${profile.email}`} className="link">
          {profile.email}
        </a>
        <span>·</span>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="link">
          Resume
        </a>
        <span>·</span>
        <span>{profile.location}</span>
      </footer>
    </main>
  );
}
