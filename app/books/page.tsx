import type { Metadata } from "next";
import BooksContent from "@/components/pages/BooksContent";

export const metadata: Metadata = {
  title: "Libros",
  description: "La colección completa de libros de Marcial.",
};

export default function BooksPage() {
  return <BooksContent />;
}
