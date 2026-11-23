/**
 * Non-component helpers for product presentation (kept separate from the
 * components so React fast-refresh keeps working).
 * PRESENTATION ONLY — never rewrites product data.
 *
 * Typography policy (identical on every product, every breakpoint):
 *   Product title ............ 24px
 *   Short description /
 *   Description .............. 18px
 *   Everything else .......... 16px
 */

export const typo = {
  title: 'text-[24px] font-bold leading-snug text-navy-900 break-words',
  description: 'text-[18px] leading-relaxed text-slate-600 break-words',
  body: 'text-[16px] leading-normal text-slate-600 break-words',
  heading: 'text-[16px] font-bold uppercase tracking-wider text-navy-900 leading-snug',
  label: 'font-bold text-slate-900',
};

// "Label: value" — short label (<= 30 chars) before the first colon+space.
export const LABEL_RE = /^([^:\n]{1,30}):\s+(\S[\s\S]*)$/;

// A single value up to this length is shown on the same line as its label.
export const INLINE_MAX = 80;

/**
 * Turns any supported specification shape into a flat list of rows:
 *  - { Key: "value" | ["a","b"] }                      (key/value object)
 *  - ["Plain line", "Label: value"]                    (string array)
 *  - [{ title, items }]                                (grouped array)
 */
export function normalizeSpecs(specs) {
  if (!specs) return [];

  if (Array.isArray(specs)) {
    return specs
      .map((s) => {
        if (typeof s === 'string') return { value: s };
        if (s && typeof s === 'object') {
          const label = s.title || s.name;
          const value = s.items ?? s.values;
          if (label && value != null) return { label, value };
          const [k, v] = Object.entries(s)[0] || [];
          return k ? { label: k, value: v } : null;
        }
        return null;
      })
      .filter(Boolean);
  }

  if (typeof specs === 'object') {
    return Object.entries(specs).map(([label, value]) => ({ label, value }));
  }
  return [];
}

/** Inquiry button: text pinned to 16px to match the typography policy. */
export const inquiryButtonClass = 'font-bold shadow-md hover:shadow-lg rounded-xl !text-[16px]';
