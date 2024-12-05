import Authprovider from "@/components/Authprovider/Authprovider";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { FooterLinks } from "@/components/FooterLinks";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Popup from "@/components/Popup";


export async function generateMetadata() {
  return {
    title: "EduChacha",
    description: "Generated by create next app",
    icons: [{ rel: "icon", url: "/goEdulogo.svg" }],
    other: [
      {
        name: "google-site-verification",
        content: "qgn6MqFJA53sQvYVhpT70fVxndZfM0zTF1uSq0Uiy1g",
      },
      {
        name: "google-site-verification",
        content: "1OK7AS59HEPlQx7IVp_HdfQIX6PApYm5hRxOTlD9aYc",
      },
      {
        name: "application-name",
        content: "GoEdu",
      },
      {
        name: "description",
        content: "Generated by create next app",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "keywords",
        content: "education, GoEdu, online learning",
      },
    ],
    customMeta: (
      <meta
        name="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-51DFFSG7NZ');
          `,
        }}
      />
    ),
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head></Head> */}
      <body className="overflow-x-hidden">
        <ToastContainer />
        <Authprovider>
          <Navbar />
          <Popup/>
          {children}
          <Footer />
          <FooterLinks />
        </Authprovider>
        <div className="fixed bottom-4 left-4 z-50">
          <Link href="tel:+9557695360" aria-label="Phone">
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600">
              <FaPhoneAlt className="text-2xl " />
            </button>
          </Link>
        </div>
        <div className="fixed bottom-4 right-4 z-50">
          <Link href="https://wa.me/9557695360" aria-label="WhatsApp">
            <button className="bg-green-500 text-white p-[12px] rounded-full shadow-lg hover:bg-green-600">
              <FaWhatsapp className="md:text-[33px] text-3xl md:text-2xl" />
            </button>
          </Link>
        </div>
      </body>
    </html>
  );
}
