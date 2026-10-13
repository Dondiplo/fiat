// Cookie consent, stored in the visitor's browser (local storage, not a cookie).
// The site sets no optional cookies today; anything added later (e.g. analytics)
// must check hasOptionalConsent() before running.

export type ConsentChoice = "accepted" | "declined";
type Stored = { choice: ConsentChoice; at: string; version: number };

const KEY = "fj-cookie-consent";
const VERSION = 1; // bump to re-ask everyone if the cookie policy changes materially
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // ask again after 12 months
export const CONSENT_EVENT = "fj:consent-change";
export const OPEN_SETTINGS_EVENT = "fj:open-cookie-settings";

export function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as Stored;
    if (v.version !== VERSION || Date.now() - Date.parse(v.at) > MAX_AGE_MS) return null;
    return v.choice === "accepted" || v.choice === "declined" ? v.choice : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ choice, at: new Date().toISOString(), version: VERSION } satisfies Stored));
  } catch {
    // Storage blocked (private mode etc.): the choice still applies for this page view.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

export const hasOptionalConsent = () => readConsent() === "accepted";

export const openCookieSettings = () => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
