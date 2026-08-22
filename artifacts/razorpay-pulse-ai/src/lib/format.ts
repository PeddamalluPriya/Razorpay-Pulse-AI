export const money = (value: number | undefined, compact = false) => {
  if (value === undefined || Number.isNaN(value)) return "—";
  if (compact && Math.abs(value) >= 10000000) return `₹${(value / 10000000).toFixed(2)}Cr`;
  if (compact && Math.abs(value) >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: value >= 100000 ? 0 : 2 }).format(value);
};

export const pct = (value: number | undefined) => value === undefined || Number.isNaN(value) ? "—" : `${value.toFixed(1)}%`;
export const timeAgo = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const mins = Math.max(1, Math.round((Date.now() - date.getTime()) / 60000));
  return mins < 60 ? `${mins}m ago` : mins < 1440 ? `${Math.round(mins / 60)}h ago` : `${Math.round(mins / 1440)}d ago`;
};