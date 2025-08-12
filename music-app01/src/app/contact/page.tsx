"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions, feedback, or just want to say hello? Drop us a message and we’ll get back to you quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-indigo-400" />
              <span className="text-gray-300">contact@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-indigo-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-indigo-400" />
              <span className="text-gray-300">123 Main Street, City, Country</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
