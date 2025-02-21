import React from "react";
import Service from "./Service";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Link from "next/link";
import TestimonialsDark from "./TestimonialsDark";
import Faq from "@/components/common/Faq";

export default function Home6({ onePage = false, dark = false }) {
  return (
    <>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      {/*       <section
        className={`page-section  scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      > */}
      {/*  <div className="container position-relative">
          <div className="row mb-xs-40"> */}
      <div id="about">
        {/*           <section
            className={`page-section  scrollSpysection  ${
              dark ? "bg-dark-1 light-content" : ""
            } `}
            id="contact"
          >
            <Contact />
          </section> */}
        <>
          <hr className="mt-0 mb-0" />
          {/* End Divider */}
          {/* FAQ Section */}
          <section className="page-section z-index-1">
            <div className="container position-relative">
              <div className="row position-relative">
                <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                  <h2 className="section-caption-fancy mb-20 mb-xs-10">
                    About Rebates
                  </h2>
                  <h3 className="section-title mb-30">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-gray mb-0">
                    Welcome to our FAQ section where you can find answers to
                    common questions about the Ontario Heat Pump Rebate. We go
                    over eligibility, perks, installation specifications, and
                    how to apply for a reimbursement. The purpose of this
                    resource is to make it easy for you to locate the
                    information you require in order to benefit from an
                    energy-efficient heat pump system. Our staff is available by
                    phone or online if you require additional assistance.
                  </p>
                </div>
                <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                  {/* Accordion */}
                  <Faq />
                  {/* End Accordion */}
                </div>
              </div>
            </div>
          </section>
        </>
        {/*  <h2 className="section-caption-fancy mb-20 mb-xs-10">About Us</h2>
              <h3 className="section-title mb-30 mb-xs-20 wow fadeInUp">
                The best way to create stanning layouts for your website.
              </h3>
              <p
                className="section-descr mb-40 mb-sm-20 wow fadeInUp"
                data-wow-delay="0.06s"
              >
                Although web design has a fairly recent history. It has become a
                large part of people's everyday lives. It is hard to imagine the
                Internet without animated graphics, different styles of
                typography, background, videos and music.
              </p>
              <div className="local-scroll wow fadeInUp" data-wow-delay="0.12s">
                {onePage ? (
                  <>
                    <a
                      href="#services"
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        View our services{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        View our services{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/fancy-about${dark ? "-dark" : ""}`}
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more about us{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more about us{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div> */}
        {/*          </div>
          </div> */}
        {/* Images Composition */}
        {/*           <About />
         */}{" "}
        {/* End Images Composition */}
      </div>
      {/*       </section> */}

      {/* <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section scrollSpysection  ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-1 light-content"
            : "bg-gradient-gray-light-1 "
        } bg-scroll`}
        id="services"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-sm-40">
            <div className="col-md-8 col-lg-6">
              <h2 className="section-caption-fancy mb-20 mb-xs-10">
                Our Services
              </h2>
              <h3 className="section-title mb-0 mb-sm-20">
                We provide the full stack of&nbsp;the best digital solutions.
              </h3>
            </div>
            <div className="col-md-4 col-lg-6 d-flex align-items-end">
              <div className="local-scroll text-md-end w-100">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#portfolio"
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        View works{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        View works{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/fancy-services${dark ? "-dark" : ""}`}
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        ALl services{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        ALl services{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>


          <Service />
        </div>
      </section> */}
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        <Features />
      </section>
      {/*    <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-sm-40">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="section-caption-fancy mb-20 mb-xs-10">
                Selected Work
              </h2>
              <h3 className="section-title mb-0">
                We believe in making the best work, and being the best to work
                with.
              </h3>
            </div>
          </div>

          <Portfolio />
        </div>
      </section> */}
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        {dark ? <TestimonialsDark /> : <Testimonials />}
      </section>
      {/*  <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <Blog />
      </section> */}

      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <section
        className={`page-section ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-1 light-content"
            : "bg-gradient-gray-light-1 "
        } bg-scroll`}
      >
        <Newsletter />
      </section>
      {/*    <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="pricing"
      >
        <Pricing />
      </section> */}
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
