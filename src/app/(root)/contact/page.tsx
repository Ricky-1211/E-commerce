"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <main className="relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-gray-50 opacity-10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left Column: Contact info */}
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Get in touch
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Have questions about our latest drops or need help with an order? We&apos;re here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="rounded-2xl bg-gray-100 p-4">
                  <Mail className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                    Email Support
                  </h3>
                  <p className="text-gray-500">support@nike-commerce.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="rounded-2xl bg-gray-100 p-4">
                  <Phone className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                    Call Center
                  </h3>
                  <p className="text-gray-500">+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="rounded-2xl bg-gray-100 p-4">
                  <MapPin className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                    Main Office
                  </h3>
                  <p className="text-gray-500">123 Sports Way, Nike City, OR 97005</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="mt-16 flex-1 lg:mt-0">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-200"
            >
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="mb-6 rounded-full bg-green-50 p-6 text-green-500">
                    <Send className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="mt-2 text-gray-500">
                    Thank you for your message. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 rounded-full bg-gray-900 px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-900">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all focus:border-gray-900 focus:bg-white outline-none ring-0"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-900">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all focus:border-gray-900 focus:bg-white outline-none ring-0"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Ordering details"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all focus:border-gray-900 focus:bg-white outline-none ring-0"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hello, I have a question about..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all focus:border-gray-900 focus:bg-white outline-none ring-0"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
