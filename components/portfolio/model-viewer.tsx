// components/portfolio/model-viewer.tsx
"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModelViewerProps {
  src: string;
  title: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ModelViewer({ src, title }: ModelViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  // اگه src از قبل مسیر کامل بود (با / شروع می‌شد)، دست نمی‌زنیم
  // در غیر این صورت، فرض می‌کنیم زیرپوشه‌ی Cases هست
  const resolvedSrc = src.startsWith("/")
    ? `${basePath}${src}`
    : `${basePath}/Cases/${src}`;

  return (
    <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden rounded-lg border bg-zinc-950">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-background/80 backdrop-blur-sm">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <span className="text-xs text-muted-foreground">
            Loading 3D Scene...
          </span>
        </div>
      )}

      {/* HTML Viewer Frame */}
      <iframe
        key={src} // کلید برای رفرش صحیح هنگام تعویض کیس
        src={resolvedSrc}
        title={title}
        className="h-full w-full border-0"
        loading="lazy"
        allow="fullscreen; xr-spatial-tracking"
        sandbox="allow-scripts allow-same-origin"
        onLoad={() => setIsLoading(false)}
      />

      {/* Open Fullscreen Button */}
      <Button
        size="icon"
        variant="secondary"
        className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-background/80 shadow-md backdrop-blur hover:bg-background"
        onClick={() => window.open(resolvedSrc, "_blank")}
        title="Open in Fullscreen"
      >
        <Maximize2 className="h-4 w-4" />
      </Button>
    </div>
  );
}