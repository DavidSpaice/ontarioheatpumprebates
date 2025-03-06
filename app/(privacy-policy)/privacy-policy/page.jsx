"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/homes/home-6/Contact";

// If you have a menu data file, import from there:
import { fancyMultipage } from "@/data/menu";

export default function PrivacyPolicyPage({ dark = false }) {
  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          {/* Navigation */}
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header6 links={fancyMultipage} />
          </nav>

          <main id="main">
            {/* Hero Section */}
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* Background Shape */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  alt="Background Shape"
                />
              </div>
              {/* End Background Shape */}

              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="hs-title-10 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="Privacy Policy" />
                      </span>
                    </h1>
                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Protecting Your Personal Information
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="page-section" style={{ paddingTop: "60px" }}>
              <div className="container position-relative">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <p>
                      Your privacy is very important to us. Accordingly, we have
                      developed this Policy in order for you to understand how
                      we collect, use, communicate, and disclose personal
                      information.
                    </p>
                    <p>
                      We may use remarketing tracking cookies, including the
                      Google Adwords tracking cookie and Facebook Pixel. This
                      means we may continue to show ads to you across the
                      internet. As always, we respect your privacy and are not
                      collecting any identifiable information through the use of
                      remarketing or pixel tracking.
                    </p>
                    <p>
                      Ontario Heat Pump Rebates is committed to respecting the
                      privacy of individuals and recognizes a need for the
                      appropriate management and protection of any personal
                      information that you agree to provide to us. We will not
                      share your information with any third party outside of our
                      organization, other than as necessary to fulfill your
                      request.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="contact"
            >
              <Contact />
            </section>
          </main>

          {/* Footer */}
          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>
      </div>
    </>
  );
}
