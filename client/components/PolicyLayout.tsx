import { useEffect, useState } from "react";

export type PolicySection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

type PolicyLayoutProps = {
  eyebrow: string;
  title: string;
  summary: string;
  sections: PolicySection[];
};

export function PolicyLayout({ eyebrow, title, summary, sections }: PolicyLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observers = sections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;
      return new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActiveSection(section.id),
        { rootMargin: "-24% 0px -62% 0px" },
      ).observe(element);
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, [sections]);

  return (
    <section className="bg-[#FAF8F5] py-10 sm:py-16">
      <div className="container">
        <header className="mx-auto max-w-3xl border-b border-brand-200 pb-9 text-center sm:pb-12">
          <p className="text-[11px] font-bold uppercase tracking-[.24em] text-primary">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-brand-950 sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{summary}</p>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 py-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-14">
          <aside className="lg:sticky lg:top-28 lg:h-fit" aria-label={`${title} sections`}>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[.2em] text-brand-500">On this page</p>
            <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible" aria-label={`${title} navigation`}>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={activeSection === section.id ? "location" : undefined}
                  className={`shrink-0 rounded-lg px-3 py-2 text-xs font-semibold transition ${activeSection === section.id ? "bg-brand-950 text-white shadow-sm" : "text-brand-700 hover:bg-brand-100 hover:text-primary"}`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0 rounded-[1.75rem] border border-brand-100 bg-white px-6 py-8 shadow-soft sm:px-10 sm:py-11">
            <div className="mb-9 rounded-2xl border border-gold-200 bg-gold-50/70 px-5 py-4 text-sm leading-6 text-brand-800">
              This page is provided for general information. It should be reviewed against Freshira’s final operating model and applicable law before formal publication.
            </div>
            <div className="space-y-12 text-[15px] leading-8 text-brand-800">
              {sections.map((section) => (
                <section id={section.id} key={section.id} className="scroll-mt-32">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-950 sm:text-[1.7rem]">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets && (
                      <ul className="space-y-2.5 border-l-2 border-gold-300 pl-5 text-brand-700">
                        {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
