// app/layout.js
import { ApolloWrapper } from "@/app/ApolloWrapper";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavServer, FooterServer } from "@/app/_utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="root">
          <NavServer />
          <ApolloWrapper>{children}</ApolloWrapper>
          <FooterServer />
        </div>
      </body>
    </html>
  );
}
