import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rajib Sunar" },
      {
        name: "description",
        content:
          "Selected web projects by Rajib Sunar: a JavaScript calculator, hotel website, HR portfolio and school admission page.",
      },
      { property: "og:title", content: "Projects — Rajib Sunar" },
      { property: "og:description", content: "Calculator, hotel website, HR portfolio and school admission projects." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Calculator Project",
    overview: "A functional calculator with basic arithmetic operations using HTML, CSS and JavaScript.",
    features: ["Basic operations (+, −, ×, ÷)", "Clear & delete buttons", "Responsive layout for all devices"],
  },
  {
    title: "Hotel Website Project",
    overview: "Hotel website with room details, booking flow and contact information.",
    features: ["Image galleries", "Booking form with validation", "Mobile-friendly navigation"],
  },
  {
    title: "Portfolio for Pokhara HR Manager",
    overview: "Professional HR portfolio showing bio, skills and projects.",
    features: ["Clean design & resume download", "Projects & testimonials", "Responsive contact section"],
  },
  {
    title: "School Admission Graphic Design",
    overview: "A graphic-heavy page promoting school admissions.",
    features: ["Admission banners & CTAs", "Colorful course cards", "Photo gallery of school events"],
  },
];

function Projects() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Portfolio"
        title="My Projects"
        subtitle="A look at the websites and interfaces I've designed and built so far."
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.title} className="surface-card p-7">
            <span className="text-sm font-bold text-primary">0{i + 1}</span>
            <h2 className="mt-2 text-xl font-bold">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.overview}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
