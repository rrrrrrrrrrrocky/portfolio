/* eslint-disable camelcase */
"use client";

import "dayjs/locale/ko";

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Link from "next/link";
import { useReportWebVitals } from "next/web-vitals";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

import useBackForwardCache from "@/script/hook/use-back-forward-cache";
import {
  generateKakaoOpenExternalUrl,
  isKakaoInApp,
} from "@/script/util/common-utils";

import { Box } from "../ui/box";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import LoadingSpinner from "../ui/loading-spinner";
import { Toaster } from "../ui/sonner";
import { Typography } from "../ui/typography";
import FloatingActionContainer from "./floating-action-section/_floating-action-container";

interface ClientProviderProps {
  children: ReactNode;
}

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
};

const ClientProvider = ({ children }: ClientProviderProps) => {
  const [mounted, setMounted] = useState(false);
  const [isKakaoInAppBrowser, setIsKakaoInAppBrowser] = useState(false);
  const queryClient = getQueryClient();

  useBackForwardCache();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isKakaoInApp()) {
      setIsKakaoInAppBrowser(true);
      window.location.href = generateKakaoOpenExternalUrl(window.location.href);
    }
  }, []);

  useReportWebVitals((metric) => {
    if (
      typeof window !== "undefined" &&
      window.dataLayer &&
      process.env.NODE_ENV === "production"
    ) {
      window.dataLayer.push({
        event: "web_vitals",
        event_category: "Web Vitals",
        event_action: metric.name,
        event_value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  if (!mounted) {
    return (
      <Container
        className="flex flex-1 items-center justify-center bg-black"
        fullSize>
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        storageKey="philos-design-theme"
        disableTransitionOnChange
        enableSystem>
        {isKakaoInAppBrowser ? (
          <Container
            className="flex flex-1 flex-col items-center justify-center p-4"
            component="main">
            <Box className="flex flex-col items-center justify-center">
              <Typography
                className="mb-4 text-4xl font-bold"
                component="h2"
                variant="h2">
                기본 브라우저로 오픈합니다.
              </Typography>
              <Typography className="mb-4 text-gray" component="p" variant="p">
                화면이 보이지 않는다면
                <br />
                아래의 버튼을 눌러서 다시 시도해보세요.
              </Typography>
              <Button
                data-gtm-id="not-found-go-to-home"
                variant="destructive"
                asChild>
                <Link href={generateKakaoOpenExternalUrl(window.location.href)}>
                  기본 브라우저로 열기
                </Link>
              </Button>
            </Box>
          </Container>
        ) : (
          <>
            {children}
            <FloatingActionContainer />
          </>
        )}
      </NextThemesProvider>
    </QueryClientProvider>
  );
};

export default ClientProvider;
