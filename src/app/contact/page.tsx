"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Phone, MapPin, Clock, Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Upload, X as CloseIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // File states
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    vinPicture: null,
    damagedArea1: null,
    damagedArea2: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files[0]) {
      setFiles(prev => ({ ...prev, [fieldName]: e.target.files![0] }));
    }
  };

  const removeFile = (fieldName: string) => {
    setFiles(prev => ({ ...prev, [fieldName]: null }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    
    // Add files to formData
    if (files.vinPicture) formData.append("vinPicture", files.vinPicture);
    if (files.damagedArea1) formData.append("damagedArea1", files.damagedArea1);
    if (files.damagedArea2) formData.append("damagedArea2", files.damagedArea2);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData, // Send as FormData to handle files
      });

      if (response.ok) {
        setSubmitStatus("success");
        formRef.current?.reset();
        setFiles({ vinPicture: null, damagedArea1: null, damagedArea2: null });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full text-black font-sans">
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

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-24">
            
            {/* Contact Form - Now the Main Hero of this page */}
            <div className="bg-white/40 backdrop-blur-xl border border-black/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-black/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.02] rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-12 space-y-4 text-center md:text-left">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-black mb-6 mx-auto md:mx-0">
                    <MessageSquare className="h-7 w-7" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">Send a Message</h2>
                  <p className="text-black/40 font-medium text-lg italic">Tell us about your vehicle and the damage.</p>
                </div>
                
                <form ref={formRef} className="space-y-8" onSubmit={handleSubmit} noValidate>
                  {/* ... form content ... */}
                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-4 text-green-800"
                      >
                        <CheckCircle2 className="h-6 w-6 shrink-0" />
                        <p className="font-medium">Message sent! We'll get back to you shortly.</p>
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-4 text-red-800"
                      >
                        <AlertCircle className="h-6 w-6 shrink-0" />
                        <p className="font-medium">Something went wrong. Please try again or call us.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        Phone Number <span className="text-black/30" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        aria-required="true"
                        className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div className="pt-8 border-t border-black/5">
                    <h3 className="text-lg font-bold uppercase tracking-widest text-black/40 mb-6">Vehicle Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="vehicle-make" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                          Vehicle Make <span className="text-black/30" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="vehicle-make"
                          name="vehicle-make"
                          required
                          className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20"
                          placeholder="Toyota"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="vehicle-model" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                          Model <span className="text-black/30" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="vehicle-model"
                          name="vehicle-model"
                          required
                          className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20"
                          placeholder="Camry"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="vehicle-year" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                          Year <span className="text-black/30" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="vehicle-year"
                          name="vehicle-year"
                          required
                          className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20"
                          placeholder="2022"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="vin" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                        17 Digit VIN <span className="text-black/30" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="vin"
                        name="vin"
                        required
                        maxLength={17}
                        className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20"
                        placeholder="17 character VIN"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="insurance" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                        Insurance Company
                      </label>
                      <input
                        type="text"
                        id="insurance"
                        name="insurance"
                        className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20"
                        placeholder="State Farm, GEICO, etc."
                      />
                    </div>
                  </div>

                  {/* File Uploads */}
                  <div className="pt-8 border-t border-black/5 space-y-8">
                    <h3 className="text-lg font-bold uppercase tracking-widest text-black/40 mb-2">Damage Documentation</h3>
                    
                    <div className="space-y-6">
                      {[
                        { id: "vinPicture", label: "Picture of VIN", required: false },
                        { id: "damagedArea1", label: "Damaged Area 1", required: false },
                        { id: "damagedArea2", label: "Damaged Area 2", required: false },
                      ].map((upload) => (
                        <div key={upload.id} className="space-y-3">
                          <label className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                            {upload.label} {upload.required && <span className="text-black/30">*</span>}
                          </label>
                          <div className="relative">
                            {!files[upload.id] ? (
                              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-black/10 rounded-[2rem] hover:border-black/20 hover:bg-black/[0.02] transition-all cursor-pointer group">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Upload className="h-8 w-8 text-black/20 mb-3 group-hover:scale-110 transition-transform" />
                                  <p className="text-sm text-black/40 font-medium">Choose file or drag here</p>
                                </div>
                                <input 
                                  type="file" 
                                  className="hidden" 
                                  accept="image/*"
                                  onChange={(e) => handleFileChange(e, upload.id)}
                                />
                              </label>
                            ) : (
                              <div className="flex items-center justify-between p-6 bg-black/5 rounded-[2rem] border border-black/10">
                                <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                                  </div>
                                  <div>
                                    <p className="font-bold text-sm text-black truncate max-w-[200px]">
                                      {files[upload.id]?.name}
                                    </p>
                                    <p className="text-xs text-black/40 uppercase tracking-widest font-bold">
                                      {(files[upload.id]!.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                  </div>
                                </div>
                                <button 
                                  type="button"
                                  onClick={() => removeFile(upload.id)}
                                  className="p-3 hover:bg-black/5 rounded-full text-black/40 hover:text-red-600 transition-colors"
                                >
                                  <CloseIcon className="h-5 w-5" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                      Reason for Contact
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all appearance-none cursor-pointer font-medium"
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
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all resize-none placeholder:text-black/20"
                      placeholder="Any additional details about the damage or special requests..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-8 text-lg rounded-2xl bg-black text-white font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                  </Button>
                  
                  <p className="text-[10px] text-black/30 text-center uppercase tracking-widest leading-relaxed font-bold">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>

            {/* Simplified Contact Info Section below the form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-black/5">
              {/* Phone/Email */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-black/40">Get In Touch</h3>
                <div className="space-y-2">
                  <a href="tel:4242082113" className="block text-xl font-bold hover:text-black/60 transition-colors uppercase italic tracking-tighter">(424) 208-2113</a>
                  <a href="mailto:info@pacificautobody.com" className="block text-sm font-medium text-black/60 hover:text-black transition-colors">info@pacificautobody.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-black/40">Visit Our Shop</h3>
                <div className="space-y-1">
                  <p className="text-xl font-bold uppercase italic tracking-tighter">17014 S. Western Ave</p>
                  <p className="text-sm font-medium text-black/60">Gardena, CA 90247</p>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-black/40">Hours</h3>
                <div className="space-y-1 text-sm font-medium text-black/60">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span className="text-black font-bold">8AM - 5PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-black font-bold">8AM - 12PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
