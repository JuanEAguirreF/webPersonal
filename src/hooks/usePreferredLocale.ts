import { useEffect, useState } from "react";
import type { Locale } from "../content";

const STORAGE_KEY = "juan-aguirre-locale";

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") {
    return "es";
  }

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const firstSupported = languages.find((language) => {
    const normalized = language.toLowerCase();
    return normalized.startsWith("en") || normalized.startsWith("es");
  });

  return firstSupported?.toLowerCase().startsWith("en") ? "en" : "es";
}

function getUrlLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null;
  }

  const lang = new URLSearchParams(window.location.search).get("lang")?.toLowerCase();
  return lang === "en" || lang === "es" ? lang : null;
}

export function usePreferredLocale() {
  const [browserLocale, setBrowserLocale] = useState<Locale>(() => detectBrowserLocale());
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "es";
    }

    const urlLocale = getUrlLocale();
    if (urlLocale) {
      return urlLocale;
    }

    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    return storedLocale === "en" || storedLocale === "es" ? storedLocale : detectBrowserLocale();
  });

  useEffect(() => {
    setBrowserLocale(detectBrowserLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  return {
    browserLocale,
    locale,
    setLocale: setLocaleState,
  };
}
