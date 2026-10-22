import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function VexaFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner section-wrap">
        <Link href="#top" className="brand footer-brand" aria-label="Vexa home">
          <span className="brand-symbol"><i /><i /><i /></span>
          <span>vexa<span className="brand-period">.</span></span>
        </Link>
        <p>Ideas into momentum.</p>
        <a href="mailto:vexa.works.bussniess@gmail.com">
          vexa.works.bussniess@gmail.com <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <span className="footer-copy">© {new Date().getFullYear()} Vexa. Made for what&apos;s next.</span>
      </div>
    </footer>
  );
}