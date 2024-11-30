import Image from "next/image";
import localFont from "next/font/local";
import Home from "@/app/Home";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function HomePage() {
  return (
    <div>
      <Home />
    </div>
  );
}
