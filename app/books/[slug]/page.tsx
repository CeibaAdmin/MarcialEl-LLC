import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookDetailContent from "@/components/pages/BookDetailContent";
import { books, getBook } from "@/data/books";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return { title: "Libro no encontrado" };
  return { title: book.titleEs, description: book.tagline.es };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();
  return <BookDetailContent book={book} />;
}
