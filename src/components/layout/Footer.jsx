import { businessInfo } from '../../data/businessInfo';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 py-6 text-center text-xs sm:text-sm border-t-4 border-teal-600">
      <p>© {new Date().getFullYear()} {businessInfo.brandName}. All rights reserved.</p>
      <p className="mt-1">Marketing by Alfalah</p>
    </footer>
  );
}
