import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavigationFullItems from "../components/navigationfullitems"; // điều chỉnh đúng path

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NavigationFullItems />
                {children}
            </div>
        </>
    );
}
