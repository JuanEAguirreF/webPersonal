import { useEffect, useState } from "react";
import type { Locale } from "../content";

const supportedSpanishRegions = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "ES",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
]);

function detectSpanishRegion() {
  if (typeof navigator === "undefined") {
    return "PE";
  }

  const language = (navigator.languages ?? [navigator.language])
    .find((item) => item.toLowerCase().startsWith("es-"));

  return language?.split("-")[1]?.toUpperCase() ?? "PE";
}

export function useRegionalFlag(locale: Locale) {
  const [spanishRegion, setSpanishRegion] = useState("PE");

  useEffect(() => {
    setSpanishRegion(detectSpanishRegion());
  }, []);

  return locale === "en" ? "US" : supportedSpanishRegions.has(spanishRegion) ? spanishRegion : "PE";
}
