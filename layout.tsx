import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title:"XoticAI Personal", description:"Personal private AI creative studio" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}