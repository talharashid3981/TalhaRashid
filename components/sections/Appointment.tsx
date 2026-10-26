"use client";

import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Search,
  CircleCheck,
  Mail,
  UserRound,
} from "lucide-react";
import { getCountryData } from "countries-list";
import {
  getCountries,
  getCountryCallingCode,
  type CountryCode,
} from "libphonenumber-js";
import { useEffect, useRef, useState } from "react";
import type { FormEvent, MouseEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const countryOptions = getCountries()
  .map((country) => {
    const countryData = getCountryData(country);
    return {
      country,
      name: countryData.name,
      dialCode: `+${getCountryCallingCode(country)}`,
    };
  })
  .sort((left, right) => {
    const leftName = left.name.toLowerCase();
    const rightName = right.name.toLowerCase();
    return leftName < rightName ? -1 : leftName > rightName ? 1 : 0;
  });

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.88 11.88 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43ZM12.09 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.28C2.22 6.45 6.65 2.02 12.08 2.02a9.83 9.83 0 0 1 7 2.91 9.87 9.87 0 0 1 2.9 7.01c0 5.44-4.43 9.86-9.89 9.86Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] =
    useState<CountryCode>("PK");
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const countryPickerRef = useRef<HTMLDivElement>(null);
  const countryButtonRef = useRef<HTMLButtonElement>(null);
  const countrySearchRef = useRef<HTMLInputElement>(null);
  const selectedCountry = countryOptions.find(
    ({ country }) => country === selectedCountryCode,
  )!;
  const query = countrySearch.trim().toLowerCase();
  const exactCountries = countryOptions.filter(
    ({ country, name, dialCode }) =>
      name.toLowerCase() === query ||
      country.toLowerCase() === query ||
      dialCode === (query.startsWith("+") ? query : `+${query}`),
  );
  const filteredCountries = !query
    ? countryOptions
    : exactCountries.length
      ? exactCountries
      : countryOptions.filter(
          ({ country, name, dialCode }) =>
            name.toLowerCase().includes(query) ||
            country.toLowerCase().includes(query) ||
            dialCode.includes(query.startsWith("+") ? query : `+${query}`),
        );

  const handlePanelMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - bounds.top}px`,
    );
  };

  useEffect(() => {
    if (!countryMenuOpen) return;
    countrySearchRef.current?.focus();
    const closeOnOutsideClick = (event: globalThis.MouseEvent) => {
      if (!countryPickerRef.current?.contains(event.target as Node)) {
        setCountryMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCountryMenuOpen(false);
        countryButtonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [countryMenuOpen]);

  const submitAppointment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setFormError("");
    try {
      const formData = new FormData(form);
      const localPhone = String(formData.get("phone") ?? "").trim();
      const payload = Object.fromEntries(formData.entries());
      payload.phone = `${selectedCountry.dialCode} ${localPhone}`;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const responseText = await response.text();
      let result: { message?: string };
      try {
        result = JSON.parse(responseText) as { message?: string };
      } catch {
        throw new Error("The server returned an unexpected response. Please try again.");
      }
      if (!response.ok) throw new Error(result.message || "Message could not be sent.");
      setSubmitted(true);
      form.reset();
      messageRef.current?.style.removeProperty("height");
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="appointment"
      aria-labelledby="contact-heading"
      className="relative z-10 w-full scroll-mt-24 px-4 pb-24 pt-16 sm:px-8 md:pt-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="contact-heading" title="Contact" />

        <div className="mb-14 max-w-4xl">
          <h3 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-white">
            Let&apos;s connect and build something great
          </h3>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-zinc-400 sm:text-lg">
            Have a project idea, collaboration opportunity, or question? Send me
            a message with the details and I&apos;ll get back to you within 24
            hours.
          </p>
        </div>

        <div
          onMouseMove={handlePanelMove}
          className="appointment-panel pointer-glow-card relative overflow-hidden rounded-2xl border border-[#212121] bg-[#0A0A0A]"
        >
          <div className="border-b border-white/[0.1] px-4 py-5 sm:px-6">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-white sm:text-2xl">
              <Mail size={23} strokeWidth={1.7} />
              Send a Message
            </h3>
            <p className="mt-1 text-sm text-zinc-400 sm:text-base">
              Tell me a little about how I can help
            </p>
          </div>
          {submitted ? (
            <div role="status" aria-live="polite" className="flex min-h-[330px] flex-col items-center justify-center px-6 text-center">
              <CheckCircle2 size={42} className="text-emerald-400" />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                Message received
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
                Thanks for reaching out. I&apos;ll review your message and get
                back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-lg border border-white/[0.18] px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={submitAppointment}
              className="grid min-w-0 gap-5 p-4 sm:p-8"
            >
              <div className="grid min-w-0 gap-5 md:grid-cols-2">
                <label className="min-w-0 space-y-2 text-sm font-semibold text-zinc-300">
                  <span className="flex items-center gap-2">
                    <UserRound size={15} />
                    Full Name
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="appointment-input"
                  />
                </label>
                <label className="min-w-0 space-y-2 text-sm font-semibold text-zinc-300">
                  <span className="flex items-center gap-2">
                    <Mail size={15} />
                    Email Address
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="appointment-input"
                  />
                </label>
              </div>
              <div className="min-w-0 space-y-2 text-sm font-semibold text-zinc-300">
                <label
                  htmlFor="appointment-phone"
                  className="flex items-center gap-2 text-[#25D366]"
                >
                  <WhatsAppIcon size={17} />
                  <span className="text-zinc-300">WhatsApp Number</span>
                </label>
                <span className="appointment-phone-row">
                  <div
                    ref={countryPickerRef}
                    className="relative min-w-0"
                  >
                    <button
                      ref={countryButtonRef}
                      type="button"
                      aria-label={`Choose country. Selected: ${selectedCountry.name}`}
                      aria-haspopup="listbox"
                      aria-expanded={countryMenuOpen}
                      aria-controls={
                        countryMenuOpen
                          ? "appointment-country-options"
                          : undefined
                      }
                      onClick={() => setCountryMenuOpen((open) => !open)}
                      className="appointment-country appointment-country-trigger flex h-12 w-full items-center gap-2 rounded-lg border border-[#494949] bg-[#202020] px-3 text-sm text-white"
                    >
                      <span
                        aria-hidden="true"
                        className={`appointment-country-flag fi fi-${selectedCountry.country.toLowerCase()}`}
                      >
                      </span>
                      <span className="min-w-0 flex-1 truncate text-left">
                        {selectedCountry.name}
                      </span>
                    </button>
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 transition-transform ${countryMenuOpen ? "rotate-180" : ""}`}
                    />
                    {countryMenuOpen && (
                      <div className="appointment-country-menu absolute left-0 top-[calc(100%+0.5rem)] z-30 w-[min(19rem,calc(100vw-4rem))] overflow-hidden rounded-xl border border-[#3f3f46] bg-[#111111] p-2 shadow-2xl">
                        <div className="appointment-country-search-wrap relative">
                          <Search
                            size={16}
                            aria-hidden="true"
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                          />
                          <input
                            ref={countrySearchRef}
                            type="search"
                            value={countrySearch}
                            onChange={(event) =>
                              setCountrySearch(event.target.value)
                            }
                            onKeyDown={(event) => {
                              if (event.key === "ArrowDown") {
                                event.preventDefault();
                                countryPickerRef.current
                                  ?.querySelector<HTMLButtonElement>(
                                    '[role="option"]',
                                  )
                                  ?.focus();
                              }
                            }}
                            aria-label="Search countries or calling codes"
                            aria-controls="appointment-country-options"
                            placeholder="Search country or code"
                            className="appointment-country-search h-10 w-full rounded-lg border border-[#3f3f46] bg-[#1c1c1c] pl-9 pr-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
                          />
                        </div>
                        <div
                          id="appointment-country-options"
                          role="listbox"
                          aria-label="Countries"
                          className="appointment-country-options mt-2 max-h-60 overflow-y-auto"
                        >
                          {filteredCountries.length ? (
                            filteredCountries.map(
                              ({ country, name }) => (
                                <button
                                  key={country}
                                  type="button"
                                  role="option"
                                  aria-selected={
                                    country === selectedCountryCode
                                  }
                                  onClick={() => {
                                    setSelectedCountryCode(country);
                                    setCountrySearch("");
                                    setCountryMenuOpen(false);
                                    countryButtonRef.current?.focus();
                                  }}
                                  onKeyDown={(event) => {
                                    const options =
                                      countryPickerRef.current?.querySelectorAll<HTMLButtonElement>(
                                        '[role="option"]',
                                      );
                                    const index = Array.from(
                                      options ?? [],
                                    ).indexOf(event.currentTarget);
                                    if (event.key === "ArrowDown") {
                                      event.preventDefault();
                                      options?.[
                                        (index + 1) % (options.length || 1)
                                      ]?.focus();
                                    } else if (event.key === "ArrowUp") {
                                      event.preventDefault();
                                      if (index > 0) {
                                        options?.[index - 1]?.focus();
                                      } else {
                                        countrySearchRef.current?.focus();
                                      }
                                    }
                                  }}
                                  className="appointment-country-option flex min-h-10 w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-zinc-200 transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                                >
                                  <span
                                    aria-hidden="true"
                                    className={`appointment-country-flag fi fi-${country.toLowerCase()}`}
                                  />
                                  <span className="flex-1">{name}</span>
                                  {country === selectedCountryCode && (
                                    <span className="text-xs text-violet-300">
                                      Selected
                                    </span>
                                  )}
                                </button>
                              ),
                            )
                          ) : (
                            <p className="px-3 py-5 text-center text-sm text-zinc-400">
                              No countries found
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="appointment-phone-field flex h-12 min-w-0 items-center gap-2 rounded-lg border border-[#494949] px-3">
                    <span
                      aria-hidden="true"
                      className="appointment-phone-code shrink-0 border-r border-white/15 pr-2 text-sm font-semibold text-zinc-200"
                    >
                      {selectedCountry.dialCode}
                    </span>
                    <input
                      id="appointment-phone"
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel-national"
                      inputMode="tel"
                      maxLength={32}
                      placeholder="Phone number"
                      className="appointment-phone-input min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                    />
                  </span>
                  <input
                    type="hidden"
                    name="country"
                    value={selectedCountryCode}
                  />
                </span>
              </div>
              <label className="min-w-0 space-y-2 text-sm font-semibold text-zinc-300">
                <span className="flex items-center gap-2">
                  <CircleCheck size={15} />
                  Message / Project Details
                </span>
                <textarea
                  required
                  ref={messageRef}
                  name="message"
                  rows={5}
                  maxLength={4000}
                  placeholder="Tell me about your project, idea, or question..."
                  onInput={(event) => {
                    const textarea = event.currentTarget;
                    textarea.style.height = "auto";
                    textarea.style.height = `${Math.max(textarea.scrollHeight, 144)}px`;
                  }}
                  className="appointment-input appointment-textarea bg-black"
                />
              </label>
              {formError && <p role="alert" className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">{formError}</p>}
              <button
                type="submit"
                disabled={sending}
                className="appointment-submit mt-1 inline-flex h-12 w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-[#d9d9d9] text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"} {!sending && <ArrowRight size={17} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
