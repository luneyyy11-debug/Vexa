import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner section-wrap">
        <Link href="#top" className="brand" aria-label="Vexa home"><span className="brand-symbol"><i /><i /><i /></span><span>vexa<span className="brand-period">.</span></span></Link>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#services">What we do</a><a href="#approach">Our approach</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="mailto:vexa.works.bussniess@gmail.com">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></a>
        <details className="mobile-menu"><summary aria-label="Open navigation"><Menu size={23} /></summary><nav aria-label="Mobile navigation"><a href="#services">What we do</a><a href="#approach">Our approach</a><a href="#contact">Contact</a><a href="mailto:vexa.works.bussniess@gmail.com">Email Vexa <ArrowUpRight size={15} /></a></nav></details>
      </div>
    </header>
  );
}
