"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
    }, 1500);
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-primary/10 text-xs tracking-widest text-primary">
            SEND A MESSAGE
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Let’s Talk About Your <span className="text-primary">Future</span>
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Fill out the form below and our team will get back to you shortly.
            We’re happy to guide you in choosing the right course.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="+94 7X XXX XXXX"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
            </div>

            {/* Course Interest */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interested Course
              </label>
              <select
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a course
                </option>
                <option>React JS</option>
                <option>Next.js</option>
                <option>JavaScript</option>
                <option>Node.js</option>
                <option>.NET</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your goals or questions..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-white font-semibold transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
