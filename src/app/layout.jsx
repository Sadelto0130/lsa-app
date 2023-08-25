import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Practicas LSA App",
  description: "Creado por Victor Salazar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-5 mt-4">
          <div className="h-[calc(100vh-7rem)] flex justify-center items-center flex-col">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
