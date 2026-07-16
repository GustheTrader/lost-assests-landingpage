import type { Metadata } from "next";
import { headers } from "next/headers";
import "./aasi.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "https://www.adauditservintl.com";
  const title = "About AASI | Advertising Audit Services International";
  const description = "Global advertising and marketing contract compliance, risk analytics, media performance, and proprietary audit technology.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: `${origin}/aasi-og.png`, width: 1200, height: 630, alt: "AASI — Transparency. Accountability. Value." }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/aasi-og.png`] },
  };
}

export default function AasiLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
