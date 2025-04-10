"use client";

import { usePathname } from "next/navigation";

import { Box } from "@/component/ui/box";

import MobileRSSButton from "./mobile-rss-button";
import ScrollToTopButton from "./scroll-to-top-button";

const FloatingActionContainer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Box className="fixed bottom-14 left-1/2 z-50 flex w-full max-w-[1440px] -translate-x-1/2 flex-col items-end justify-end gap-y-4 px-4">
      <ScrollToTopButton />
      {isHome && (
        <Box className="md:hidden lg:hidden xl:hidden">
          <MobileRSSButton />
        </Box>
      )}
    </Box>
  );
};

export default FloatingActionContainer;
