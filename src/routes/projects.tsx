import { createFileRoute } from "@tanstack/react-router";
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
