"use client";

import { useState } from "react";

export default function LeadForm({ title, description }) {
  // Local state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Submission status: "idle" | "success" | "error"
  const [sendStatus, setSendStatus] = useState("idle");

  // Common handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Common submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendStatus("idle"); // Reset status

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send form data");
      }

      // Clear the form if successful
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSendStatus("success");
    } catch (error) {
      console.error(error);
      setSendStatus("error");
    }
  };

  return (
    <div className="box-shadow round p-4 p-sm-5 text-dark">
      {/* Optional Title or Description Props */}
      {title && <h5 className="mb-3">{title}</h5>}
      {description && <p>{description}</p>}

      <form onSubmit={handleSubmit} className="form contact-form">
        <div className="row">
          {/* Name */}
          <div className="col-md-12 mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input-lg round form-control"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {/* Phone */}
          <div className="col-md-12 mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="input-lg round form-control"
              placeholder="Enter your phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div className="col-md-12 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-lg round form-control"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="input-lg round form-control"
            style={{ height: 130 }}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button & Disclaimer */}
        <div className="row">
          <div className="col-md-6">
            <button
              type="submit"
              className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim w-100"
              aria-controls="result"
            >
              <span>Send</span>
            </button>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="form-tip w-100 pt-3 mt-sm-20">
              <i className="icon-info size-16" />
              All fields are required. By sending the form, you agree to the{" "}
              <a href="/terms-and-conditions">Terms &amp; Conditions</a> and{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </div>
          </div>
        </div>

        {/* In-page Result Messages */}
        <div
          id="result"
          role="region"
          aria-live="polite"
          aria-atomic="true"
          className="mt-3"
        >
          {sendStatus === "success" && (
            <p className="text-success">
              Your message has been sent successfully!
            </p>
          )}
          {sendStatus === "error" && (
            <p className="text-danger">
              Something went wrong. Please try again later.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
