"use client";

import type { ReactNode } from "react";
import { useId, useRef } from "react";
import InterestForm from "./InterestForm";

export default function InterestTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button className={className} type="button" onClick={() => dialogRef.current?.showModal()}>
        {children}
      </button>
      <dialog
        className="interest-dialog"
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <button className="dialog-close" type="button" onClick={closeDialog} aria-label="Close invitation form">×</button>
        <p className="section-kicker">Circle of Leaders</p>
        <h2 id={dialogTitleId}>Request an invitation</h2>
        <p className="dialog-description">Register your interest to attend, partner, or begin a conversation with Circle of Leaders.</p>
        <InterestForm />
      </dialog>
    </>
  );
}