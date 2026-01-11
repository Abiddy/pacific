import { Button } from "@/components/ui/Button";
import { Phone, MapPin, Clock, Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions or need an estimate? We're here to help. 
            Reach out via phone, text, or the form below.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl bg-muted/30 border space-y-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <p className="font-bold">Call or Text</p>
                    <a href="tel:4242082113" className="text-primary hover:underline font-medium">
                      (424) 208-2113
                    </a>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/30 border space-y-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <p className="font-bold">Email Us</p>
                    <a href="mailto:info@pacificautobody.com" className="text-primary hover:underline font-medium">
                      info@pacificautobody.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">Visit Our Shop</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Address</p>
                    <p className="text-muted-foreground">
                      17014 S. Western Ave<br />
                      Gardena, CA 90247
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Hours of Operation</p>
                    <ul className="text-muted-foreground space-y-1 mt-1">
                      <li>Mon - Fri: 8:00 AM - 5:00 PM</li>
                      <li>Saturday: 8:00 AM - 12:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full aspect-video bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed overflow-hidden">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">Interactive Map Placeholder</p>
                  <p className="text-sm text-muted-foreground/60 italic">Located on S. Western Ave near 170th St.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background border rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="mb-8 flex items-center gap-3 text-primary">
                <MessageSquare className="h-6 w-6" />
                <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
              </div>
              
              <form className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-semibold">
                      First Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-semibold">
                      Last Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email Address <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold">
                    Reason for Contact
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                  >
                    <option value="estimate">Free Estimate Request</option>
                    <option value="insurance">Insurance Claim Question</option>
                    <option value="status">Repair Status Update</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Your Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your vehicle and the damage..."
                  />
                </div>

                <Button type="submit" className="w-full py-6 text-lg rounded-xl">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

