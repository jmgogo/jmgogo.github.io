import localFont from "next/font/local";

export const compagnon = localFont({
  src: [
    {
      path: "../public/fonts/Compagnon/Compagnon-Italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Compagnon/Compagnon-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Compagnon/Compagnon-Roman.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Compagnon/Compagnon-Bold.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Compagnon/Compagnon-Medium.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-compagnon",
});
