import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import photo from "@/assets/rajib.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rajib Sunar — My Story" },
      {
        name: "description",
        content:
          "Learn about Rajib Sunar: a web developer and content creator from Nepal driven by curiosity, learning and sharing knowledge.",
      },
      { property: "og:title", content: "About Rajib Sunar" },
      { property: "og:description", content: "The story, values and journey behind my work as a developer and creator." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Who I am"
        title="About Me"
        subtitle="My dedicated line — a journey powered by curiosity and a desire to do something meaningful."
      />
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:grid-cols-[320px_1fr]">
        <img
          src={photo.url}
          alt="Rajib Sunar smiling in a black suit"
          className="mx-auto w-72 rounded-full object-cover ring-4 ring-primary/40 shadow-[var(--shadow-glow)]"
        />
        <div className="space-y-5 text-muted-foreground">
          <p>
            My journey began with a deep curiosity and a desire to do something meaningful. Over the
            years, I've learned, grown, and kept pushing myself to explore new ideas, share what I
            know, and help others along the way.
          </p>
          <p>
            I've always believed that knowledge becomes more powerful when it's shared. That belief
            has shaped everything I do — from creating content to connecting with people who are just
            as passionate about learning and growth.
          </p>
          <p>
            This is more than just a personal path — it's a purpose. Every step I take is guided by a
            simple goal: to inspire, to teach, and to keep moving forward with heart and honesty.
          </p>
          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            {[
              { k: "Based in", v: "Nepal" },
              { k: "Focus", v: "Frontend Development" },
              { k: "Also", v: "Content Creation" },
            ].map((item) => (
              <div key={item.k} className="surface-card p-4">
                <p className="text-xs uppercase tracking-widest text-primary">{item.k}</p>
                <p className="mt-1 font-semibold text-foreground">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
