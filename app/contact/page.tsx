import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con Marcial y entérate cuando salga el próximo libro.",
};

export default function ContactPage() {
  return <ContactContent />;
}
