/**
 * Shared presentation components for every product card / product page.
 * PRESENTATION ONLY: lays out the data exactly as it exists in src/data/products.js.
 */
import { typo, LABEL_RE, INLINE_MAX } from './productFormat';

/** Bold label + normal-weight value on one line (wraps naturally). */
export function LabelValue({ label, children }) {
  return (
    <p className={typo.body}>
      <strong className={typo.label}>{label}:</strong> {children}
    </p>
  );
}

/** Renders a string, bolding a leading "Label:" if the string has one. */
function TextWithLabel({ text }) {
  const str = String(text);
  const m = str.match(LABEL_RE);
  if (!m) return <>{str}</>;
  return (
    <>
      <strong className={typo.label}>{m[1]}:</strong> {m[2]}
    </>
  );
}

/** Bullet list. Short items flow into columns that collapse on narrow screens. */
export function BulletList({ items, labelled = false }) {
  const list = (items || []).map((i) => (typeof i === 'object' ? JSON.stringify(i) : String(i)));
  if (list.length === 0) return null;

  const maxLen = Math.max(...list.map((i) => i.length));
  let cols = '';
  if (list.length >= 4 && maxLen <= 18) cols = 'columns-[8rem] gap-x-6';
  else if (list.length >= 4 && maxLen <= 32) cols = 'columns-[11rem] gap-x-6';

  return (
    <ul className={`list-disc pl-5 marker:text-slate-400 ${typo.body} ${cols}`}>
      {list.map((item, idx) => (
        <li key={idx} className="py-px break-inside-avoid">
          {labelled ? <TextWithLabel text={item} /> : item}
        </li>
      ))}
    </ul>
  );
}

function SpecRow({ label, value }) {
  const values = Array.isArray(value) ? value.map(String) : [String(value)];
  const single = values.length === 1;
  const short = single && values[0].length <= INLINE_MAX && !values[0].includes('\n');

  // One short value -> label and value on the same line.
  if (short) {
    return label ? (
      <LabelValue label={label}>{values[0]}</LabelValue>
    ) : (
      <p className={typo.body}>
        <TextWithLabel text={values[0]} />
      </p>
    );
  }

  // One long value -> bold label, then the value wrapping naturally below it.
  if (single) {
    return (
      <div className={typo.body}>
        {label && <p className={typo.label}>{label}</p>}
        <p className="whitespace-pre-line">{values[0]}</p>
      </div>
    );
  }

  // Several values -> bold label, then the list.
  return (
    <div>
      {label && <p className={`${typo.body} ${typo.label} mb-0.5`}>{label}</p>}
      <BulletList items={values} labelled />
    </div>
  );
}

/** Specification rows rendered seamlessly on the card's single background. */
export function SpecBox({ rows }) {
  if (!rows || rows.length === 0) return null;
  return (
    <div className="space-y-2">
      {rows.map((row, idx) => (
        <div key={`${row.label ?? 'row'}-${idx}`} className="py-1">
          <SpecRow label={row.label} value={row.value} />
        </div>
      ))}
    </div>
  );
}

function Group({ title, children }) {
  return (
    <div>
      {title && <h4 className={typo.heading}>{title}</h4>}
      <div className={title ? 'mt-1.5' : ''}>{children}</div>
    </div>
  );
}

function Description({ text }) {
  return String(text || '')
    .split('\n\n')
    .filter(Boolean)
    .map((para, idx) => (
      <p key={idx} className={`${typo.description} ${idx > 0 ? 'mt-2' : ''}`}>
        {para}
      </p>
    ));
}

/**
 * The one text column used by every product page:
 * Description -> Key Features -> Specifications -> Applications.
 */
export function ProductInfo({ description, features, specRows, specTitle, applications }) {
  return (
    <div className="space-y-4">
      {description && (
        <Group title="Description">
          <Description text={description} />
        </Group>
      )}
      {features && features.length > 0 && (
        <Group title="Key Features">
          <BulletList items={features} />
        </Group>
      )}
      {specRows && specRows.length > 0 && (
        <Group title={specTitle}>
          <SpecBox rows={specRows} />
        </Group>
      )}
      {applications && applications.length > 0 && (
        <Group title="Applications">
          <BulletList items={applications} />
        </Group>
      )}
    </div>
  );
}
