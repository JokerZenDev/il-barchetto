"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ label, labelOnPending }: { label: string, labelOnPending?: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full max-w-[300px] px-4 py-2 border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white transition-colors text-2xl disabled:opacity-75 disabled:cursor-not-allowed"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending && labelOnPending || label}
    </button>
  );
}
