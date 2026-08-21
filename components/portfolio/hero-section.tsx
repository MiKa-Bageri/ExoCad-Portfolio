import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/portfolio";

const statItems = [
  {
    value: `${stats.successfulCases.toLocaleString()}+`,
    label: "Successful Cases",
    icon: TrendingUp,
  },
  {
    value: stats.avgTurnaround,
    label: "Avg. Turnaround",
    icon: Clock,
  },
  {
    value: `${stats.marginalFitRate}%`,
    label: "Marginal Fit Rate",
    icon: ShieldCheck,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            ExoCad Certified · {stats.yearsExperience}+ Years Experience
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Precision Dental CAD Design with{" "}
            <span className="bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
              ExoCad
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Expert prosthetic and surgical design for crowns, bridges, implants, smile makeovers,
            and guided surgery — delivered with clinical-grade accuracy and fast turnaround.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contact">
                Submit File for Test Design
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {statItems.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="text-3xl font-bold tracking-tight">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
