import { useEffect } from "react";
import type { Locale, SeoContent } from "../content";

function setMeta(selector: string, attribute: "content" | "href", value: string) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

export function useSeo(locale: Locale, seo: SeoContent) {
  useEffect(() => {
    const url = window.location.origin + window.location.pathname;

    document.title = seo.title;
    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('meta[name="keywords"]', "content", seo.keywords.join(", "));
    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:locale"]', "content", locale === "es" ? "es_PE" : "en_US");
    setMeta('meta[name="twitter:title"]', "content", seo.title);
    setMeta('meta[name="twitter:description"]', "content", seo.description);
    setMeta('link[rel="canonical"]', "href", url);

    const schema = document.getElementById("person-schema");
    if (schema) {
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": `${url}#person`,
            name: "Juan Aguirre",
            jobTitle: seo.jobTitle,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lima",
              addressCountry: "PE",
            },
            email: "info@webmasterpersonal.com",
            knowsAbout: seo.keywords,
            url,
          },
          {
            "@type": "Organization",
            "@id": `${url}#organization`,
            name: "Webmaster Personal",
            url,
            founder: { "@id": `${url}#person` },
          },
          {
            "@type": "WebSite",
            "@id": `${url}#website`,
            name: "Juan Aguirre Portfolio",
            url,
            inLanguage: ["es-PE", "en-US"],
            publisher: { "@id": `${url}#person` },
          },
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: seo.title,
            isPartOf: { "@id": `${url}#website` },
            about: { "@id": `${url}#person` },
            author: { "@id": `${url}#person` },
            publisher: { "@id": `${url}#person` },
            mainEntity: { "@id": `${url}#person` },
            dateModified: seo.dateModified,
            inLanguage: locale === "es" ? "es-PE" : "en-US",
          },
        ],
      });
    }
  }, [locale, seo]);
}
