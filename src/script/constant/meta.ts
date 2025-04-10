import { Metadata } from "next";

const DEPLOY_URL = "https://rrrrrrrrrrr.xyz";
const LOCAL_URL = "http://localhost:3000";

export const SITE_URL =
  process.env.NODE_ENV === "production" ? DEPLOY_URL : LOCAL_URL;
export const COMPANY_NAME = "rocky`s portfolio";
export const DEFAULT_SITE_NAME = `portfolio | ${COMPANY_NAME}`;

export const AUTHOR = "rocky";
export const EMAIL = "rrrrrrrrrrrocky@gmail.com";

export const SITE_MAP = `${SITE_URL}/sitemap.xml`;

export const DEFAULT_SITE_KEYWORDS = [
  "rocky",
  "portfolio",
  "frontend",
  "developer",
  "javascript",
  "typescript",
  "react",
  "next.js",
  "tailwindcss",
  "node.js",
  "express",
];

export const siteTitle = (options?: {
  pageName?: string;
  overrideTitle?: string;
}) => {
  const { pageName, overrideTitle } = options || {};

  if (overrideTitle) {
    return overrideTitle;
  } else {
    return `portfolio${pageName ? ` - ${pageName}` : ""} | ${COMPANY_NAME}`;
  }
};

export const siteDescription = (description?: string) => {
  const DEFAULT_SITE_DESCRIPTION = "rocky`s portfolio";
  return description || DEFAULT_SITE_DESCRIPTION;
};

export const ogImage = (imageUrl?: string) => {
  const DEFAULT_OG_IMAGE_URL = "/meta/default-og-image.png";
  return imageUrl || DEFAULT_OG_IMAGE_URL;
};

export const openGraph = (options?: {
  pageName?: string;
  description?: string;
  imageUrl?: string;
  overrideTitle?: string;
}): Metadata["openGraph"] => {
  const { pageName, overrideTitle, description, imageUrl } = options || {};

  return {
    title: siteTitle({
      pageName,
      overrideTitle,
    }),
    description: siteDescription(description),
    images: {
      url: ogImage(imageUrl),
      width: 1200,
      height: 630,
      alt: siteTitle({
        pageName,
        overrideTitle,
      }),
    },
    type: "website",
    siteName: DEFAULT_SITE_NAME,
    locale: "ko_KR",
  };
};

export const twitterCard = (options?: {
  pageName?: string;
  description?: string;
  imageUrl?: string;
  overrideTitle?: string;
}): Metadata["twitter"] => {
  const { pageName, overrideTitle, description, imageUrl } = options || {};
  return {
    card: "summary_large_image",
    title: siteTitle({
      pageName,
      overrideTitle,
    }),
    description: siteDescription(description),
    images: [ogImage(imageUrl)],
  };
};
