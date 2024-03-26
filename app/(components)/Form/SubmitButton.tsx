"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full max-w-[300px] border bg-black p-2 text-white disabled:bg-black/40 cursor-none"
      aria-disabled={pending}
    >
      {label}
    </button>
  );
}
