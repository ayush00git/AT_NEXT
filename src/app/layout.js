// src/app/layout.js
import "./globals.css"; // your global styles
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

export const metadata = {
  title: "AppTeam Website",
  description: "Converted from MERN to Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
