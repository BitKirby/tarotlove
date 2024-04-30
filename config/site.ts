import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const OPEN_SOURCE_URL = "https://github.com/BitKirby/tarotlove";

const baseSiteConfig = {
  name: "Tarot of Love",
  description: "A free tarot reading platform",
  url: "https://tarot-love.vercel.app/",
  ogImage: "https://tarot-love.vercel.app/og.png",
  metadataBase: "/",
  keywords: ["tarot of Love", "tarot Spreading", "tarot cards"],
  authors: [
    {
      name: "爱塔罗",
      url: "",
      twitter: "",
    },
  ],
  creator: "@aitaluo",
  openSourceURL: "https://github.com/BitKirby/tarotlove",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.jpg",
  },
  footerLinks: [
    { name: "email", href: "mailto:tarotlove1024@outlook.com", icon: MdEmail },
    {
      name: "twitter",
      href: "",
      icon: BsTwitterX,
    },
    { name: "github", href: "", icon: BsGithub },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
