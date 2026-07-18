"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { setVisitorName } from "@/lib/analytics/visitor";
import { cn } from "@/lib/utils";
import { useI18n } from "./providers/I18nProvider";

type FormState = "idle" | "submitting" | "error";

type FieldErrors = {
  name?: boolean;
  email?: boolean;
  message?: boolean;
};

function SuccessModal({
  title,
  body,
  closeLabel,
  onClose,
}: {
  title: string;
  body: string;
  closeLabel: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="gradient-border glass-card relative w-full max-w-sm p-8 text-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-secondary/20"
          aria-hidden
        >
          <svg
            className="h-7 w-7 text-accent-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 id={titleId} className="text-lg font-medium text-foreground">
          {title}
        </h3>
        <p id={descId} className="mt-2 text-sm leading-relaxed text-muted">
          {body}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="btn-gradient mt-6 inline-flex items-center rounded-full px-8 py-2.5 text-sm font-medium transition-all"
        >
          {closeLabel}
        </button>
      </div>
    </div>
  );
}

export function ContactForm() {
  const { t } = useI18n();
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const resetForm = useCallback(() => {
    setName("");
    setEmail("");
    setMessage("");
    setHoneypot("");
    setFieldErrors({});
    setErrorMessage("");
    setFormState("idle");
  }, []);

  const handleCloseSuccess = useCallback(() => {
    setShowSuccess(false);
    resetForm();
  }, [resetForm]);

  const validate = (): FieldErrors => {
    const errors: FieldErrors = {};
    if (!name.trim()) errors.name = true;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = true;
    }
    if (!message.trim()) errors.message = true;
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState === "submitting") return;

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage(
        errors.email && email.trim()
          ? t.contact.errorEmail
          : t.contact.errorValidation,
      );
      setFormState("error");
      return;
    }

    setFieldErrors({});
    setErrorMessage("");
    setFormState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          website: honeypot,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        if (data.error === "email") {
          setFieldErrors({ email: true });
          setErrorMessage(t.contact.errorEmail);
        } else {
          setErrorMessage(t.contact.errorGeneric);
        }
        setFormState("error");
        return;
      }

      setShowSuccess(true);
      setFormState("idle");
      setVisitorName(name.trim());
    } catch {
      setErrorMessage(t.contact.errorGeneric);
      setFormState("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full border-0 border-b bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted/70",
      "border-border/80 focus:border-accent-secondary",
      hasError && "border-red-400/70 focus:border-red-400",
    );

  return (
    <>
      <div className="mt-10 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
          {t.contact.or}
        </p>
        <h3 className="mt-4 text-xl font-medium text-foreground md:text-2xl">
          {t.contact.formTitle}
        </h3>
      </div>

      <form
        id={formId}
        onSubmit={handleSubmit}
        noValidate
        className="gradient-border glass-card relative mx-auto mt-8 max-w-md p-8"
      >
        <div className="space-y-6">
          <div>
            <label htmlFor={`${formId}-name`} className="sr-only">
              {t.contact.namePlaceholder}
            </label>
            <input
              id={`${formId}-name`}
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                if (fieldErrors.name) {
                  setFieldErrors((prev) => ({ ...prev, name: false }));
                }
              }}
              placeholder={t.contact.namePlaceholder}
              disabled={formState === "submitting"}
              aria-invalid={fieldErrors.name}
              className={inputClass(!!fieldErrors.name)}
            />
          </div>

          <div>
            <label htmlFor={`${formId}-message`} className="sr-only">
              {t.contact.messagePlaceholder}
            </label>
            <textarea
              id={`${formId}-message`}
              name="message"
              rows={3}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                if (fieldErrors.message) {
                  setFieldErrors((prev) => ({ ...prev, message: false }));
                }
              }}
              placeholder={t.contact.messagePlaceholder}
              disabled={formState === "submitting"}
              aria-invalid={fieldErrors.message}
              className={cn(inputClass(!!fieldErrors.message), "resize-none")}
            />
          </div>

          <div>
            <label htmlFor={`${formId}-email`} className="sr-only">
              {t.contact.emailPlaceholder}
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (fieldErrors.email) {
                  setFieldErrors((prev) => ({ ...prev, email: false }));
                }
              }}
              placeholder={t.contact.emailPlaceholder}
              disabled={formState === "submitting"}
              aria-invalid={fieldErrors.email}
              className={inputClass(!!fieldErrors.email)}
            />
          </div>

          <div className="absolute -left-[9999px]" aria-hidden>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
            />
          </div>
        </div>

        {errorMessage && (
          <p
            role="alert"
            className="mt-4 text-center text-sm text-red-400/90"
          >
            {errorMessage}
          </p>
        )}

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            disabled={formState === "submitting"}
            className={cn(
              "inline-flex min-w-[140px] items-center justify-center rounded-full border border-accent/40 bg-surface/50 px-10 py-2.5 text-sm font-semibold uppercase tracking-widest text-foreground backdrop-blur-sm transition-all",
              "hover:border-accent-secondary hover:text-accent-secondary",
              "disabled:cursor-not-allowed disabled:opacity-60",
            )}
          >
            {formState === "submitting" ? t.contact.sending : t.contact.send}
          </button>
        </div>
      </form>

      {showSuccess && (
        <SuccessModal
          title={t.contact.successTitle}
          body={t.contact.successBody}
          closeLabel={t.contact.close}
          onClose={handleCloseSuccess}
        />
      )}
    </>
  );
}
