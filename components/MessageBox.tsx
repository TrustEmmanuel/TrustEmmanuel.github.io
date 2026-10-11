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

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = message.trim();

    if (!text) {
      setError("Write a message first.");
      return;
    }

    const subject = encodeURIComponent(`Message for ${profile.name}`);
    const details = [
      name.trim() ? `Name: ${name.trim()}` : "",
      from.trim() ? `Email: ${from.trim()}` : "",
    ].filter(Boolean);
    const body = encodeURIComponent([...details, text].join("\n\n"));

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
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
          <label className="block text-sm text-zinc-600" htmlFor="message-name">
            Your name
          </label>
          <input
            id="message-name"
            name="name"
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
          {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
          <button
            type="submit"
            className="button button-primary mt-4"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
