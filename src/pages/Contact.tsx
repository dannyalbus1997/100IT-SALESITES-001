import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "../constants/company";

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Ready to upgrade your IT? Our experts are standing by to help you find the perfect solution.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-zinc-50 p-8 lg:p-12 rounded-3xl border border-zinc-100"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">Message Sent!</h2>
                  <p className="text-zinc-600">
                    Thank you for reaching out. One of our IT specialists will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">Company Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="Acme Ltd"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">Service Interested In</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Services</option>
                      <option>IT Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your IT needs..."
                    />
                  </div>
                  <div className="flex items-start space-x-3">
                    <input required type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-xs text-zinc-500">
                      I consent to Assure Supported Living processing my personal data in accordance with the Privacy Policy.
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center shadow-lg shadow-indigo-100"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Registered Office</p>
                      <p className="text-zinc-600">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Phone Number</p>
                      <p className="text-zinc-600">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Email Address</p>
                      <p className="text-zinc-600">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Business Hours</p>
                      <p className="text-zinc-600">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-zinc-100 rounded-3xl border border-zinc-200 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 flex-col">
                  <MapPin className="h-12 w-12 mb-2 opacity-20" />
                  <p className="text-sm font-medium">Interactive Map Placeholder</p>
                  <p className="text-xs">Covent Garden, London</p>
                </div>
                <img
                  src="https://picsum.photos/seed/london-map/800/450?blur=2"
                  className="w-full h-full object-cover opacity-40"
                  alt="Map Location"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
