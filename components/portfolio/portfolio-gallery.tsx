"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CaseCategory, categoryLabels, portfolioCases } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const ModelViewer = dynamic(
  () => import("@/components/portfolio/model-viewer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-muted">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    ),
  },
);

const categories: (CaseCategory | "all")[] = [
  "all",
  "crown-bridge",
  "implant-bar",
  "smile-design",
  "surgical-guide",
];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<CaseCategory | "all">(
    "all",
  );
  const [selectedId, setSelectedId] = useState(portfolioCases[0].id);

  const filtered =
    activeCategory === "all"
      ? portfolioCases
      : portfolioCases.filter((c) => c.category === activeCategory);

  const selected =
    portfolioCases.find((c) => c.id === selectedId) ?? filtered[0];

  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Interactive Portfolio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Case Gallery & Design Previews
          </h2>
          <p className="mt-4 text-muted-foreground">
            Filter by specialty, compare raw scans against final ExoCad designs,
            and explore interactive 3D previews directly in your browser.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveCategory(cat);
                const first =
                  cat === "all"
                    ? portfolioCases[0]
                    : portfolioCases.find((c) => c.category === cat);
                if (first) setSelectedId(first.id);
              }}
            >
              {cat === "all" ? "All Cases" : categoryLabels[cat]}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          {/* Case list */}
          <div className="space-y-3 lg:col-span-2">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={cn(
                  "w-full rounded-xl border p-4 text-left transition-all hover:shadow-md",
                  selected?.id === item.id
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "bg-card hover:border-primary/30",
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <Badge variant="outline" className="shrink-0 text-xs">
                    {categoryLabels[item.category]}
                  </Badge>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Preview panel */}
          {selected && (
            <div className="lg:col-span-3">
              <Card className="overflow-hidden">
                <CardHeader className="border-b bg-muted/30">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <CardTitle>{selected.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {selected.description}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant={"default"}>
                        3D Viewer
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <ModelViewer src={selected.htmlUrl} title={selected.title} />
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-muted/50 p-3">
                      <div className="text-xs text-muted-foreground">
                        Material
                      </div>
                      <div className="mt-0.5 text-sm font-medium">
                        {selected.material}
                      </div>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" /> Turnaround
                      </div>
                      <div className="mt-0.5 text-sm font-medium">
                        {selected.turnaround}
                      </div>
                    </div>
                    <div className="col-span-2 rounded-lg bg-muted/50 p-3 sm:col-span-1">
                      <div className="text-xs text-muted-foreground">
                        Category
                      </div>
                      <div className="mt-0.5 text-sm font-medium">
                        {categoryLabels[selected.category]}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
