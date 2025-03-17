import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Home6 from "@/components/homes/home-6";
import Hero1 from "@/components/homes/home-6/heros/Hero1";
import { fancyMultipage } from "@/data/menu";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title:
    "Ontario Heat Pump Rebates - Save on Your Heating System in Ontario, Canada",
  description:
    "Discover the latest heat pump rebates available in Ontario, Canada, and learn about eligibility requirements, application steps, and cost savings.",
};

export default function Home6MainDemoMultiPage() {
  // Define LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ontario Heat Pump Rebates",
    description: metadata.description,
    url: "https://www.ontarioheatpumprebates.ca",
    telephone: "+1 888 407 1636",
    email: "info@ontarioheatpumprebates.ca",
    address: {
      "@type": "PostalAddress",
      streetAddress: "125 COMMERCE VALLEY DR. W, Suite 802",
      addressLocality: "Markham",
      addressRegion: "Ontario",
      postalCode: "L3T 7W4",
      addressCountry: "CA",
    },
    openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
  };

  return (
    <>
      {/* JSON-LD Schema for LocalBusiness */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessSchema)}
      </Script>

      <div className="theme-fancy">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header6 links={fancyMultipage} />
          </nav>

          <main id="main">
            <section
              className="home-section bg-gradient-gray-light-1 bg-scroll scrollSpysection"
              id="home"
            >
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  alt="Background shape"
                />
              </div>
              <Hero1 />
            </section>

            <Home6 />
          </main>

          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>
      </div>
    </>
  );
}
