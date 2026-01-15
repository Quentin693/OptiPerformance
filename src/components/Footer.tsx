import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center font-bold text-lg text-background">
                OP
              </div>
              <span className="font-semibold text-lg">OptiPerformance</span>
            </Link>
            <p className="text-muted max-w-md leading-relaxed">
              Ce site a été créé pour démontrer les bonnes pratiques en matière
              de webdesign et de performance. Inspiré par les erreurs classiques
              des sites web des années 2000.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#problemes" className="text-muted hover:text-foreground transition-colors">
                  Problèmes courants
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-muted hover:text-foreground transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#ressources" className="text-muted hover:text-foreground transition-colors">
                  Ressources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@optiperformance.fr"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  contact@optiperformance.fr
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} OptiPerformance. Tous droits réservés.
          </p>
          <p className="text-sm text-muted">
            Fait avec <span className="text-accent">♥</span> et Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

