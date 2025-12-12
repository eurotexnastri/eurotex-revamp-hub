import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Eurotex Nastri | Get in Touch</title>
        <meta
          name="description"
          content="Contact Eurotex SRL for inquiries about textile webbings, tapes, and narrow fabrics. Located in Vedano al Lambro, Italy. Request a quote or technical support."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="section-title mb-6 animate-slide-up">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              We're here to help with your textile requirements. 
              Reach out for quotes, technical support, or general inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-2xl font-light text-foreground">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      Via Enrico Fermi 10<br />
                      20854 Vedano al Lambro (MB)<br />
                      Italy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+390000000000" className="hover:text-foreground transition-colors">
                        +39 000 000 0000
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@eurotexnastri.it" className="hover:text-foreground transition-colors">
                        info@eurotexnastri.it
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">P. IVA:</strong> 09835600157
                </p>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-card p-8 rounded-sm shadow-subtle">
              <h2 className="text-xl font-medium text-foreground mb-6">Send a Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="section-container">
          <div className="aspect-video bg-card rounded-sm flex items-center justify-center">
            <p className="text-muted-foreground">
              Map will be integrated here
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
