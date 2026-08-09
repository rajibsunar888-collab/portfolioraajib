import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import photo from "@/assets/rajib.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajib Sunar — Frontend Developer & Content Creator" },
      {
        name: "description",
        content:
          "Portfolio of Rajib Sunar, a frontend web developer and content creator building responsive, modern websites.",
      },
      { property: "og:title", content: "Rajib Sunar — Frontend Developer" },
      {
        property: "og:description",
        content: "Frontend developer and content creator crafting responsive, modern websites.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-lg font-semibold text-muted-foreground">Hello, It's Me</p>
          <h1 className="mt-2 text-5xl font-extrabold sm:text-6xl">
            <span className="text-gradient">Rajib Sunar</span>
          </h1>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">And I'm a Frontend Developer</h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            I'm a web developer and content creator with over a year of hands-on experience. My
            expertise is website design, frontend development and much more.
          </p>

          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <span
                key={i}
                className="flex size-10 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              More About Me
            </Link>
            <Link
              to="/projects"
              className="rounded-full border border-border px-6 py-3 text-sm font-bold transition-colors hover:bg-secondary"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="absolute inset-0 rounded-full blur-3xl [background:var(--gradient-accent)] opacity-30" />
          <img
            src={photo.url}
            alt="Portrait of Rajib Sunar"
            className="relative size-72 rounded-full object-cover ring-4 ring-primary/50 shadow-[var(--shadow-glow)] sm:size-96"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-3">
        {[
          { k: "1+", v: "Years of experience" },
          { k: "10+", v: "Projects delivered" },
          { k: "7", v: "Core skills" },
        ].map((s) => (
          <div key={s.k} className="surface-card p-6">
            <p className="text-3xl font-extrabold text-primary">{s.k}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
