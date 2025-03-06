"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/homes/home-6/Contact";

// If you have a menu data file, import from there:
import { fancyMultipage } from "@/data/menu";

export default function TermsAndConditionsPage({ dark = false }) {
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
                        <AnimatedText text="Terms & Conditions" />
                      </span>
                    </h1>
                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Participation in the Home Renovation Savings Program
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Terms & Conditions Content */}
            <section className="page-section" style={{ paddingTop: "60px" }}>
              <div className="container position-relative">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <p>
                      By accessing or using the Home Renovation Savings Program
                      (referred to as the "Program"), you agree to be bound by
                      the following Terms and Conditions. These terms govern
                      your participation in the Program, eligibility,
                      application process, and rebates available to homeowners
                      in Ontario. Please read these terms carefully before
                      applying.
                    </p>

                    <h4 className="fw-bold mt-4">
                      1. Eligibility Requirements
                    </h4>
                    <p>
                      <strong>Homeowners Only:</strong> The Program is available
                      only to homeowners of single-family homes, row housing, or
                      semi-detached properties located in Ontario. Multi-unit
                      residential buildings and rental properties are generally
                      not eligible unless otherwise specified.
                    </p>
                    <p>
                      <strong>Property Type:</strong> Properties must be
                      residential and must be served by a participating utility
                      or municipality in Ontario.
                    </p>
                    <p>
                      <strong>Rebate Eligibility:</strong> The Home Renovation
                      Savings Program offers rebates to homeowners who upgrade
                      their heating systems with energy-efficient heat pumps.
                      Only eligible heat pump models, as defined by the Program,
                      are eligible for rebates.
                    </p>

                    <h4 className="fw-bold mt-4">2. Application Process</h4>
                    <p>
                      <strong>Rebate Application:</strong> Homeowners wishing to
                      apply for rebates under the Program must follow the
                      official application procedure outlined on the website.
                      This includes submitting all necessary documentation, such
                      as receipts, installation details, and supporting
                      documents.
                    </p>
                    <p>
                      <strong>Certified Installers:</strong> To qualify for the
                      rebate, installations must be performed by certified
                      contractors who meet the Program's standards. Homeowners
                      are advised to use authorized contractors for
                      installation.
                    </p>
                    <p>
                      <strong>Documentation Requirements:</strong> To
                      successfully apply for the rebate, homeowners must submit
                      all required paperwork, including proof of purchase and
                      installation confirmation from a licensed installer.
                    </p>

                    <h4 className="fw-bold mt-4">
                      3. Rebate Limits and Payments
                    </h4>
                    <p>
                      <strong>Rebate Amounts:</strong> Eligible homeowners may
                      receive rebates of up to $7,500, depending on the type of
                      heat pump installed and other criteria defined by the
                      Program.
                    </p>
                    <p>
                      <strong>Rebate Payments:</strong> Rebate payments will be
                      issued only after successful verification of installation
                      and application approval. The Program reserves the right
                      to modify or limit rebate amounts at any time.
                    </p>

                    <h4 className="fw-bold mt-4">4. Program Modifications</h4>
                    <p>
                      The Home Renovation Savings Program reserves the right to
                      modify, suspend, or terminate the Program or any part of
                      it at its discretion, at any time, without notice. This
                      includes changes to rebate amounts, eligibility criteria,
                      and the application process.
                    </p>

                    <h4 className="fw-bold mt-4">
                      5. Privacy and Data Protection
                    </h4>
                    <p>
                      By applying for the rebate, you agree to allow the Home
                      Renovation Savings Program to collect, use, and share your
                      personal information for the purposes of verifying your
                      application and processing rebate payments. Your personal
                      information will not be shared with third parties without
                      your consent, except as required by law.
                    </p>

                    <h4 className="fw-bold mt-4">
                      6. Program Terms Compliance
                    </h4>
                    <p>
                      Homeowners participating in the Home Renovation Savings
                      Program agree to comply with all applicable laws,
                      regulations, and guidelines related to the installation
                      and rebate application process. Failure to comply with
                      these terms may result in the denial of the rebate
                      application.
                    </p>

                    <h4 className="fw-bold mt-4">7. Liability</h4>
                    <p>
                      While the Home Renovation Savings Program strives to
                      ensure that all information provided is accurate and up to
                      date, it cannot be held liable for any errors or omissions
                      in the content of this website or for any technical issues
                      related to the application process. Homeowners are solely
                      responsible for ensuring that all information submitted is
                      accurate and complete.
                    </p>

                    <h4 className="fw-bold mt-4">8. Dispute Resolution</h4>
                    <p>
                      Any disputes related to the Home Renovation Savings
                      Program will be subject to the laws and regulations of
                      Ontario. In the event of a dispute, homeowners agree to
                      resolve any issues in accordance with the Program's
                      guidelines and contact the Program's customer support for
                      assistance.
                    </p>

                    <h4 className="fw-bold mt-4">
                      9. Changes to Terms and Conditions
                    </h4>
                    <p>
                      The Home Renovation Savings Program may update or change
                      these Terms and Conditions at any time. Any changes will
                      be posted on this page, and by continuing to use the
                      Program after such changes, you accept and agree to the
                      updated terms.
                    </p>

                    <h4 className="fw-bold mt-4">10. Contact Information</h4>
                    <p>
                      If you have any questions or concerns about the Home
                      Renovation Savings Program, please contact us.
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
