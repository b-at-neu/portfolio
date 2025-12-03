"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // In production, this would send the form data to an API endpoint
    // that saves to the database using Prisma
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Get In Touch
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Let&apos;s Work Together
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6"
                  placeholder="Your message..."
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={status === "loading"}
              className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </div>
          {status === "success" && (
            <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
