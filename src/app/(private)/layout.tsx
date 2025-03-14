import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body style={{background: "black", color: "white", fontFamily: "monospace", fontSize: "46px"}}>
        <h3>Private Page</h3>
        {children}
      </body>
    </html>
  );
}
