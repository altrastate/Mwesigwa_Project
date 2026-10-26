export type Currency = "UGX" | "USD";

/** Illustrative suggested amounts only — not tied to real-world outcomes. */
export const suggestedAmounts: Record<Currency, number[]> = {
  UGX: [10000, 25000, 50000, 100000, 250000],
  USD: [5, 10, 25, 50, 100],
};

export function formatAmount(amount: number, currency: Currency) {
  return currency === "UGX"
    ? `UGX ${amount.toLocaleString("en-US")}`
    : `$${amount.toLocaleString("en-US")}`;
}

export function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

/** Returns an error message, or null when the amount is acceptable. */
export function validateAmount(raw: string | number | null): string | null {
  if (raw === null || raw === "") return "Please choose or enter an amount.";
  const n = typeof raw === "number" ? raw : Number(String(raw).replace(/,/g, ""));
  if (!Number.isFinite(n) || n <= 0) return "Please enter an amount greater than zero.";
  return null;
}
