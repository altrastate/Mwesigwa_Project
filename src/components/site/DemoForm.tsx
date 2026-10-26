import { useState, type FormEvent, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { isValidEmail } from "@/lib/donation";
import { Btn, Confirmation, Notice } from "./ui";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "textarea" | "select" | "checkbox";
  options?: string[];
  required?: boolean;
  full?: boolean;
  placeholder?: string;
};

const inputCls =
  "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40 aria-[invalid=true]:border-destructive";

/** Generic demo form. Nothing is sent anywhere — submission only shows a confirmation. */
export function DemoForm({
  id,
  fields,
  submitLabel,
  successTitle,
  successText,
  intro,
}: {
  id: string;
  fields: Field[];
  submitLabel: string;
  successTitle: string;
  successText: ReactNode;
  intro?: ReactNode;
}) {
  const [values, setValues] = useState<Record<string, string | boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const set = (k: string, v: string | boolean) => setValues((p) => ({ ...p, [k]: v }));

  function submit(e: FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    for (const f of fields) {
      const v = values[f.name];
      if (f.required) {
        if (f.type === "checkbox" ? !v : !String(v ?? "").trim()) {
          errs[f.name] = f.type === "checkbox" ? "Please tick this box to continue." : `${f.label} is required.`;
          continue;
        }
      }
      if (f.type === "email" && v && !isValidEmail(String(v))) errs[f.name] = "Please enter a valid email address.";
    }
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`${id}-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setState("loading");
    setTimeout(() => setState("done"), 700);
  }

  if (state === "done")
    return (
      <Confirmation
        title={successTitle}
        onReset={() => {
          setValues({});
          setState("idle");
        }}
      >
        {successText}
      </Confirmation>
    );

  return (
    <form onSubmit={submit} noValidate className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
      <Notice className="mb-6">
        <strong>Demo form.</strong> {intro ?? "Submissions are not sent to the ministry yet."}
      </Notice>
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((f) => {
          const fid = `${id}-${f.name}`;
          const err = errors[f.name];
          const label = (
            <>
              {f.label}
              {f.required ? <span className="text-destructive"> *</span> : <span className="text-muted-foreground"> (optional)</span>}
            </>
          );
          if (f.type === "checkbox")
            return (
              <div key={f.name} className="md:col-span-2">
                <label htmlFor={fid} className="flex items-start gap-3 text-sm">
                  <input
                    id={fid}
                    type="checkbox"
                    checked={!!values[f.name]}
                    onChange={(e) => set(f.name, e.target.checked)}
                    aria-invalid={!!err}
                    className="mt-0.5 h-5 w-5 accent-primary"
                  />
                  <span>{label}</span>
                </label>
                {err && <p className="mt-1 text-sm text-destructive">{err}</p>}
              </div>
            );
          const common = {
            id: fid,
            value: String(values[f.name] ?? ""),
            "aria-invalid": !!err,
            "aria-describedby": err ? `${fid}-err` : undefined,
            className: inputCls,
            placeholder: f.placeholder,
          };
          return (
            <div key={f.name} className={f.full || f.type === "textarea" ? "md:col-span-2" : ""}>
              <label htmlFor={fid} className="text-sm font-medium">{label}</label>
              {f.type === "textarea" ? (
                <textarea rows={4} {...common} onChange={(e) => set(f.name, e.target.value)} />
              ) : f.type === "select" ? (
                <select {...common} onChange={(e) => set(f.name, e.target.value)}>
                  <option value="">Select…</option>
                  {f.options?.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input type={f.type ?? "text"} {...common} onChange={(e) => set(f.name, e.target.value)} />
              )}
              {err && <p id={`${fid}-err`} className="mt-1 text-sm text-destructive">{err}</p>}
            </div>
          );
        })}
      </div>
      <Btn type="submit" className="mt-7" disabled={state === "loading"}>
        {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {submitLabel}
      </Btn>
    </form>
  );
}
