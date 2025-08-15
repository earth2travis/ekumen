import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-input/50 backdrop-blur-sm cyber-border flex h-9 w-full min-w-0 rounded-md px-3 py-1 text-base shadow-xs transition-all duration-300 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:cyber-glow-primary focus-visible:border-accent focus-visible:scale-[1.02]",
        "hover:cyber-glow-primary hover:border-accent/70",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "cyber-scrollbar font-mono",
        className
      )}
      {...props}
    />
  );
}

export { Input };
