export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-surface-elevated border border-border rounded-full text-sm text-muted mb-8">
            🎯 Guide des bonnes pratiques web
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up delay-100">
          Créez des sites{" "}
          <span className="gradient-text">performants</span>
          <br />
          et accessibles
        </h1>

        <p className="text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
          Découvrez les erreurs courantes en webdesign et apprenez comment les
          éviter pour offrir une expérience utilisateur optimale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a
            href="#problemes"
            className="px-8 py-4 bg-accent text-background rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-105 animate-pulse-glow"
          >
            Découvrir les erreurs
          </a>
          <a
            href="#solutions"
            className="px-8 py-4 bg-surface-elevated border border-border text-foreground rounded-xl font-semibold hover:bg-surface transition-all hover:scale-105"
          >
            Voir les solutions
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-muted rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

