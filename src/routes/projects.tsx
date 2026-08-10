import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  ShoppingCart,
  Landmark,
  CalendarCheck,
  Wallet,
  TrendingUp,
  MapPin,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rajib Sunar" },
      {
        name: "description",
        content:
          "Projects by Rajib Sunar: school management system, e-commerce website, banking system, life manager, expense tracker, stock portfolio and geolocation tracker.",
      },
      { property: "og:title", content: "Projects — Rajib Sunar" },
      { property: "og:description", content: "School management, e-commerce, banking, life manager, expense, stock and geolocation projects." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "School Management System",
    overview: "A complete system to manage students, teachers, classes and attendance in one dashboard.",
    features: ["Student & teacher records", "Attendance and exam results", "Fee tracking with reports"],
  },
  {
    title: "E-Commerce Website",
    overview: "An online store with product catalog, cart and checkout flow.",
    features: ["Product listing & search", "Cart and order summary", "Responsive product pages"],
  },
  {
    title: "Banking System",
    overview: "A banking app simulating accounts, transfers and transaction history.",
    features: ["Account creation & balance view", "Deposits, withdrawals, transfers", "Transaction statements"],
  },
  {
    title: "Life-Manager Software",
    overview: "An all-in-one planner for tasks, habits, goals and daily routines.",
    features: ["Task & habit tracking", "Goal planner with progress", "Daily/weekly overview"],
  },
  {
    title: "Personal Expense Tracker",
    overview: "Track income and spending with clear category-wise insights.",
    features: ["Add income & expenses", "Category-wise charts", "Monthly budget alerts"],
  },
  {
    title: "Stock Portfolio Tracker",
    overview: "Monitor holdings, invested value and profit/loss in real time.",
    features: ["Holdings with live prices", "Profit/loss calculation", "Portfolio allocation charts"],
  },
  {
    title: "Geolocation Tracker",
    overview: "Track and visualize live location data on an interactive map.",
    features: ["Live location on map", "Route history playback", "Distance & speed stats"],
  },
];
const icons = [GraduationCap, ShoppingCart, Landmark, CalendarCheck, Wallet, TrendingUp, MapPin];

function Projects() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Portfolio"
        title="My Projects"
        subtitle="A look at the websites and interfaces I've designed and built so far."
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2">
        {projects.map((p, i) => {
          const Icon = icons[i % icons.length];
          return (
            <article key={p.title} className="surface-card overflow-hidden">
              <div className="relative flex h-28 items-center justify-center [background:var(--gradient-hero)]">
                <div className="absolute inset-0 opacity-30 [background:var(--gradient-accent)]" />
                <div className="absolute -right-6 -top-6 size-28 rounded-full bg-primary/20 blur-2xl" />
                <div className="relative flex size-14 items-center justify-center rounded-2xl border border-primary/40 bg-background/60 text-primary shadow-[var(--shadow-glow)] backdrop-blur">
                  <Icon className="size-7" />
                </div>
                <span className="absolute left-4 top-3 text-xs font-bold tracking-widest text-primary">
                  0{i + 1}
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-xl font-bold">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.overview}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>
    </SiteLayout>
  );
}

