import { useState } from "react";
import { ClipboardList, X } from "lucide-react";
import { launchChecklist } from "@/content/site";

/** Discreet pre-launch checklist for the ministry's review team. */
export function DevNotes() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-4 left-4 z-50">
      {open ? (
        <div className="w-80 max-w-[calc(100vw-2rem)] rounded-2xl border bg-card p-5 text-sm shadow-soft">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-primary">Before launch — needed from the ministry</p>
            <button aria-label="Close notes" onClick={() => setOpen(false)} className="rounded p-1 hover:bg-muted">
              <X className="h-4 w-4" />
            </button>
          </div>
          <ul className="mt-3 max-h-72 list-disc space-y-1.5 overflow-auto pl-5 text-muted-foreground">
            {launchChecklist.map((i) => <li key={i}>{i}</li>)}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">Programme descriptions, mission/vision, safeguarding and privacy text are proposed wording awaiting approval.</p>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Show pre-launch notes"
          className="flex items-center gap-1.5 rounded-full border bg-card/90 px-3 py-2 text-xs text-muted-foreground shadow-sm hover:text-primary"
        >
          <ClipboardList className="h-3.5 w-3.5" /> Demo notes
        </button>
      )}
    </div>
  );
}
