import { ArrowRight, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { slaItems, workflowSteps } from "@/data/portfolio";

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Workflow & SLA
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From Scan to Production File
          </h2>
          <p className="mt-4 text-muted-foreground">
            A streamlined 4-step process with transparent turnaround times for every case type.
          </p>
        </div>

        {/* Workflow steps */}
        <div className="relative mt-14">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-px" />
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:text-right" style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <Card className={`${index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"} max-w-md`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          {step.step}
                        </span>
                        <CardTitle className="text-base">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
                        <Timer className="h-3 w-3" />
                        {step.duration}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block" />

                <div className="hidden flex-1 md:block" style={{ order: index % 2 === 0 ? 2 : 1 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile workflow (simpler) */}
        <div className="mt-8 space-y-4 md:hidden">
          {workflowSteps.map((step) => (
            <Card key={step.step}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.step}
                  </span>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <div className="mt-2 flex items-center gap-1 text-xs font-medium text-primary">
                  <Timer className="h-3 w-3" />
                  {step.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SLA table */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-xl font-semibold">Standard Delivery Times</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {slaItems.map((item) => (
              <div
                key={item.type}
                className="flex items-center justify-between rounded-lg border bg-card px-4 py-3 shadow-sm"
              >
                <span className="text-sm font-medium">{item.type}</span>
                <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                  {item.time}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
