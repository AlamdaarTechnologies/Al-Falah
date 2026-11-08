import { businessInfo } from '../../data/businessInfo';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 py-6 text-center text-xs sm:text-sm border-t-4 border-teal-600">
      <p>© {new Date().getFullYear()} {businessInfo.brandName}</p>

      <p className="mt-1">All marketing rights reserved.</p>
    </footer>
  );
}
