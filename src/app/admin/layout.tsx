import type { Metadata } from "next";
import SuperAdmin from "@/components/HOCS/SuperAdmin";



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
  return <SuperAdmin>{children}</SuperAdmin>;
}
