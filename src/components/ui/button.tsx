import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative cyber-breathe font-[family-name:var(--font-jetbrains)]",
  {
    variants: {
      variant: {
        default:
          "cyber-gradient-primary text-primary-foreground cyber-glow-primary hover:scale-105 hover:cyber-glow-accent shadow-lg shadow-primary/25",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 cyber-glow-primary",
        outline:
          "cyber-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:cyber-glow-primary",
        secondary:
          "bg-secondary text-secondary-foreground cyber-border hover:bg-secondary/80 hover:cyber-glow-primary",
        ghost:
          "hover:bg-accent/20 hover:text-accent-foreground hover:cyber-border cyber-pulse",
        link: "text-primary underline-offset-4 hover:underline hover:text-accent",
        accent:
          "cyber-gradient-accent text-accent-foreground cyber-glow-accent hover:scale-105 shadow-lg shadow-accent/25",
        logoButton:
          "bg-transparent border-none hover:bg-transparent text-primary hover:text-primary/80 transition-colors duration-200 flex items-center justify-center p-0",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
