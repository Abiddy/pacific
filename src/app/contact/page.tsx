"use client";

import { Button } from "@/components/ui/Button";
import { Phone, MapPin, Clock, Mail, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-black text-white">
      {/* Header */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Contact <span className="text-white/40">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
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
                  <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4 hover:border-white/20 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-white/40 mb-1">Call or Text</p>
                      <a href="tel:4242082113" className="text-xl font-semibold hover:text-white/80 transition-colors">
                        (424) 208-2113
                      </a>
                    </div>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4 hover:border-white/20 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-white/40 mb-1">Email Us</p>
                      <a href="mailto:info@pacificautobody.com" className="text-xl font-semibold hover:text-white/80 transition-colors break-all">
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
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-white/40 mb-2">Address</p>
                      <p className="text-xl text-white/80 leading-relaxed">
                        17014 S. Western Ave<br />
                        Gardena, CA 90247
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-white/40 mb-2">Hours of Operation</p>
                      <ul className="text-xl text-white/80 space-y-2 mt-1">
                        <li className="flex justify-between gap-12">
                          <span>Mon - Fri</span>
                          <span className="text-white/40">8:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-12">
                          <span>Saturday</span>
                          <span className="text-white/40">8:00 AM - 12:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-12">
                          <span>Sunday</span>
                          <span className="text-red-400/60 font-medium">Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder - Premium Styling */}
              <div className="w-full aspect-video bg-white/5 rounded-[3rem] flex items-center justify-center border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-center p-8 relative z-10">
                  <MapPin className="h-12 w-12 text-white/20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                  <p className="text-white/40 font-medium uppercase tracking-[0.2em] text-xs">Interactive Map View</p>
                </div>
              </div>
            </div>

            {/* Contact Form - Premium Dark Styling */}
            <div className="bg-[#09090b] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden h-fit">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-12 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                    <MessageSquare className="h-7 w-7" />
                  </div>
                  <h2 className="text-4xl font-semibold tracking-tight text-white">Send a Message</h2>
                  <p className="text-white/40">Tell us about your vehicle and the damage.</p>
                </div>
                
                <form className="space-y-8" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1">
                        First Name <span className="text-white/30" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        required
                        aria-required="true"
                        className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder:text-white/20"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1">
                        Last Name <span className="text-white/30" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        required
                        aria-required="true"
                        className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder:text-white/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1">
                      Email Address <span className="text-white/30" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder:text-white/20"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder:text-white/20"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1">
                      Reason for Contact
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all appearance-none cursor-pointer"
                      >
                        <option value="estimate">Free Estimate Request</option>
                        <option value="insurance">Insurance Claim Question</option>
                        <option value="status">Repair Status Update</option>
                        <option value="general">General Inquiry</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1">
                      Your Message <span className="text-white/30" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      aria-required="true"
                      className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all resize-none placeholder:text-white/20"
                      placeholder="Tell us about your vehicle..."
                    />
                  </div>

                  <Button type="submit" className="w-full py-8 text-lg rounded-2xl bg-white text-black font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-[10px] text-white/20 text-center uppercase tracking-widest leading-relaxed">
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
