import { HomePage } from "@/components/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createHomeJsonLd, createHomeMetadata } from "@/lib/seo";

export const metadata = createHomeMetadata();

export default function Page() {
  return (
    <>
      <JsonLd data={createHomeJsonLd()} />
      <HomePage />
    </>
  );
}
