import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground bg-input/50 backdrop-blur-sm cyber-border flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base shadow-xs transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:cyber-glow-primary focus-visible:border-accent focus-visible:scale-[1.01]",
        "hover:cyber-glow-primary hover:border-accent/70",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "cyber-scrollbar font-mono resize-none",
        "selection:bg-primary selection:text-primary-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
