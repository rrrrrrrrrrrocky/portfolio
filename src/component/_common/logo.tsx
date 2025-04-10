"use client";

import { AspectRatioProps } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { useTheme } from "next-themes";

import { AspectRatio } from "@/component/ui/aspect-ratio";
import { cn } from "@/script/util/ui-utils";

interface Props extends Omit<AspectRatioProps, "className"> {
  ratioX?: number;
  ratioY?: number;
  className?: AspectRatioProps["className"];
}

const Logo = ({ ratioX = 24, ratioY = 24, className, ...props }: Props) => {
  const { resolvedTheme } = useTheme();

  return (
    <AspectRatio
      className={cn("size-full text-black dark:text-white", className)}
      ratio={ratioX / ratioY}
      asChild
      {...props}>
      <Image
        alt="logo"
        className={cn(
          "size-6",
          resolvedTheme === "dark" ? "invert" : "invert-0"
        )}
        height={24}
        src="/meta/logo-32x32.png"
        width={24}
      />
    </AspectRatio>
  );
};

export default Logo;
