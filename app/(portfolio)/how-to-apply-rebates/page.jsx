"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import LeadForm from "@/components/common/LeadForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// If you have a menu data file, import from there:
import { fancyMultipage } from "@/data/menu";

export default function HowToApplyRebatesPage() {
  // Example local state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Perform your form submission logic here
    try {
      // Example fetch to an API endpoint '/api/contact' (create or adjust as needed)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send form data");
      }

      // Clear form after successful submission, or display success message, etc.
      setFormData({ name: "", email: "", phone: "", message: "" });
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

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
                        <AnimatedText text="Step-by-Step Guide to Accessing Your Rebates" />{" "}
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="in Ontario" />
                          <b
                            className="mark-decoration-3 wow scalexIn"
                            data-wow-delay="0.5s"
                          ></b>
                        </span>
                      </span>
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      How to Apply for Heat Pump Rebates in Ontario
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Intro & Form Section */}
            <section className="page-section" style={{ paddingTop: "60px" }}>
              <div className="container position-relative">
                <div className="row">
                  {/* Left Column: Intro */}
                  <div className="col-lg-8">
                    <h2 className="mb-4 fw-bold">
                      How to Apply for Heat Pump Rebates in Ontario
                    </h2>
                    <p className="mb-20">
                      At Heat Pump Rebates Ontario, we're here to help you
                      secure rebates of up to
                      <strong> $7,500</strong> through the <a
                      href="https://www.homerenovationsavings.ca/"
                      target="_blank"
                    >
                      Home Renovation Savings
                    </a> program. As a recognized contractor, we offer
                      peace of mind during your energy upgrade, contributing to
                      a greener Ontario.
                    </p>

                    <h4 className="fw-bold mt-4">Eligibility Requirements</h4>
                    <div>
                      <strong>Home Requirements:</strong>
                      <ul>
                        <li>Property must be located in Ontario.</li>
                        <li>
                          Single-family homes, row housing, or semi-detached
                          properties typically qualify.
                        </li>
                        <li>
                          Multi-unit buildings or rental units may be eligible
                          under certain conditions.
                        </li>
                      </ul>
                      <strong>Utility Requirements:</strong>
                      <ul>
                        <li>
                          Home must be served by a participating utility or
                          municipality.
                        </li>
                      </ul>
                    </div>

                    <h4 className="fw-bold mt-4">Installation Requirements</h4>
                    <p>
                      Purchase your heat pump from an authorized dealer or
                      installer to qualify for the Home Renovation Savings
                      program. Installations must meet efficiency standards and
                      program guidelines.
                    </p>

                    <h4 className="fw-bold mt-4">
                      Step-by-Step Application Process
                    </h4>
                    <ol className="mb-4">
                      <li>
                        <strong>Check Eligibility:</strong> Ensure your home and
                        chosen heat pump meet the criteria set by the Home
                        Renovation Savings program. Contact Heat Pump Rebates
                        Ontario to verify eligibility.
                      </li>
                      <li>
                        <strong>Purchase &amp; Install:</strong> Select a
                        qualifying heat pump model that meets the program's
                        efficiency requirements. We'll help confirm the
                        necessary paperwork to keep your rebate on track.
                      </li>
                      <li>
                        <strong>Professional Installation:</strong> Our
                        certified technicians at Heat Pump Rebates Ontario
                        handle the entire installation process, ensuring it
                        meets program and safety guidelines.
                      </li>
                      <li>
                        <strong>Submit Your Application:</strong> After
                        installation, we'll guide you through submitting the
                        rebate application—including receipts, model details,
                        and any required verification.
                      </li>
                    </ol>

                    <p>
                      <em>Ready to get started?</em> Contact Heat Pump Rebates
                      Ontario today to learn how to streamline your application
                      and maximize your rebate through the Home Renovation
                      Savings program.
                    </p>
                  </div>

                  {/* Right Column: Form */}
                  <div className="col-lg-4">
                    <LeadForm
                      title="Are You Going to Implement Project?"
                      description=""
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Available Rebates Section */}
          {/*   <section className="page-section">
              <div className="container">
                <h3 className="fw-bold mb-4">Available Rebates in Ontario</h3>
                <p>
                  Along with provincial programs, Ontario homeowners may also be
                  eligible for:
                </p>
                <ul>
                  <li>
                    <strong>Enbridge Home Efficiency Rebate:</strong> Up to
                    $5,000 for qualifying heat pumps
                  </li>
                  <li>
                    <strong>IESO Rebates:</strong> Additional incentives for
                    energy-efficient upgrades
                  </li>
                  <li>
                    <strong>Canada Greener Homes Grant:</strong> Up to $5,600
                    for various home retrofits
                  </li>
                </ul>
              </div>
            </section> */}

            {/* Why Choose Us Section */}
            <section className="page-section">
              <div className="container">
                <h2 className="section-title mb-40 text-center wow fadeInUp">
                  Why Choose Heat Pump Rebates Ontario?
                </h2>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Expertise</h5>
                      <p className="mb-0">
                        As government-approved contractors, we understand all
                        the rebate processes inside and out.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Comprehensive Service</h5>
                      <p className="mb-0">
                        From eligibility checks to installation and rebate
                        application, we handle it all.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Quality Assurance</h5>
                      <p className="mb-0">
                        Our HVAC professionals guarantee high-quality
                        installations that meet all rebate criteria.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Maximized Savings</h5>
                      <p className="mb-0">
                        We verify your eligibility and apply for all applicable
                        rebates, ensuring maximum financial benefit.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Energy Efficiency</h5>
                      <p className="mb-0">
                        Our heat pump solutions deliver year-round comfort and
                        significant energy savings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="page-section bg-gradient-gray-light-1">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h2 className="section-title mb-20 wow fadeInUp">
                      Start Your Energy-Saving Journey Today
                    </h2>
                    <p className="wow fadeInUp">
                      Ready to make the switch or have questions about applying
                      for Ontario heat pump rebates? Our team is here to guide
                      you every step of the way. Contact us to discover the best
                      options for your home and budget.
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <Link href="#top">
                      <button className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim w-100">
                        <span>Contact Us for a Free Consultation</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
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
