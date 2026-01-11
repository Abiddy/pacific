export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
      
      <div className="prose prose-slate max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-lg text-muted-foreground">
            Pacific Auto Body is committed to ensuring digital accessibility for people with disabilities. 
            We are continually improving the user experience for everyone and applying the relevant 
            accessibility standards, including Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Measures to Support Accessibility</h2>
          <p className="text-muted-foreground mb-4">
            We take the following measures to ensure accessibility:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Include accessibility as part of our mission statement.</li>
            <li>Provide continuous accessibility training for our staff.</li>
            <li>Assign clear accessibility targets and responsibilities.</li>
            <li>Employ formal accessibility quality assurance methods.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Conformance Status</h2>
          <p className="text-muted-foreground">
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers 
            to improve accessibility for people with disabilities. It defines three levels of conformance: 
            Level A, Level AA, and Level AAA. <strong>Pacific Auto Body is fully conformant with WCAG 2.1 level AA.</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-muted-foreground">
            Accessibility of Pacific Auto Body relies on the following technologies to work with the 
            particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>

        <section className="bg-muted p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Feedback & Contact</h2>
          <p className="text-muted-foreground mb-6">
            We welcome your feedback on the accessibility of our website. Please let us know if you 
            encounter accessibility barriers:
          </p>
          <ul className="space-y-2">
            <li><strong>Phone:</strong> <a href="tel:4242082113" className="text-primary hover:underline">(424) 208-2113</a></li>
            <li><strong>Email:</strong> <a href="mailto:accessibility@pacificautobody.com" className="text-primary hover:underline">accessibility@pacificautobody.com</a></li>
            <li><strong>Address:</strong> 17014 S. Western Ave, Gardena, CA 90247</li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground italic">
            We try to respond to feedback within 2 business days.
          </p>
        </section>
      </div>
    </div>
  );
}

