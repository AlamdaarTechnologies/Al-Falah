import { Play } from 'lucide-react';

/**
 * Product video area (about 5 seconds). Set `video` in products.js (a file in /public/videos) to show the real clip;
 * until then a placeholder box with the same 16:9 size is shown.
 */
export default function VideoSlot({ src, poster, label }) {
  if (src) {
    return (
      <video
        className="w-full aspect-video rounded-[10px] bg-slate-900 object-cover"
        src={src}
        poster={poster || undefined}
        aria-label={label}
        controls
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${label} (video coming soon)`}
      className="w-full aspect-video rounded-[10px] bg-slate-100 border border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 text-slate-400"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
        <Play aria-hidden="true" className="w-5 h-5 text-navy-900 ml-0.5" />
      </span>
      <span className="text-xs sm:text-sm font-medium">Product video coming soon</span>
    </div>
  );
}
