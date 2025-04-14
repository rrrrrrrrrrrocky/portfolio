"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import dayjs from "dayjs";
import * as React from "react";

import { cn } from "@/script/util/ui-utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center break-all gap-2 rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary border-primary border text-primary-foreground hover:bg-primary-foreground hover:border-primary-foreground hover:text-primary",
        destructive:
          "border border-destructive text-destructive hover:bg-background hover:border-destructive hover:text-destructive",
        outline:
          "border border-primary text-primary-foreground dark:text-primary bg-transparent hover:bg-primary  hover:text-primary-foreground dark:hover:text-primary-foreground",
        secondary:
          "bg-secondary border border-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary hover:border-secondary-foreground",
        ghost:
          "hover:bg-primary hover:text-primary-foreground text-black dark:text-white",
        link: "text-accent underline-offset-4 hover:underline",
        black:
          "bg-foreground border-black text-background hover:bg-primary hover:border-primary hover:text-primary-foreground",
        "none-style": "rounded-none",
      },
      size: {
        default: "min-h-10 px-4 py-2 text-md",
        sm: "min-h-9 rounded-md px-3 py-1 text-sm",
        lg: "min-h-11 rounded-md px-8 py-2 text-lg",
        icon: "size-10",
        "none-style": "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  "data-gtm-id": string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const customOnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      // if (
      //   typeof window !== "undefined" &&
      //   window.dataLayer &&
      //   process.env.NODE_ENV === "production"
      // ) {
      //   window.dataLayer.push({
      //     event: "button_click",
      //     event_category: "User Engagement",
      //     event_action: "click",
      //     event_label: e.currentTarget.name || e.currentTarget.innerHTML.trim(),
      //     event_value: 1, // 클릭당 1점 부여
      //     non_interaction: false, // 사용자 상호작용으로 간주
      //     korean_time: dayjs().format("YYYY-MM-DD HH:mm:ss"), // 한국 형식
      //     timezone: "Asia/Seoul",
      //   });
      // }
      if (onClick) onClick(e);
    };
    return (
      <Comp
        ref={ref}
        className={cn(
          variant === "none-style"
            ? className
            : buttonVariants({
                variant,
                size,
                className,
              })
        )}
        type="button"
        {...props}
        onClick={customOnClick}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
