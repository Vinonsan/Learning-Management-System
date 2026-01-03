import type { Metadata } from "next";
import Contactinformation from "./_utils/contactinformation";
import ContactForm from "./_utils/contactform";

export const metadata: Metadata = {
  title: "About Us | Riverside Automotive",
  description:
    "Riverside Automotive provides car sales, rentals, and advisory services in the UK. Learn about our history, values, and the team behind the work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Riverside Automotive",
    description:
      "Car sales, rentals, and advisory services in the UK. Learn about our history, values, and the team behind the work.",
    url: "/about",
    siteName: "Riverside Automotive",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Riverside Automotive",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Riverside Automotive",
    description:
      "Car sales, rentals, and advisory services in the UK. Learn about our history, values, and the team behind the work.",
    images: ["/images/logo.png"],
  },
};

async function getAboutData() {
  return {
    org: {
      name: "Riverside Automotive",
      url: "https://example.com",
      logo: "/assets/images/logo.svg",
      foundingDate: "2012",
      telephone: "+44 20 7946 0123",
      address: {
        streetAddress: "221B Baker Street",
        addressLocality: "London",
        postalCode: "NW1 6XE",
        addressCountry: "UK",
      },
    },
  };
}

export default async function Page() {
  const { org } = await getAboutData();

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    url: org.url,
    logo: org.logo,
    telephone: org.telephone,
    foundingDate: org.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: org.address.streetAddress,
      addressLocality: org.address.addressLocality,
      postalCode: org.address.postalCode,
      addressCountry: org.address.addressCountry,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${org.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${org.url}/about`,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgJsonLd, breadcrumbJsonLd]),
        }}
      />

     <Contactinformation />
     <ContactForm />
    </main>
  );
}
