/* eslint-disable camelcase */
/* eslint-disable new-cap */
import "@/resource/style/global.css";
import "dayjs/locale/ko";

import type { Metadata, Viewport } from "next";
import { Noto_Sans } from "next/font/google";
import { ReactNode } from "react";

import ClientProvider from "@/component/_common/client-provider";
import FooterContainer from "@/component/_common/footer/_footer-container";
import HeaderContainer from "@/component/_common/header/_header-container";
import { Container } from "@/component/ui/container";
import {
  AUTHOR,
  COMPANY_NAME,
  DEFAULT_SITE_KEYWORDS,
  openGraph,
  SITE_URL,
  siteDescription,
  siteTitle,
  twitterCard,
} from "@/script/constant/meta";

const notoSans = Noto_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: siteTitle(),
  description: siteDescription(),
  authors: [{ name: AUTHOR, url: SITE_URL }],
  creator: AUTHOR,
  keywords: DEFAULT_SITE_KEYWORDS,
  publisher: COMPANY_NAME,
  openGraph: openGraph(),
  twitter: twitterCard(),

  verification: {
    google: "1FshMFf8jSg3_oqf5uw-MI8yur7g_NjBSQ5tLALsZZ8",
  },
  manifest: "/meta/site.webmanifest",
  robots: "index, follow",
  metadataBase: new URL(SITE_URL),
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="no-cache, no-store, must-revalidate"
          httpEquiv="Cache-Control"
        />
        <meta content="no-cache" httpEquiv="Pragma" />
        <meta content="0" httpEquiv="Expires" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        {/* Google Tag Manager (ga는 gtm 컨테이너에서 설치, gtag대신 dataLayer 사용) */}
        {/* {isProd && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-53XTW9CZ')
              `,
            }}
            async
          />
        )}
        {isProd && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "qtcfx2igei");
              `,
            }}
            id="clarity-script"
            async
          />
        )} */}
        <link
          href="/meta/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/meta/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/meta/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link href="/meta/favicon.ico" rel="shortcut icon" />
      </head>
      <body
        className={`${notoSans.className} relative flex min-h-screen flex-col bg-background antialiased`}>
        {/* noscript 부분은 gtm 설치에서 권장하는 body바로 아래에 위치하도록 해야함 */}
        {/* {isProd && (
          <noscript>
            <iframe
              className="invisible hidden"
              height="0"
              loading="lazy"
              src="https://www.googletagmanager.com/ns.html?id=GTM-53XTW9CZ"
              width="0"
            />
          </noscript>
        )} */}

        <ClientProvider>
          <HeaderContainer />
          {/* TODO: 임시저장 기능 만든 후 추가 예정 */}
          {/* <AlertSection /> */}

          {children}

          {/* <FooterContainer /> */}
        </ClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
