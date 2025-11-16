import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import {
  COLOR_THEME_COOKIE_NAME,
  DARK_TOKENS,
  LIGHT_TOKENS,
} from "@/constants";
import Header from "./components/Header";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextJs Starter",
  description: "NextJs Starter so you don't get frustrated setting up.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const savedTheme = (await cookies()).get(COLOR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || "light";

  return (
    <html
      lang="en"
      data-theme={theme}
      className={`${geistSans.variable} ${geistMono.variable}  antialiased font-sans`}
      style={theme === "light" ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body>
        <Header initialTheme={theme} />
        {children}
      </body>
    </html>
  );
}
