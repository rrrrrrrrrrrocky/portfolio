"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/component/ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 이벤트 핸들러
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 페이지 상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤
    });
  };

  // 스크롤 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <Button
        className="flex size-12 items-center justify-center rounded-full bg-black/60 text-white shadow-lg transition-colors duration-300 hover:bg-black"
        data-gtm-id="scroll-to-top-button"
        variant="none-style"
        onClick={scrollToTop}>
        <ArrowUp className="text-white" size={24} />
      </Button>
    )
  );
};

export default ScrollToTopButton;
