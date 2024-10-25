import type { Metadata } from "next";

import ChurchAdmin from "@/components/HOCS/ChurchAdmin";

export const metadata: Metadata = {
  title: "Tap To Give | SuperAdmin",
  description: "System Admin",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ChurchAdmin>{children}</ChurchAdmin>;
}