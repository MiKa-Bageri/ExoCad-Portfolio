import type { LucideIcon } from "lucide-react";
import {
  Box,
  Cpu,
  Layers,
  Smile,
  Stethoscope,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { modules, outputFormats } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Smile: Smile,
  Denture: Stethoscope,
  Model: Box,
  Implant: Wrench,
  Bar: Layers,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="border-y bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Tech Stack & Modules
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ExoCad Modules & Export Formats
          </h2>
          <p className="mt-4 text-muted-foreground">
            Full-suite ExoCad workflow with production-ready output for milling, printing,
            and lab communication.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => {
            const Icon = iconMap[mod.icon] ?? Cpu;
            return (
              <Card key={mod.name} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{mod.name}</CardTitle>
                  <CardDescription>{mod.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}

          <Card className="border-primary/20 bg-primary/5 sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Cpu className="h-5 w-5" />
              </div>
              <CardTitle className="text-base">Output Formats</CardTitle>
              <CardDescription>Production-ready files for your workflow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {outputFormats.map((format) => (
                  <Badge key={format} variant="secondary" className="font-mono text-xs">
                    .{format}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 rounded-xl border bg-card p-6 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">
            Compatible with major scanners and lab management systems · Supports ExoCad DentalCAD
            3.x with Smile Creator, Implant, and Bar modules activated
          </p>
        </div>
      </div>
    </section>
  );
}
