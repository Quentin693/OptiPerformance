"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center font-bold text-lg text-background group-hover:scale-110 transition-transform">
            OP
          </div>
          <span className="font-semibold text-lg hidden sm:block">
            OptiPerformance
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="#problemes"
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            Problèmes
          </Link>
          <Link
            href="#solutions"
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            Solutions
          </Link>
          <Link
            href="#ressources"
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            Ressources
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 bg-accent text-background rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

