import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Download, FileText, Eye } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import resume from "@/assets/resume.pdf.asset.json";
import photo from "@/assets/rajib.png.asset.json";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume / CV — Rajib Sunar" },
      {
        name: "description",
        content:
          "Download the CV of Rajib Sunar, frontend web developer and content creator from Pokhara, Nepal.",
      },
      { property: "og:title", content: "Resume / CV — Rajib Sunar" },
      { property: "og:description", content: "Download my CV as a PDF — skills, projects and contact details." },
    ],
  }),
  component: Resume,
});

const STORAGE_KEY = "resume-download-count";

function Resume() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Number(localStorage.getItem(STORAGE_KEY) ?? 0));
  }, []);

  const trackDownload = () => {
    const next = Number(localStorage.getItem(STORAGE_KEY) ?? 0) + 1;
    localStorage.setItem(STORAGE_KEY, String(next));
    localStorage.setItem("resume-download-last", new Date().toISOString());
    setCount(next);
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Resume"
        title="My CV"
        subtitle="A one-page summary of my profile, technical skills and selected projects."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1fr_320px]">
        <div className="surface-card p-8">
          <FileText className="size-8 text-primary" />
          <h2 className="mt-4 text-2xl font-bold">Rajib Sunar — Frontend Developer CV</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            PDF · 1 page · updated {new Date().getFullYear()}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={resume.url}
              download="Rajib-Sunar-CV.pdf"
              onClick={trackDownload}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              <Download className="size-4" /> Download CV
            </a>
            <a
              href={resume.url}
              target="_blank"
              rel="noreferrer"
              onClick={trackDownload}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold transition-colors hover:bg-secondary"
            >
              <Eye className="size-4" /> View in browser
            </a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            Downloaded {count} {count === 1 ? "time" : "times"} from this device.
          </p>
        </div>

        <img
          src={photo.url}
          alt="Portrait of Rajib Sunar"
          className="mx-auto w-64 rounded-full object-cover ring-4 ring-primary/40 shadow-[var(--shadow-glow)]"
        />
      </section>
    </SiteLayout>
  );
}
