"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import LeadForm from "@/components/common/LeadForm";
import Pricing from "@/components/homes/home-6/Pricing";
import Service from "@/components/heatPumps/Service";

import { fancyMultipage } from "@/data/menu";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function HeatPumpRebatesPage() {
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
                        <AnimatedText text="Ontario" />{" "}
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Heat Pump Rebates" />
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
                      Get Up to <strong>$7,500</strong> in Provincial Rebates!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Rebate Overview & Lead Form */}
            <section className="page-section" style={{ paddingTop: "60px" }}>
              <div className="container position-relative">
                <div className="row">
                  {/* Left Column: Rebate Info */}
                  <div className="col-lg-8">
                    <h2 className="mb-20 fw-bold">
                      Maximize Your Savings with Ontario Heat Pump Rebates
                    </h2>
                    <p className="mb-20">
                      Looking to upgrade your home's heating system? A heat pump
                      can significantly lower your energy bills while keeping
                      your home comfortable year-round. With generous government
                      rebates available, there's no better time to make the
                      switch.
                    </p>

                    <h3 className="fw-bold mb-10">
                      Heat Pump Rebates Ontario: Save Money & Go Green
                    </h3>
                    <p>
                      Explore different heat pump systems and potential savings:
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Air-Source Heat Pump:</strong> Rebates up to
                        $4,000
                      </li>
                      <li>
                        <strong>Ground-Source Heat Pump:</strong> Rebates up to
                        $7,500
                      </li>
                      <li>
                        <strong>Hybrid Heat Pump:</strong> Rebates up to $3,000
                      </li>
                    </ul>
                    <p>
                      **Federal Interest-Free Loan:** Access up to{" "}
                      <strong>$40,000</strong> in interest-free financing for
                      home retrofits and heat pump upgrades.
                    </p>
                  </div>

                  {/* Right Column: Contact Form */}
                  <div className="col-lg-4">
                    <LeadForm
                      title="Are You Ready to Get Started?"
                      description=""
                    />
                    {/* End Form */}
                  </div>
                </div>
              </div>
            </section>

            {/* 
              ... Other commented-out sections remain untouched
              (Services, Pricing, etc.)
            */}

            {/* Why Choose Us Section */}
            <section className="page-section">
              <div className="container">
                <h2 className="section-title mb-40 text-center wow fadeInUp">
                  Why Choose Our Ontario Heat Pump Rebates Service?
                </h2>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Expert Advisors</h5>
                      <p className="mb-0">
                        Our certified energy experts guide you through the
                        entire rebate application process, ensuring maximum
                        savings.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Comprehensive Coverage</h5>
                      <p className="mb-0">
                        We serve the entire Ontario area, from downtown to the
                        suburbs, with reliable service and fast response times.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">One-Stop Solution</h5>
                      <p className="mb-0">
                        From consultation and paperwork to installation and
                        aftercare, we've got you covered every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action: Start Your Energy-Saving Journey */}
            <section className="page-section bg-gradient-gray-light-1">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h2 className="section-title mb-20 wow fadeInUp">
                      Start Your Energy-Saving Journey Today
                    </h2>
                    <p className="wow fadeInUp">
                      Our team is ready to answer any questions you have about
                      heat pump rebates, installation, and maintenance. Contact
                      us to find out how you can make the most of Ontario’s
                      energy incentives.
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
