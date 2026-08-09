import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Rajib Sunar" },
      {
        name: "description",
        content:
          "Technical skills of Rajib Sunar: HTML5, CSS3, JavaScript ES6+, responsive design, Git, Python basics, SEO and video editing.",
      },
      { property: "og:title", content: "Skills — Rajib Sunar" },
      { property: "og:description", content: "HTML, CSS, JavaScript, responsive design, Git, Python and SEO." },
    ],
  }),
  component: Skills,
});

const skills = [
  { name: "HTML5 & CSS3", level: 90, desc: "Responsive, semantic and accessible modern layouts with clean code." },
  { name: "JavaScript (ES6+)", level: 80, desc: "Interactive experiences using vanilla JS and modern ES6+ features." },
  { name: "Responsive Web Design", level: 88, desc: "Designs that adapt seamlessly from mobile phones to desktops." },
  { name: "Git & GitHub", level: 75, desc: "Version control workflows and collaboration with Git and GitHub." },
  { name: "Python Basics", level: 60, desc: "Core concepts for scripting, automation and data manipulation." },
  { name: "Content & Video Editing", level: 85, desc: "Producing and editing technical tutorials for my audience." },
  { name: "SEO Basics", level: 70, desc: "Optimizing content for better rankings and site visibility." },
];

function Skills() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="What I do"
        title="My Technical Skills"
        subtitle="The tools and techniques I use every day to design and build fast, responsive websites."
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <article key={s.name} className="surface-card p-6">
            <h2 className="text-lg font-bold">{s.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full [background:var(--gradient-accent)]" style={{ width: `${s.level}%` }} />
            </div>
            <p className="mt-2 text-xs font-semibold text-primary">{s.level}%</p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
