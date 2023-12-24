import Providers from "@/lib/providers";
import { ToastProvider } from "@/lib/toast-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fQuiz",
  description: "A quiz app for friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ToastProvider />
          {children}
        </Providers>
      </body>
    </html>
  );
}
