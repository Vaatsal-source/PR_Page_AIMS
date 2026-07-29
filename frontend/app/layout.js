import "./globals.css";

export const metadata = {
  title: "AIMS DTU // Annual Report Control Surface",
  description: "A brutalist single-page presentation of AIMS DTU annual report achievements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
