"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { OPEN_SETTINGS_EVENT, readConsent, saveConsent, type ConsentChoice } from "@/lib/consent";
import { Close } from "./icons";

/**
 * First-visit cookie consent banner. Not modal: the page stays usable behind it.
 * Accept and Decline are deliberately equal in weight. Reopened from the footer.
 */
export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const titleId = useId();
  const firstButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Short delay so the banner doesn't compete with the page's first paint.
    const t = readConsent() === null ? setTimeout(() => setOpen(true), 900) : undefined;
    const reopen = () => {
      setLeaving(false);
      setOpen(true);
      setTimeout(() => firstButton.current?.focus(), 50);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => {
      clearTimeout(t);
      window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
    };
  }, []);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    saveConsent(choice);
    setLeaving(true);
    setTimeout(() => setOpen(false), 250);
  };

  return (
    <div
      role="dialog"
      aria-labelledby={titleId}
      aria-live="polite"
      className={`cookie-banner fixed inset-x-0 bottom-0 z-[55] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:p-0 ${leaving ? "is-leaving" : ""}`}
    >
      <div className="relative rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-20px_rgba(11,31,77,0.45)] sm:w-[26rem] sm:p-6">
        <button onClick={() => choose("declined")} className="absolute top-2.5 right-2.5 grid size-10 place-items-center rounded-full text-muted hover:bg-canvas hover:text-navy-900" aria-label="Decline and close">
          <Close className="size-4" />
        </button>
        <p id={titleId} className="pr-8 text-lg font-semibold tracking-tight text-navy-900">
          Your privacy
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          We only store this choice on your device. With your permission, we may also use optional cookies to understand how visitors use our website. You can change your mind at any time.{" "}
          <Link href="/cookie-policy" className="font-semibold text-navy-900 underline decoration-gold underline-offset-4">
            Cookie policy
          </Link>
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button ref={firstButton} onClick={() => choose("declined")} className="btn btn-primary !min-h-11 !px-4">
            Decline
          </button>
          <button onClick={() => choose("accepted")} className="btn btn-primary !min-h-11 !px-4">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
