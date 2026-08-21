import Link from "next/link";
import { Sparkles } from "lucide-react";
import { contactInfo } from "@/data/portfolio";

export default function PortfolioFooter() {
  return (
    <footer className="border-t bg-card py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold">{contactInfo.name}</div>
              <div className="text-xs text-muted-foreground">{contactInfo.role}</div>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link href="#portfolio" className="hover:text-foreground">
              Portfolio
            </Link>
            <Link href="#tech-stack" className="hover:text-foreground">
              Modules
            </Link>
            <Link href="#workflow" className="hover:text-foreground">
              Workflow
            </Link>
            <Link href="#contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dina Shad ExoCad Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
