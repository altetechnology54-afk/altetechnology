import "../globals.css";
import Navigation from "@/components/Navigation";
import { getDictionary } from "@/lib/get-dictionary";

import { CartProvider } from "@/lib/CartContext";

export const metadata = {
    title: "AL-Technology Implants",
    description: "High-precision dental implant systems",
};

export default async function RootLayout({ children, params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    return (
        <html lang={lang} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </head>
            <body suppressHydrationWarning className="antialiased font-outfit">
                <CartProvider>
                    <Navigation lang={lang} dict={dict} />
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}
