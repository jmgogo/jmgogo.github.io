import "./globals.css";

import Nav from "@/components/nav";
import { compagnon } from "./fonts";
import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jose's Portfolio",
  description: "Jose's professional software engineering portfolio and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${compagnon.className}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <div className="text-foreground mx-auto w-[750px] max-w-full px-5 pt-40 pb-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
