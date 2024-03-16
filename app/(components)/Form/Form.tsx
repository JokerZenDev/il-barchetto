"use client";

import { useFormState } from "react-dom";

const initialState = {
  status: "",
  message: "",
};

export default function Form({
  children,
  className,
  serverAction,
}: {
  children: React.ReactNode;
  className: string;
  serverAction: any;
}) {
  const [state, formAction] = useFormState(serverAction, initialState);

  return (
    <form className={className} action={formAction}>
      {children}
      <p aria-live="polite" className="">
        {state?.message}
      </p>
    </form>
  );
}
