import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Youtube, Linkedin } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rajib Sunar — Let's Work Together" },
      {
        name: "description",
        content:
          "Get in touch with Rajib Sunar by phone at +977-9817156473 or email rajibsunar444@gmail.com for web design and frontend work.",
      },
      { property: "og:title", content: "Contact Rajib Sunar" },
      { property: "og:description", content: "Call or email me for web design and frontend development work." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Say hello"
        title="Contact Me"
        subtitle="Have questions or ideas? I'm just a click away."
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-3">
        <a href="tel:+9779817156473" className="surface-card p-6 transition-colors hover:border-primary">
          <Phone className="size-6 text-primary" />
          <p className="mt-4 font-bold">Call Me</p>
          <p className="mt-1 text-sm text-muted-foreground">+977-9817156473</p>
        </a>
        <a href="mailto:rajibsunar444@gmail.com" className="surface-card p-6 transition-colors hover:border-primary">
          <Mail className="size-6 text-primary" />
          <p className="mt-4 font-bold">Email Me</p>
          <p className="mt-1 text-sm text-muted-foreground">rajibsunar444@gmail.com</p>
        </a>
        <div className="surface-card p-6">
          <MapPin className="size-6 text-primary" />
          <p className="mt-4 font-bold">Location</p>
          <p className="mt-1 text-sm text-muted-foreground">Pokhara, Nepal</p>
        </div>
      </section>
    </SiteLayout>
  );
}
