"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fancyMultipage } from "@/data/menu";
import Header6 from "@/components/headers/Header6";
import Footer6 from "@/components/footers/Footer6";

// If you have menu data for Header6, import it here:
// import { fancyMultipage } from "@/data/menu";

export const metadata = {
  title: "404 - Page Not Found",
  description: "This page could not be found.",
};

export default function NotFoundPage() {
  return (
    <div className="theme-fancy">
      <div className="page" id="top">
        {/* Navigation */}
        <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
          {/* Pass your menu data to Header6 if needed: */}
          <Header6 links={fancyMultipage} />
        </nav>

        <main id="main">
          {/* Hero / 404 Section */}
          <section className="home-section bg-light dark-content parallax-5">
            <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
              <div className="home-content text-center w-100">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <h1 className="hs-title-12 mb-40 mb-sm-30">404</h1>
                    <h2 className="section-descr mb-40 mb-sm-30">
                      The page you were looking for could not be found.
                    </h2>
                    <Link
                      href="/"
                      className="btn btn-mod btn-w btn-round btn-medium btn-hover-anim"
                    >
                      <i className="mi-arrow-left size-24 align-center" />
                      <span>Back to Home Page</span>
                    </Link>
                  </div>
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
  );
}
