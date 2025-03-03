import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter ({ subsets: ["latin"] });

export const metadata = {
  title: "VisionAI - AI Career Coach",
  description: "The Full Stack AI Career Coach is a web application designed to assist job seekers in their career journey.",
};

export default function RootLayout({ children }) {
  return (
    // <ClerkProvider 
    // appearance={{
    //   baseTheme:dark,
    // }}
    // >
    
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header */}
          <Header/>
          <main className="min-h-screen">{children}</main>
          
          {/* Footer */}
          <footer className="bg-muted/50 py-12">
          <div className="container mx-auto px-4 text-center text-grey-200">
            <p>
              Yours truely
            </p>
          </div>

          </footer>
        </ThemeProvider>
      </body>
    </html>
    // </ClerkProvider>
  );
}
