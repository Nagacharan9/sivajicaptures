import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 font-sans tracking-wider uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        elegant: "bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none",
        gold: "bg-gold text-primary-foreground hover:bg-gold/90 shadow-soft hover:shadow-elegant rounded-none",
        hero: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-primary-foreground tracking-[0.2em] font-light rounded-none",
        minimal: "bg-transparent text-foreground underline underline-offset-8 decoration-gold hover:decoration-2 tracking-[0.15em]",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-12 px-8 py-3",
        xl: "h-14 px-10 py-4 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
