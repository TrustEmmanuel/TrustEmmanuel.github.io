"use client";

import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { profile } from "@/lib/profile";

// Opens the message form in a popup. Used by the Get in touch buttons.
export function GetInTouch({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>
      {open
        ? createPortal(
            <MessageDialog onClose={() => setOpen(false)} />,
            document.body,
          )
        : null}
    </>
  );
}

function MessageDialog({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (formData.get("_honey")) return;

    const text = message.trim();

    if (!text) {
      setError("Write a message first.");
      return;
    }

    setSending(true);
    setError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: from.trim(),
          message: text,
          _subject: `Portfolio message for ${profile.name}`,
          _honey: String(formData.get("_honey") ?? ""),
        }),
      });
      const result: { success?: boolean | string; message?: string } =
        await response.json();

      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      ) {
        throw new Error(result.message || "The message could not be sent.");
      }

      setSent(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "The message could not be sent. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      className="message-dialog-backdrop fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="message-title"
        className="message-dialog w-full max-w-md rounded-3xl p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="message-title" className="font-display text-2xl font-semibold tracking-tight">
            Get in touch
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-zinc-600 hover:text-zinc-950"
            aria-label="Close"
          >
            Close
          </button>
        </div>
        <form onSubmit={onSubmit} className="mt-4">
          <label className="sr-only" htmlFor="message-website">
            Leave this field empty
          </label>
          <input
            id="message-website"
            name="_honey"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />
          <label className="block text-sm text-zinc-600" htmlFor="message-name">
            Your name
          </label>
          <input
            id="message-name"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="message-input mt-1 w-full rounded-2xl px-4 py-3 text-sm outline-none"
          />
          <label className="mt-3 block text-sm text-zinc-600" htmlFor="message-email">
            Your email
          </label>
          <input
            id="message-email"
            name="email"
            type="email"
            required
            value={from}
            onChange={(event) => setFrom(event.target.value)}
            className="message-input mt-1 w-full rounded-2xl px-4 py-3 text-sm outline-none"
          />
          <label className="mt-3 block text-sm text-zinc-600" htmlFor="message-body">
            What do you want to build?
          </label>
          <textarea
            id="message-body"
            name="message"
            required
            rows={3}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              if (error) setError("");
            }}
            className="message-input mt-1 w-full resize-y rounded-2xl px-4 py-3 text-sm leading-6 outline-none"
          />
          {error ? <p role="alert" className="mt-2 text-sm text-red-700">{error}</p> : null}
          {sent ? (
            <p role="status" className="mt-3 text-sm text-emerald-700">
              Your message has been sent. Thanks for reaching out!
            </p>
          ) : null}
          <button
            type="submit"
            className="button button-primary mt-4 disabled:cursor-wait disabled:opacity-70"
            disabled={sending || sent}
          >
            {sending ? "Sending…" : sent ? "Message sent" : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
