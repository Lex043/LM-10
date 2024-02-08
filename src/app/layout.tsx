import { ReactQueryProvider } from "./utils/ReactQueryProvider";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
    title: "Home - LM10",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReactQueryProvider>
            <html lang="en">
                <body>
                    <main className="min-h-screen flex flex-col justify-between">
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </body>
            </html>
        </ReactQueryProvider>
    );
}
