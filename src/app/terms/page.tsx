import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Pacific Auto Body",
  description: "Conditions of using our website and intellectual property rights.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full text-black font-sans bg-white">
      {/* Page Header */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)]" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Terms & <span className="text-black/40">Conditions</span>
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-medium">
            Conditions of using our website. Revised April 2021.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg prose-black max-w-none space-y-12">
            
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                1. This website promotes the business referred to on it. In these conditions, the business will be referred to as ‘we’ and/or ’our’.
              </p>
              
              <div className="space-y-4">
                <p className="text-xl leading-relaxed">
                  2. A wide range of intellectual property rights are used in and relating to this website, including:
                </p>
                <ul className="list-none space-y-2 pl-6">
                  <li className="flex gap-4">
                    <span className="font-bold text-black/40">a.</span>
                    <span>the trademarks and logos;</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-black/40">b.</span>
                    <span>the design, text, graphics and other content of the web pages on this website, together with all the web addresses associated with those web pages; and</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-black/40">c.</span>
                    <span>all the software used in relation to this website.</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl leading-relaxed">
                3. We are the owner or the authorized licensee of these intellectual property rights. You agree not to copy any content (including images) on this website without our consent.
              </p>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">About these conditions</h2>
              <p className="text-xl leading-relaxed">
                4. If you access or use any part of this website you agree to these conditions. If you do not want to agree to these conditions, do not access or use this website.
              </p>
              <p className="text-xl leading-relaxed">
                5. We may change these conditions at any time without giving you notice. Please check these conditions from time to time for any changes. By continuing to use the website you agree to all the changes we make to these conditions.
              </p>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">Using this website</h2>
              <p className="text-xl leading-relaxed">
                6. We collect and use information in line with our Privacy Policy. By using this website, you agree to the way in which we collect and use your information.
              </p>
              <div className="space-y-4">
                <p className="text-xl leading-relaxed">
                  7. You cannot use this website:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-black/70">
                  <li>for any unlawful purpose;</li>
                  <li>to send spam;</li>
                  <li>to harm, threaten, abuse or harass another person, or in a way that invades someone's privacy or is (in our reasonable opinion) offensive or is unacceptable or damaging to us, our customers or suppliers;</li>
                  <li>to create, check, confirm, update or amend your own or someone else's databases, records, directories, customer lists, mailing or prospecting lists;</li>
                  <li>to tamper with, update or change any part of the website;</li>
                  <li>in a way that affects how it is run;</li>
                  <li>in a way that imposes an unreasonable or disproportionably large burden on our or our suppliers' communications and technical systems as determined by us; or</li>
                  <li>using any automated means to monitor or copy the website or its content, or to interfere with or attempt to interfere with how the website works.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">If you provide content for this website</h2>
              <p className="text-xl leading-relaxed">
                8. If you provide any material to this website (for example, by providing ratings and reviews, comments, articles, or uploading any other content in any format (including video)) (each “User Content”), you agree to grant us permission, irrevocably and free of charge, to use User Content (including altering and adapting it for operational or editorial reasons) in any media worldwide, for our own marketing, research and promotional activities and our internal business purposes which may include providing the User Content to selected third party partners, service providers, social media and networking sites. By posting ratings and reviews, you agree to our Guidelines for Ratings and Reviews.
              </p>
              <p className="text-xl leading-relaxed">
                9. You own your User Content at all times, and you continue to have the right to use it in any way you choose.
              </p>
              <div className="space-y-4">
                <p className="text-xl leading-relaxed">
                  10. By providing any User Content to the Website you confirm that your User Content:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-black/70">
                  <li>is your own original work or you are authorized to provide it to the Website and that you have the right to give us permission to use it for the purposes set out in these terms;</li>
                  <li>will not contain or promote anything illegal, harmful, misleading, abusive, defamatory (that is, it does not damage someone's good reputation) or anything else that might cause widespread offence or bring us or our business partners into disrepute;</li>
                  <li>does not take away or affect any other person's privacy rights, contract rights or any other rights;</li>
                  <li>does not contain any virus or other code that may damage, interfere with or otherwise adversely affect the operation of the Website;</li>
                  <li>will, if used to promote your own business or services, clearly and openly state your association with the particular business expressly;</li>
                  <li>will not contain any form of mass-mailing or spam.</li>
                </ul>
              </div>
              <p className="text-xl leading-relaxed">
                11. If you do not want to grant us the permissions set out above, please do not provide any material to the Website.
              </p>
              <p className="text-xl leading-relaxed">
                12. We have no obligation to publish your User Content on the Website and we retain the right to remove any User Content at any time and for any reason.
              </p>
              <p className="text-xl leading-relaxed">
                13. We do not edit, pre-vet or review any User Content displayed on the Website. If you believe that any User Content does not comply with the requirements set out in this paragraph, please notify us immediately. We will then review the User Content and, where we deem it appropriate, remove it within a reasonable time.
              </p>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">If you send a message through this website</h2>
              <p className="text-xl leading-relaxed">
                14. This website is provided by Hibu Inc. ("Hibu"). Hibu shall have the right to scan messages sent using the contact form on this website manually and automatically and to store such messages. Any personal data you include in such messages may be (a) used by Hibu for purposes reasonably associated with provision of this website and services, (b) disclosed where disclosure is required by law, and (c) used where any of your actions have breached these Conditions of Use. Personal data may be used by Hibu in an aggregated form as permitted by applicable law.
              </p>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">Disclaimers</h2>
              <p className="text-xl leading-relaxed">
                15. You use the website at your own risk.
              </p>
              <p className="text-xl leading-relaxed">
                16. You should not rely on the website for advice.
              </p>
              <div className="space-y-4">
                <p className="text-xl leading-relaxed">
                  17. As far as the relevant laws allow, we do not guarantee that:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-black/70">
                  <li>there will be no problems with how you use the website; or</li>
                  <li>the computer or server you use to log on to the website is free of viruses or other harmful programs.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">Limits to our liability</h2>
              <div className="space-y-4">
                <p className="text-xl leading-relaxed">
                  18. Under no circumstances will we, the owner or operator of this website, or any of their group companies, employees, officers or agents, or any other organization involved in creating, producing, maintaining or distributing the website be liable for any loss of:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-black/70">
                  <li>profits;</li>
                  <li>business or business opportunities;</li>
                  <li>savings you expect to make;</li>
                  <li>goodwill;</li>
                  <li>use of, or corruption to information; or</li>
                  <li>information.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-xl leading-relaxed">
                  19. If we do not keep to these conditions, they will only be liable for losses you have suffered as a direct result. We are not liable to you for any other losses whether such losses are because we have not kept to our obligations or contract, because of something we have done or not done in negligence, due to defamatory statements or liability for a product or otherwise as a result of:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-black/70">
                  <li>using or relying on the website;</li>
                  <li>not being able to use the website;</li>
                  <li>any mistake, fault, failure to do something, missing information, or virus on the website or if it does not work properly because of incidents outside of our control such as (but not limited to) interruptions to communication and networks and circumstances beyond our control;</li>
                  <li>theft, destruction of information or someone getting access to our records, programs or services without our permission;</li>
                  <li>goods, products, services or information received through or advertised on any website which we link to from this website; or</li>
                  <li>any information, data, message or other material which you email, post, upload, reproduce, send, or otherwise distribute or receive using the website.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">The whole agreement</h2>
              <p className="text-xl leading-relaxed">
                20. These conditions make up the whole agreement between you and us in how you use the website. If a court decides that a condition is not valid, the rest of the conditions will still apply.
              </p>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">The law</h2>
              <p className="text-xl leading-relaxed">
                21. The laws of the state of New York (without reference to its conflict of laws principles) apply to your use of the website and these conditions. We control the website from within the United States. However, you can get access to the website from other places around the world. Although, these places may have different laws from the laws of the state of New York, by using the website you agree that the laws of the state of New York will apply to everything relating to you using the website and you agree to keep to these laws. We have the right to take you to court in the country and/ or state that you live in.
              </p>
            </div>

            <div className="pt-20 text-center text-black/30 font-bold uppercase tracking-widest text-sm">
              <p>© All rights reserved</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
