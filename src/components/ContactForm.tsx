"use client";

import { useState } from "react";
import { practicesByName } from "@/data/practices";
import { site } from "@/data/site";

const field = "mt-1.5 block h-12 w-full rounded-sm border border-line bg-white px-4 text-base outline-none transition focus:border-navy-900";

/**
 * No backend is wired up yet: submitting opens the visitor's mail client with
 * the enquiry pre-filled. Swap `onSubmit` for a server action or form service.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent)
    return (
      <div className="rounded-sm border border-navy-900/20 bg-navy-50 p-8" role="status">
        <p className="font-semibold tracking-tight text-3xl text-navy-900">Thank you.</p>
        <p className="mt-2 text-muted">Your email client should have opened with your enquiry. A member of our team will reply within one working day.</p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-navy-900 underline decoration-gold underline-offset-4">
          Send another enquiry
        </button>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const body = `Name: ${d.get("name")}\nOrganisation: ${d.get("org")}\nPhone: ${d.get("phone")}\nArea: ${d.get("area")}\n\n${d.get("message")}`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <label className="text-sm font-semibold text-navy-900">
        Full name *
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="text-sm font-semibold text-navy-900">
        Organisation
        <input name="org" autoComplete="organization" className={field} />
      </label>
      <label className="text-sm font-semibold text-navy-900">
        Email *
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="text-sm font-semibold text-navy-900">
        Phone
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="text-sm font-semibold text-navy-900 sm:col-span-2">
        How can we help?
        <select name="area" className={field} defaultValue="">
          <option value="">Select a practice area (optional)</option>
          {practicesByName.map((p) => (
            <option key={p.slug}>{p.name}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-semibold text-navy-900 sm:col-span-2">
        Message *
        <textarea name="message" required rows={5} className={`${field} h-auto py-3`} />
      </label>
      <p className="text-xs leading-relaxed text-muted sm:col-span-2">
        Please don’t include confidential information until we have confirmed we can act for you. Sending an enquiry does not create a lawyer–client relationship.
      </p>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Send enquiry
        </button>
      </div>
    </form>
  );
}
