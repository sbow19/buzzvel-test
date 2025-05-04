import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
});

/**
 * SEO Checklist
 * 
 * Next Image components
 * 
 * Meta tags:
 *  Opengraph
 *  Twitter
 *  Robots directives
 *  Icons
 * 
 * JSON - LD 
 * 
 * Sitemap
 * 
 * robots.txt
 * 
 * Link tags
 * 
 * 
 * 
 */

export const metadata: Metadata = {
  title: "Buzzvel FE Test",
  description: "Thank yo kindly for taking a look at my project!",
  keywords: [
    "teachers",
    "Buzzvel",
    "learning",
    "social",
    "online",
    "Next.js"
  ],
  //Open graph
  openGraph:{
    title: "Teachers Buzzvel",
    type: "website",
    description: "A platform for connecting teachers and students",
    url:"",

    // For the home segment, we can place an image in the directory of the
    // route segment, eg Home, and Nextjs will automatically at the header tags
    // For OG and Twitter 
    // images:[],
    locale: 'en_US'
  },

  //Twitter
  twitter:{
    card: "summary",
    title: "Teacher Buzzvel",
    description: "Teaching platform provided by Buzzvel",
    creator: "@handle"
  },

  //Robots/ indexing
  robots:{
    index: true,
    follow: true,
    "max-image-preview": "standard",
    "max-snippet": 256,
    "max-video-preview": 10,
    googleBot: {
      index: true,
      follow: true
    }
  },
  
  //Icons are placed in /app directory and generates headers for icon
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
