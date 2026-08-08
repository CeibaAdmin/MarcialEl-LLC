import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "Autor",
  description: "La historia detrás del seudónimo Marcial.",
};

export default function AboutPage() {
  return <AboutContent />;
}
