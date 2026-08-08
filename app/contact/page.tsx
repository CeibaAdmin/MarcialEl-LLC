import type { Metadata } from "next";
import Container from "@/components/Container";
import NewsletterForm from "@/components/NewsletterForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.penName} and hear when the next book is out.`,
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-16 lg:grid-cols-2">
        {/* Newsletter */}
        <div>
          <p className="eyebrow">Stay in the loop</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold text-ink">
            The next book
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
            New releases are rare and worth the wait. Leave your email and
            you&rsquo;ll be the first to know when the next one arrives — no spam,
            ever.
          </p>
          <div className="mt-8 max-w-md">
            <NewsletterForm />
          </div>
        </div>

        {/* Direct contact */}
        <div className="lg:border-l lg:border-ink/10 lg:pl-16">
          <p className="eyebrow">Say hello</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink">
            Get in touch
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
            For signed copies, event invitations, press, or rights inquiries,
            reach out directly.
          </p>

          <dl className="mt-8 space-y-6 text-sm">
            <div>
              <dt className="text-ink-faint">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-burgundy hover:text-burgundy-dark"
                >
                  {site.email}
                </a>
                <span className="ml-2 text-ink-faint">(placeholder)</span>
              </dd>
            </div>
            <div>
              <dt className="text-ink-faint">Publisher / rights</dt>
              <dd className="mt-1 font-medium text-ink">
                Add agent or publisher contact here.
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
