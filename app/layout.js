import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

export const metadata = {
  title: "Dorkcoin",
  description:
    "Dorkcoin is an open-source peer-to-peer cryptocurrency based on the Proof of Stake algorithm.",
  keywords: [
    "Dorkcoin",
    "Proof of Stake",
    "PoS",
    "cryptocurrency",
    "blockchain",
    "peer-to-peer crypto",
    "crypto",
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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