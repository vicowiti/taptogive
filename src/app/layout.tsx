import type { Metadata } from "next";

import "./globals.css";
import { Varela_Round } from "next/font/google";

const poppins_init = Varela_Round({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "Tap To Give",
  description: "Your Gateway To Faithful Giving",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins_init.className} antialiased`}
      >
        
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
