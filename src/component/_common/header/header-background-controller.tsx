"use client";

import { ReactNode, useEffect, useRef } from "react";

import { Container } from "@/component/ui/container";

interface Props {
  children: ReactNode;
}

const HeaderBackgroundController = ({ children }: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 56) {
        ref.current?.classList.add("bg-background", "shadow-md");
        ref.current?.classList.remove("bg-transparent");
      } else {
        ref.current?.classList.add("bg-transparent");
        ref.current?.classList.remove("bg-background", "shadow-md");
      }
    });
  }, []);

  return (
    <Container
      ref={ref}
      className="fixed top-0 z-50 flex h-14 w-full items-center justify-between transition-colors duration-500 "
      component="header"
      fullSize>
      {children}
    </Container>
  );
};

export default HeaderBackgroundController;
