"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import TypingText, { TypingTextHandle } from "@/component/_common/typing-text";
import { Box } from "@/component/ui/box";
import { Button } from "@/component/ui/button";
import { Container } from "@/component/ui/container";
import { Typography } from "@/component/ui/typography";

const Home = () => {
  const firstTypingRef = useRef<TypingTextHandle>(null);
  const secondTypingRef = useRef<TypingTextHandle>(null);

  const [firstDone, setFirstDone] = useState(false);
  const [secondDone, setSecondDone] = useState(false);
  return (
    <Container
      className="mt-14 flex flex-1 flex-col justify-between"
      component="main"
      fullSize>
      <Container className="mt-20 flex flex-col items-start justify-start px-4">
        <Box className="flex items-start justify-start">
          <Box className="flex flex-col items-start justify-start gap-2">
            <TypingText
              ref={firstTypingRef}
              text="안녕하세요."
              onDone={() => {
                // 커서 수동 제어 가능
                setFirstDone(true);
                firstTypingRef.current?.hideCursor();
              }}>
              {({ text, cursor }) => (
                <Typography
                  className="flex items-center text-center"
                  component="p"
                  variant="h4">
                  {text}
                  {cursor}
                </Typography>
              )}
            </TypingText>

            {firstDone && (
              <TypingText
                ref={secondTypingRef}
                text="효율과 개선에 관심이 많은 프론트엔드 개발자 유승현입니다."
                onDone={() => {
                  // 커서 수동 제어 가능
                  secondTypingRef.current?.showCursor();
                  setSecondDone(true);
                }}>
                {({ text, cursor }) => (
                  <Typography
                    className="flex items-center text-start"
                    component="h1"
                    variant="h2">
                    {text}
                    {cursor}
                  </Typography>
                )}
              </TypingText>
            )}
          </Box>
        </Box>
      </Container>
      <Container className="relative flex h-full items-end justify-end px-4">
        {secondDone && (
          <Box className="absolute left-0 top-40 flex h-min w-72 flex-col items-start justify-start gap-y-16 sm:hidden xs:hidden">
            <Button
              className="group flex w-full animate-slide-in justify-end border-b border-b-typo-dark-gray pr-4 transition-transform duration-200 ease-in-out"
              data-gtm-id="home:about"
              variant="none-style"
              asChild>
              <Link href="/about">
                <Typography
                  className="origin-bottom-left text-typo-dark-gray/90 group-hover:scale-110 group-hover:text-typo-dark-gray group-hover:contrast-200"
                  component="p"
                  variant="h2">
                  About
                </Typography>
              </Link>
            </Button>
            <Button
              className="group flex w-3/4 animate-slide-in justify-end border-b border-b-typo-dark-gray pr-4 transition-transform delay-0 duration-500 ease-in-out"
              data-gtm-id="home:portfolio"
              variant="none-style"
              asChild>
              <Link href="/portfolio">
                {/* TODO: portfolio: 외부링크들 셀렉트박스 구성 */}
                <Typography
                  className="origin-bottom-left text-typo-dark-gray/80 group-hover:scale-110 group-hover:text-typo-dark-gray group-hover:contrast-200"
                  component="p"
                  variant="h2">
                  Portfolio
                </Typography>
              </Link>
            </Button>
            <Button
              className="group flex w-1/2 animate-slide-in justify-end border-b border-b-typo-dark-gray pr-4 transition-transform delay-0 duration-1000 ease-in-out"
              data-gtm-id="home:blog"
              variant="none-style"
              asChild>
              <Link href="/blog">
                <Typography
                  className="origin-bottom-left text-typo-dark-gray/70 group-hover:scale-110 group-hover:text-typo-dark-gray group-hover:contrast-200"
                  component="p"
                  variant="h2">
                  Blog
                </Typography>
              </Link>
            </Button>
          </Box>
        )}

        <Image
          alt="main-image"
          blurDataURL="/images/blur-background-image.png"
          height={512}
          objectFit="contain"
          placeholder="blur"
          // TODO: webp로 변환예정
          src="/images/main-image.png"
          width={512}
        />
      </Container>
    </Container>
  );
};

export default Home;
