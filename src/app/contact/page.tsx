"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Phone, MapPin, Clock, Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Upload, X as CloseIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // File states
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    vinPicture: null,
    damagedArea1: null,
    damagedArea2: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files[0]) {
      setFiles(prev => ({ ...prev, [fieldName]: e.target.files![0] }));
      // Clear error when file is selected
      setErrors(prev => ({ ...prev, [fieldName]: "" }));
    }
  };

  const removeFile = (fieldName: string) => {
    setFiles(prev => ({ ...prev, [fieldName]: null }));
  };

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};
    const requiredFields = [
      { name: "first-name", label: "First Name" },
      { name: "last-name", label: "Last Name" },
      { name: "email", label: "Email Address" },
      { name: "phone", label: "Phone Number" },
      { name: "vehicle-make", label: "Vehicle Make" },
      { name: "vehicle-model", label: "Model" },
      { name: "vehicle-year", label: "Year" },
      { name: "vin", label: "17 Digit VIN" },
    ];

    requiredFields.forEach(field => {
      if (!formData.get(field.name)) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    const email = formData.get("email") as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors["email"] = "Please enter a valid email address";
    }

    const vin = formData.get("vin") as string;
    if (vin && vin.length !== 17) {
      newErrors["vin"] = "VIN must be exactly 17 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");
    
    const formData = new FormData(e.currentTarget);
    
    if (!validateForm(formData)) {
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      if (firstErrorField instanceof HTMLElement) firstErrorField.focus();
      return;
    }

    setIsSubmitting(true);
    
    // Add files to formData
    if (files.vinPicture) formData.append("vinPicture", files.vinPicture);
    if (files.damagedArea1) formData.append("damagedArea1", files.damagedArea1);
    if (files.damagedArea2) formData.append("damagedArea2", files.damagedArea2);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        formRef.current?.reset();
        setFiles({ vinPicture: null, damagedArea1: null, damagedArea2: null });
        setErrors({});
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
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03)_0%,transparent_70%)]" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8">
              Contact <span className="text-black/40">Us</span>
            </h1>
            <p className="text-lg md:text-2xl text-black/70 max-w-2xl mx-auto leading-relaxed">
              Have questions or need an estimate? We're here to help. 
              Reach out via phone, text, or the form below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
            
            {/* Contact Form - Now the Main Hero of this page */}
            <div className="bg-white/40 backdrop-blur-xl border border-black/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 relative overflow-hidden shadow-2xl shadow-black/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.02] rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-8 md:mb-12 space-y-4 text-center md:text-left">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-black mb-4 md:mb-6 mx-auto md:mx-0">
                    <MessageSquare className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">Send a Message</h2>
                  <p className="text-black/40 font-medium text-base md:text-lg italic">Tell us about your vehicle and the damage.</p>
                </div>
                
                <form ref={formRef} className="space-y-6 md:space-y-8" onSubmit={handleSubmit} noValidate>
                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-4 text-green-800"
                        role="alert"
                        aria-live="polite"
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
                        role="alert"
                        aria-live="assertive"
                      >
                        <AlertCircle className="h-6 w-6 shrink-0" />
                        <p className="font-medium">Something went wrong. Please try again or call us.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2 md:space-y-3">
                      <label htmlFor="first-name" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                        First Name <span className="text-red-600" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        required
                        aria-required="true"
                        aria-invalid={!!errors["first-name"]}
                        aria-describedby={errors["first-name"] ? "first-name-error" : undefined}
                        className={cn(
                          "w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border bg-white text-black focus:outline-none focus:ring-2 transition-all placeholder:text-black/20 text-sm md:text-base",
                          errors["first-name"] ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-black/10 focus:ring-black/5 focus:border-black/20"
                        )}
                        placeholder="Jane"
                      />
                      {errors["first-name"] && (
                        <p id="first-name-error" className="text-xs text-red-600 ml-1 font-medium" role="alert">
                          {errors["first-name"]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label htmlFor="last-name" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                        Last Name <span className="text-red-600" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        required
                        aria-required="true"
                        aria-invalid={!!errors["last-name"]}
                        aria-describedby={errors["last-name"] ? "last-name-error" : undefined}
                        className={cn(
                          "w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border bg-white text-black focus:outline-none focus:ring-2 transition-all placeholder:text-black/20 text-sm md:text-base",
                          errors["last-name"] ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-black/10 focus:ring-black/5 focus:border-black/20"
                        )}
                        placeholder="Doe"
                      />
                      {errors["last-name"] && (
                        <p id="last-name-error" className="text-xs text-red-600 ml-1 font-medium" role="alert">
                          {errors["last-name"]}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2 md:space-y-3">
                      <label htmlFor="email" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                        Email Address <span className="text-red-600" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        aria-required="true"
                        aria-invalid={!!errors["email"]}
                        aria-describedby={errors["email"] ? "email-error" : undefined}
                        className={cn(
                          "w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border bg-white text-black focus:outline-none focus:ring-2 transition-all placeholder:text-black/20 text-sm md:text-base",
                          errors["email"] ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-black/10 focus:ring-black/5 focus:border-black/20"
                        )}
                        placeholder="jane@example.com"
                      />
                      {errors["email"] && (
                        <p id="email-error" className="text-xs text-red-600 ml-1 font-medium" role="alert">
                          {errors["email"]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label htmlFor="phone" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                        Phone Number <span className="text-red-600" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        aria-required="true"
                        aria-invalid={!!errors["phone"]}
                        aria-describedby={errors["phone"] ? "phone-error" : undefined}
                        className={cn(
                          "w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border bg-white text-black focus:outline-none focus:ring-2 transition-all placeholder:text-black/20 text-sm md:text-base",
                          errors["phone"] ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-black/10 focus:ring-black/5 focus:border-black/20"
                        )}
                        placeholder="(555) 000-0000"
                      />
                      {errors["phone"] && (
                        <p id="phone-error" className="text-xs text-red-600 ml-1 font-medium" role="alert">
                          {errors["phone"]}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div className="pt-6 md:pt-8 border-t border-black/5">
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-widest text-black/40 mb-4 md:mb-6">Vehicle Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                      <div className="space-y-2 md:space-y-3">
                        <label htmlFor="vehicle-make" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                          Vehicle Make <span className="text-red-600" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          type="text"
                          id="vehicle-make"
                          name="vehicle-make"
                          required
                          aria-required="true"
                          aria-invalid={!!errors["vehicle-make"]}
                          aria-describedby={errors["vehicle-make"] ? "vehicle-make-error" : undefined}
                          className={cn(
                            "w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border bg-white text-black focus:outline-none focus:ring-2 transition-all placeholder:text-black/20 text-sm md:text-base",
                            errors["vehicle-make"] ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-black/10 focus:ring-black/5 focus:border-black/20"
                          )}
                          placeholder="Toyota"
                        />
                        {errors["vehicle-make"] && (
                          <p id="vehicle-make-error" className="text-xs text-red-600 ml-1 font-medium" role="alert">
                            {errors["vehicle-make"]}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        <label htmlFor="vehicle-model" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                          Model <span className="text-red-600" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          type="text"
                          id="vehicle-model"
                          name="vehicle-model"
                          required
                          aria-required="true"
                          aria-invalid={!!errors["vehicle-model"]}
                          aria-describedby={errors["vehicle-model"] ? "vehicle-model-error" : undefined}
                          className={cn(
                            "w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border bg-white text-black focus:outline-none focus:ring-2 transition-all placeholder:text-black/20 text-sm md:text-base",
                            errors["vehicle-model"] ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-black/10 focus:ring-black/5 focus:border-black/20"
                          )}
                          placeholder="Camry"
                        />
                        {errors["vehicle-model"] && (
                          <p id="vehicle-model-error" className="text-xs text-red-600 ml-1 font-medium" role="alert">
                            {errors["vehicle-model"]}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        <label htmlFor="vehicle-year" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                          Year <span className="text-red-600" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          type="text"
                          id="vehicle-year"
                          name="vehicle-year"
                          required
                          aria-required="true"
                          aria-invalid={!!errors["vehicle-year"]}
                          aria-describedby={errors["vehicle-year"] ? "vehicle-year-error" : undefined}
                          className={cn(
                            "w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border bg-white text-black focus:outline-none focus:ring-2 transition-all placeholder:text-black/20 text-sm md:text-base",
                            errors["vehicle-year"] ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-black/10 focus:ring-black/5 focus:border-black/20"
                          )}
                          placeholder="2022"
                        />
                        {errors["vehicle-year"] && (
                          <p id="vehicle-year-error" className="text-xs text-red-600 ml-1 font-medium" role="alert">
                            {errors["vehicle-year"]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2 md:space-y-3">
                      <label htmlFor="vin" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                        17 Digit VIN <span className="text-red-600" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        type="text"
                        id="vin"
                        name="vin"
                        required
                        aria-required="true"
                        aria-invalid={!!errors["vin"]}
                        aria-describedby={errors["vin"] ? "vin-error" : undefined}
                        maxLength={17}
                        className={cn(
                          "w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border bg-white text-black focus:outline-none focus:ring-2 transition-all placeholder:text-black/20 text-sm md:text-base",
                          errors["vin"] ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-black/10 focus:ring-black/5 focus:border-black/20"
                        )}
                        placeholder="17 character VIN"
                      />
                      {errors["vin"] && (
                        <p id="vin-error" className="text-xs text-red-600 ml-1 font-medium" role="alert">
                          {errors["vin"]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label htmlFor="insurance" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                        Insurance Company
                      </label>
                      <input
                        type="text"
                        id="insurance"
                        name="insurance"
                        className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-black/20 text-sm md:text-base"
                        placeholder="State Farm, GEICO, etc."
                      />
                    </div>
                  </div>

                  {/* File Uploads */}
                  <div className="pt-6 md:pt-8 border-t border-black/5 space-y-6 md:space-y-8">
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-widest text-black/40 mb-2">Damage Documentation</h3>
                    
                    <div className="space-y-4 md:space-y-6">
                      {[
                        { id: "vinPicture", label: "Picture of VIN", required: false },
                        { id: "damagedArea1", label: "Damaged Area 1", required: false },
                        { id: "damagedArea2", label: "Damaged Area 2", required: false },
                      ].map((upload) => (
                        <div key={upload.id} className="space-y-2 md:space-y-3">
                          <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                            {upload.label} {upload.required && <span className="text-red-600">*</span>}
                          </label>
                          <div className="relative">
                            {!files[upload.id] ? (
                              <label className="flex flex-col items-center justify-center w-full h-24 md:h-32 border-2 border-dashed border-black/10 rounded-[1.5rem] md:rounded-[2rem] hover:border-black/20 hover:bg-black/[0.02] transition-all cursor-pointer group">
                                <div className="flex flex-col items-center justify-center pt-2 md:pt-5 pb-3 md:pb-6">
                                  <Upload className="h-6 w-6 md:h-8 md:w-8 text-black/20 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                                  <p className="text-xs md:text-sm text-black/40 font-medium">Choose file or drag here</p>
                                </div>
                                <input 
                                  type="file" 
                                  className="hidden" 
                                  accept="image/*"
                                  onChange={(e) => handleFileChange(e, upload.id)}
                                />
                              </label>
                            ) : (
                              <div className="flex items-center justify-between p-4 md:p-6 bg-black/5 rounded-[1.5rem] md:rounded-[2rem] border border-black/10">
                                <div className="flex items-center gap-3 md:gap-4">
                                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                                  </div>
                                  <div>
                                    <p className="font-bold text-xs md:text-sm text-black truncate max-w-[150px] md:max-w-[200px]">
                                      {files[upload.id]?.name}
                                    </p>
                                    <p className="text-[9px] md:text-xs text-black/40 uppercase tracking-widest font-bold">
                                      {(files[upload.id]!.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                  </div>
                                </div>
                                <button 
                                  type="button"
                                  onClick={() => removeFile(upload.id)}
                                  className="p-2 md:p-3 hover:bg-black/5 rounded-full text-black/40 hover:text-red-600 transition-colors"
                                  aria-label={`Remove ${upload.label}`}
                                >
                                  <CloseIcon className="h-4 w-4 md:h-5 md:w-5" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label htmlFor="subject" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                      Reason for Contact
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all appearance-none cursor-pointer font-medium text-sm md:text-base"
                      >
                        <option value="estimate">Free Estimate Request</option>
                        <option value="insurance">Insurance Claim Question</option>
                        <option value="status">Repair Status Update</option>
                        <option value="general">General Inquiry</option>
                      </select>
                      <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-black/20">
                        <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label htmlFor="message" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/60 ml-1">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all resize-none placeholder:text-black/20 text-sm md:text-base"
                      placeholder="Any additional details about the damage or special requests..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-6 md:py-8 text-base md:text-lg rounded-xl md:rounded-2xl bg-black text-white font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed h-12 md:h-16"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />}
                  </Button>
                  
                  <p className="text-[10px] text-black/30 text-center uppercase tracking-widest leading-relaxed font-bold">
                    By submitting this form, you agree to our <Link href="/privacy" className="underline hover:text-black transition-colors">privacy policy</Link> and <Link href="/terms" className="underline hover:text-black transition-colors">terms of service</Link>.
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
