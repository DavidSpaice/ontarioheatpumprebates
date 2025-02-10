import Form3 from "@/components/newsletterForms/Form3";
import Comments from "@/components/blog/Comments";
import Widget2 from "@/components/blog/widgets/Widget2";
import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";

import { fancyMultipage } from "@/data/menu";
import Image from "next/image";
import { allBlogs } from "@/data/blogs";

export const metadata = {
  title:
    "Heat Pump Rebates Ontario - Your Comprehensive Resource for Energy Savings",
  description:
    "Unlock significant savings with our expert guides on heat pump rebates in Ontario. Discover eligibility tips, step-by-step processes, and practical advice to improve your home's energy efficiency and save money.",
};

export default function FancyBlogSinglePage({ params }) {
  // Find the blog using the passed id, or fallback to the first blog.
  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];

  // Helper function to render paragraphs.
  // If blog.content exists and is an array, render each paragraph.
  // Otherwise, split blog.text by double newlines and render each paragraph.
  const renderParagraphs = () => {
    if (blog.content) {
      if (Array.isArray(blog.content)) {
        return blog.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ));
      }
      // If content is a single string (not an array), we can also split it.
      return blog.content
        .split("\n\n")
        .map((paragraph, index) => <p key={index}>{paragraph}</p>);
    } else if (blog.text) {
      return blog.text
        .split("\n\n")
        .map((paragraph, index) => <p key={index}>{paragraph}</p>);
    }
    return null;
  };

  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header6 links={fancyMultipage} />
          </nav>
          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* Background Shape */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  alt=""
                />
              </div>
              {/* End Background Shape */}
              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="hs-title-10 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text={blog.title || blog.postTitle} />
                      </span>
                    </h1>
                    {/* Author, Date, etc. */}
                    <div
                      className="blog-item-data mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <div className="d-inline-block me-3">
                        <a href="#">
                          <i className="mi-clock size-16" />
                          <span className="visually-hidden">Date:</span>{" "}
                          {blog.date || "December 25"}
                        </a>
                      </div>
                      <div className="d-inline-block me-3">
                        <a href="#">
                          <i className="mi-user size-16" />
                          <span className="visually-hidden">Author:</span>{" "}
                          {blog.authorName || blog.author || "John Doe"}
                        </a>
                      </div>
                    </div>
                    {/* End Author, Date, etc. */}
                  </div>
                </div>
              </div>
            </section>

            <>
              {/* Main Content Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row">
                    {/* Post Content */}
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <div className="blog-item mb-80 mb-xs-40">
                        <div className="blog-item-body">
                          {/* Dynamic Blog Image */}
                          {blog.largeImage || blog.imgSrc ? (
                            <div className="mb-40 mb-xs-30">
                              <Image
                                src={blog.largeImage || blog.imgSrc}
                                alt={blog.imgAlt || "Image Description"}
                                width={1350}
                                height={759}
                                className="round"
                              />
                            </div>
                          ) : null}

                          {/* Render blog content with proper paragraphs */}
                          {renderParagraphs()}
                        </div>
                      </div>
                      {/* End Post Content */}
                    </div>
                  </div>
                </div>
              </section>
              {/* End Main Content Section */}
              {/* Newsletter Widget Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row justify-content-center mt-n60">
                    <div className="col-sm-12 col-lg-6 mt-60">
                      <div className="widget mb-0">
                        <h3 className="widget-title">Newsletter</h3>
                        <div className="widget-body">
                          <div className="widget-text clearfix">
                            <Form3 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Newsletter Widget Section */}
            </>
          </main>

          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>
      </div>
    </>
  );
}
