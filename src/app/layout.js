import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// import localFont from "next/font/local";
import { ConfigProvider } from "antd";
import { mainTheme } from "@/theme";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Advocate",
  template: "%s - Advocate",
  description: "Compassionate Care, Right Where You Feel Most Comfortable",
  keywords: ["Advocate", "Compassionate care", "Home care", "Domiciliary care"],
  openGraph: {
    title: "Advocate",
    description: "Compassionate Care, Right Where You Feel Most Comfortable",
    images: [
      {
        url: "./opengraph-image.png",
        width: 1920,
        height: 1080,
      },
    ],
    url: "https://home-care-website.vercel.app/",
    type: "website",
    siteName: "Advocate",
  },

  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },

  twitter: {
    card: "summary_large_image",
    title: "Advocate",
    description: "Compassionate Care, Right Where You Feel Most Comfortable",
    images: ["./opengraph-image.png"],
    creator: "@advocate",
  },

  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },

  metadataBase: new URL("https://home-care-website.vercel.app/"),
};

// ${skia.variable}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader
          color="#D3EBE7"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease-in-out"
          speed={200}
          shadow="0 0 10px #D3EBE7,0 0 5px #D3EBE7"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Toaster position="top-center" richColors />
        <AntdRegistry>
          <ConfigProvider theme={mainTheme}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
