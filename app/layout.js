import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

export const metadata = {
  title: "Dorkcoin",
  description: "descrption",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
