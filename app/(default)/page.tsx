import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  BarChart3,
  Compass,
  PenTool,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Independent creative &amp; growth studio</div>
            <h1>Good ideas deserve <em>a bigger stage.</em></h1>
            <p className="hero-intro">We help ambitious businesses find their edge, tell their story, and turn the next big idea into real momentum.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="mailto:vexa.works.bussniess@gmail.com?subject=Let%27s%20work%20together">Let&apos;s talk <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="text-link" href="#services">See what we do <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
          </div>

          <div className="hero-art">
            <div className="preview-window">
              <div className="preview-bar"><span className="preview-dots"><i /><i /><i /></span><span>VEXA / THE CREATIVE PROCESS</span><span>01 — 03</span></div>
              <div className="preview-content">
                <div className="preview-copy"><span>FROM FIRST THOUGHT TO FULL MOMENTUM</span><strong>One clear<br />way forward.</strong><p>Strategy, design, and growth working as one.</p><div><i>DISCOVER</i><i>DEFINE</i><i>DELIVER</i></div></div>
                <Image className="preview-visual" src="/images/features.png" alt="A connected creative workflow from plan to prototype, projects, and execution" width={2208} height={768} priority />
              </div>
            </div>
          </div>
        </section>

        <section className="tool-strip" aria-label="Vexa capabilities">
          <div className="section-wrap tool-strip-inner"><p>Small studio. End-to-end thinking.</p><div className="tool-logos"><span>Brand strategy</span><span>Visual identity</span><span>Digital experiences</span><span>Creative growth</span></div></div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading"><div><span className="section-kicker">A GOOD PLACE TO START</span><h2>Big-picture energy.<br /><em>Hands-on execution.</em></h2></div><p>From the first “what if?” to the final detail, we bring the strategy and craft to make your next move count.</p></div>
          <div className="service-grid">
            <article className="service-card service-card-lime"><div className="service-icon"><Compass size={22} aria-hidden="true" /></div><span className="service-number">01 / FIND YOUR EDGE</span><h3>Brand &amp; strategy</h3><p>Get clear on what makes you different, who you&apos;re here for, and how to show up with confidence.</p><a href="mailto:vexa.works.bussniess@gmail.com?subject=Brand%20and%20strategy" aria-label="Ask about brand and strategy"><ArrowUpRight size={19} /></a></article>
            <article className="service-card service-card-blue"><div className="service-icon"><PenTool size={22} aria-hidden="true" /></div><span className="service-number">02 / MAKE IT REAL</span><h3>Design &amp; digital</h3><p>Build a sharp identity and a thoughtful online home that turns curious visitors into your people.</p><a href="mailto:vexa.works.bussniess@gmail.com?subject=Design%20and%20digital" aria-label="Ask about design and digital"><ArrowUpRight size={19} /></a></article>
            <article className="service-card service-card-pink"><div className="service-icon"><BarChart3 size={22} aria-hidden="true" /></div><span className="service-number">03 / KEEP MOVING</span><h3>Growth &amp; content</h3><p>Make your message travel further with useful content, smarter campaigns, and room to learn.</p><a href="mailto:vexa.works.bussniess@gmail.com?subject=Growth%20and%20content" aria-label="Ask about growth and content"><ArrowUpRight size={19} /></a></article>
          </div>
        </section>

        <section className="manifesto"><div className="section-wrap manifesto-inner"><span className="manifesto-mark"><Asterisk size={34} aria-hidden="true" /></span><p>We believe the best work happens when <em>clear thinking meets a little courage.</em></p><a href="mailto:vexa.works.bussniess@gmail.com">Bring us your big idea <ArrowRight size={17} aria-hidden="true" /></a></div></section>

        <section className="process section-wrap" id="approach">
          <div className="section-heading process-heading"><div><span className="section-kicker">HOW WE GET THERE</span><h2>Less theatre.<br /><em>More forward motion.</em></h2></div><p>A good partnership should feel clear from day one. Here&apos;s how we turn a rough idea into work you&apos;re proud to put your name on.</p></div>
          <div className="process-grid"><article><span>01</span><h3>Listen closely</h3><p>We get to know your business, your people, and the challenge behind the brief.</p></article><article><span>02</span><h3>Find the signal</h3><p>We set a clear direction, agree on what matters, and make a plan you can believe in.</p></article><article><span>03</span><h3>Make it happen</h3><p>We build, share, refine, and keep the work moving with you at every step.</p></article></div>
        </section>

        <section className="contact section-wrap" id="contact"><div className="contact-panel"><div className="contact-spark"><Sparkles size={24} aria-hidden="true" /></div><span className="section-kicker">YOUR NEXT CHAPTER STARTS SOMEWHERE</span><h2>Let&apos;s make<br /><em>something matter.</em></h2><p>Tell us what you&apos;re working on. We&apos;ll bring the questions, ideas, and a fresh pair of eyes.</p><a className="button button-light" href="mailto:vexa.works.bussniess@gmail.com?subject=Hello%20Vexa">vexa.works.bussniess@gmail.com <ArrowUpRight size={17} aria-hidden="true" /></a><span className="contact-orbit orbit-one" /><span className="contact-orbit orbit-two" /></div></section>
      </main>
    </>
  );
}
