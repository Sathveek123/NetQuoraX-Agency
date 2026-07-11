import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "NetquoraX — Automate. Innovate. Scale.",
  description: "NetquoraX builds AI systems, websites, apps, automation and trading solutions that generate measurable business growth.",
  metadataBase: new URL("https://netquorax.com"),
  openGraph: {
    type: "website",
    siteName: "NetquoraX",
    title: "NetquoraX — Automate. Innovate. Scale.",
    description: "We build the AI, automation, and trading systems that help startups and businesses grow faster — without the manual grind.",
    url: "https://netquorax.com",
    images: [
      {
        url: "/images/hero-premium-dashboard.webp",
        width: 1200,
        height: 630,
        alt: "NetquoraX — AI Automation & Business Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NetquoraX — Automate. Innovate. Scale.",
    description: "We build AI, automation, and trading systems that help startups and businesses grow faster.",
    images: ["/images/hero-premium-dashboard.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = localStorage.getItem("nqx_theme");
                var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (saved === "dark" || (!saved && prefersDark)) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              })()
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans bg-[#F8FAFC] text-[#0B1020] min-h-screen">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
