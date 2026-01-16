"use client";

import { Button } from "@/components/ui/Button";
import { Phone, MapPin, Clock, Mail, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white text-black font-sans">
      {/* Header */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03)_0%,transparent_70%)]" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Contact <span className="text-black/40">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/70 max-w-2xl mx-auto leading-relaxed">
              Have questions or need an estimate? We're here to help. 
              Reach out via phone, text, or the form below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Contact Information */}
            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-semibold mb-10 tracking-tight">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-black/5 space-y-4 hover:border-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-black/40 mb-1">Call or Text</p>
                      <a href="tel:4242082113" className="text-xl font-semibold hover:text-black/70 transition-colors">
                        (424) 208-2113
                      </a>
                    </div>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-black/5 space-y-4 hover:border-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-black/40 mb-1">Email Us</p>
                      <a href="mailto:info@pacificautobody.com" className="text-xl font-semibold hover:text-black/70 transition-colors break-all">
                        info@pacificautobody.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <h3 className="text-3xl font-semibold tracking-tight">Visit Our Shop</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-black/5 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-black/40 mb-2">Address</p>
                      <p className="text-xl text-black/80 leading-relaxed font-medium">
                        17014 S. Western Ave<br />
                        Gardena, CA 90247
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-black/5 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-black/40 mb-2">Hours of Operation</p>
                      <ul className="text-xl text-black/80 space-y-2 mt-1 font-medium">
                        <li className="flex justify-between gap-12">
                          <span>Mon - Fri</span>
                          <span className="text-black/40">8:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-12">
                          <span>Saturday</span>
                          <span className="text-black/40">8:00 AM - 12:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-12">
                          <span>Sunday</span>
                          <span className="text-red-600 font-semibold">Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder - Premium Light Styling */}
              <div className="w-full aspect-video bg-slate-50 rounded-[3rem] flex items-center justify-center border border-black/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-center p-8 relative z-10">
                  <MapPin className="h-12 w-12 text-black/10 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                  <p className="text-black/30 font-medium uppercase tracking-[0.2em] text-xs">Interactive Map View</p>
                </div>
              </div>
            </div>

            {/* Contact Form - Premium Light Styling */}
            <div className="bg-slate-50 border border-black/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden h-fit shadow-xl shadow-black/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.02] rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-12 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-black mb-6">
                    <MessageSquare className="h-7 w-7" />
                  </div>
                  <h2 className="text-4xl font-semibold tracking-tight text-black">Send a Message</h2>
                  <p className="text-black/40 font-medium">Tell us about your vehicle and the damage.</p>
                </div>
                
                <form className="space-y-8" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                        First Name <span className="text-black/30" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        required
                        aria-required="true"
                        className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                        Last Name <span className="text-black/30" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        required
                        aria-required="true"
                        className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                      Email Address <span className="text-black/30" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                      Reason for Contact
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="estimate">Free Estimate Request</option>
                        <option value="insurance">Insurance Claim Question</option>
                        <option value="status">Repair Status Update</option>
                        <option value="general">General Inquiry</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-black/20">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                      Your Message <span className="text-black/30" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      aria-required="true"
                      className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all resize-none placeholder:text-black/20"
                      placeholder="Tell us about your vehicle..."
                    />
                  </div>

                  <Button type="submit" className="w-full py-8 text-lg rounded-2xl bg-black text-white font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-[10px] text-black/30 text-center uppercase tracking-widest leading-relaxed font-bold">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
