"use client";

import { useState } from "react";

export default function Form3() {
  // Local state for email
  const [email, setEmail] = useState("");
  // Submission status: "idle" | "success" | "error"
  const [sendStatus, setSendStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendStatus("idle"); // reset status before attempt

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      // Clear field on success
      setEmail("");
      setSendStatus("success");
    } catch (error) {
      console.error("Subscription error:", error);
      setSendStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form" id="mailchimp">
      <div className="mb-20">Stay informed with our newsletter.</div>
      <div className="mb-20">
        <input
          placeholder="Enter your email"
          className="newsletter-field form-control input-md round mb-10"
          type="email"
          pattern=".{5,100}"
          required
          aria-required="true"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-mod btn-color btn-medium btn-round btn-hover-anim form-control"
          aria-controls="subscribe-result"
        >
          <span>Subscribe</span>
        </button>
      </div>

      <div className="form-tip">
        <i className="icon-info size-16" aria-hidden="true" />
        By sending the form you agree to the{" "}
        <a href="#">Terms &amp; Conditions</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </div>

      <div
        id="subscribe-result"
        role="region"
        aria-live="polite"
        aria-atomic="true"
        className="mt-3"
      >
        {sendStatus === "success" && (
          <p className="text-success">
            Subscription successful! Check your inbox for a confirmation email.
          </p>
        )}
        {sendStatus === "error" && (
          <p className="text-danger">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </form>
  );
}
