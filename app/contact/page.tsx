import type { Metadata } from "next";
import Container from "@/components/Container";
import NewsletterForm from "@/components/NewsletterForm";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.penName} and hear when the next book is out.`,
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 h-[30rem] w-[30rem] rounded-full bg-burgundy/15 blur-[130px]"
      />
      <Container className="relative grid gap-16 lg:grid-cols-2">
        {/* Newsletter */}
        <div>
          <SectionHeading eyebrow="Stay in the loop" title="The next book" />
          <Reveal index={1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-bone-soft/80">
              New releases are rare and worth the wait. Leave your email and
              you&rsquo;ll be the first to know when the next one arrives — no spam,
              ever.
            </p>
          </Reveal>
          <Reveal index={2}>
            <div className="mt-8 max-w-md">
              <NewsletterForm />
            </div>
          </Reveal>
        </div>

        {/* Direct contact */}
        <div className="lg:border-l lg:border-bone-soft/10 lg:pl-16">
          <SectionHeading eyebrow="Say hello" title="Get in touch" />
          <Reveal index={1}>
            <p className="mt-6 max-w-md leading-relaxed text-bone-soft/80">
              For signed copies, event invitations, press, or rights inquiries,
              reach out directly.
            </p>
          </Reveal>

          <Reveal index={2}>
            <dl className="mt-10 space-y-8 text-sm">
              <div>
                <dt className="text-bone-soft/50">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-gold-light hover:text-gold"
                  >
                    {site.email}
                  </a>
                  <span className="ml-2 text-bone-soft/40">(placeholder)</span>
                </dd>
              </div>
              <div>
                <dt className="text-bone-soft/50">Publisher / rights</dt>
                <dd className="mt-1 font-medium text-bone">
                  Add agent or publisher contact here.
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
