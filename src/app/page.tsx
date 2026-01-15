import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemCard from "@/components/ProblemCard";
import SolutionCard from "@/components/SolutionCard";
import ResourceCard from "@/components/ResourceCard";
import Footer from "@/components/Footer";

const problems = [
  {
    icon: "🎨",
    title: "Mauvais contraste de couleurs",
    description:
      "Un texte difficile à lire sur un fond chargé ou de couleur similaire rend le contenu inaccessible.",
    badExample:
      "Texte jaune sur fond orange, texte vert sur fond vert clair, polices décoratives illisibles.",
  },
  {
    icon: "🖼️",
    title: "Arrière-plans distrayants",
    description:
      "Les images de fond trop chargées ou les animations constantes détournent l'attention du contenu principal.",
    badExample:
      "Fonds animés avec des étoiles, images GIF clignotantes, motifs répétitifs agressifs.",
  },
  {
    icon: "📍",
    title: "Navigation confuse",
    description:
      "Sans structure de navigation claire, les utilisateurs se perdent et ne trouvent pas l'information recherchée.",
    badExample:
      "Absence de menu, liens cachés dans le texte, pas de fil d'Ariane, utilisation excessive de frames.",
  },
  {
    icon: "📢",
    title: "Publicités intrusives",
    description:
      "Les pop-ups agressifs et les bannières clignotantes ruinent l'expérience utilisateur et font fuir les visiteurs.",
    badExample:
      "Pop-ups qui bloquent le contenu, bannières flash animées, auto-play de vidéos.",
  },
  {
    icon: "🎵",
    title: "Musique en autoplay",
    description:
      "Forcer la lecture de musique ou de sons automatiquement est l'une des pratiques les plus détestées.",
    badExample:
      "Musique MIDI qui démarre automatiquement, sons surprises sans contrôle de volume.",
  },
  {
    icon: "📱",
    title: "Non responsive",
    description:
      "Un site qui ne s'adapte pas aux différentes tailles d'écran exclut une grande partie des utilisateurs mobiles.",
    badExample:
      "Largeur fixe de 800px, éléments qui débordent, texte trop petit sur mobile.",
  },
];

const solutions = [
  {
    icon: "✨",
    title: "Design épuré et lisible",
    description:
      "Privilégiez la simplicité avec des fonds neutres et un contraste suffisant pour le texte.",
    tips: [
      "Ratio de contraste minimum de 4.5:1 pour le texte",
      "Fonds unis ou dégradés subtils",
      "Typographie claire et hiérarchisée",
    ],
  },
  {
    icon: "🧭",
    title: "Navigation intuitive",
    description:
      "Une structure de navigation claire permet aux utilisateurs de trouver rapidement ce qu'ils cherchent.",
    tips: [
      "Menu principal visible et cohérent",
      "Fil d'Ariane pour les sites complexes",
      "Maximum 2 clics pour accéder à l'info",
    ],
  },
  {
    icon: "⚡",
    title: "Performance optimisée",
    description:
      "Un site rapide améliore l'expérience utilisateur et le référencement.",
    tips: [
      "Images optimisées et lazy loading",
      "Minification du CSS/JS",
      "Utilisation d'un CDN",
    ],
  },
  {
    icon: "📲",
    title: "Design responsive",
    description:
      "Votre site doit s'adapter parfaitement à tous les appareils et tailles d'écran.",
    tips: [
      "Approche mobile-first",
      "Breakpoints cohérents",
      "Touch-friendly sur mobile",
    ],
  },
  {
    icon: "♿",
    title: "Accessibilité",
    description:
      "Un site accessible permet à tous les utilisateurs d'accéder au contenu.",
    tips: [
      "Alt text pour les images",
      "Navigation au clavier",
      "Labels sur les formulaires",
    ],
  },
  {
    icon: "🔒",
    title: "Respect de l'utilisateur",
    description:
      "Pas de pratiques intrusives qui nuisent à l'expérience de navigation.",
    tips: [
      "Pas d'autoplay audio/vidéo",
      "Pop-ups non bloquantes",
      "Contrôle donné à l'utilisateur",
    ],
  },
];

const resources = [
  {
    title: "Web.dev by Google",
    description: "Guides et outils pour créer des sites performants et accessibles.",
    url: "https://web.dev",
    category: "Performance",
  },
  {
    title: "MDN Web Docs",
    description: "Documentation complète sur les technologies web.",
    url: "https://developer.mozilla.org",
    category: "Documentation",
  },
  {
    title: "A11y Project",
    description: "Ressources pour rendre le web plus accessible.",
    url: "https://www.a11yproject.com",
    category: "Accessibilité",
  },
  {
    title: "PageSpeed Insights",
    description: "Analysez la performance de vos pages web.",
    url: "https://pagespeed.web.dev",
    category: "Outils",
  },
  {
    title: "WCAG Guidelines",
    description: "Directives d'accessibilité pour le contenu web.",
    url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    category: "Accessibilité",
  },
  {
    title: "Can I Use",
    description: "Compatibilité des fonctionnalités web entre navigateurs.",
    url: "https://caniuse.com",
    category: "Outils",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Problems Section */}
        <section id="problemes" className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm text-red-400 mb-4">
                ⚠️ À éviter
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Les erreurs <span className="text-red-400">courantes</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Ces pratiques étaient courantes dans les années 2000 mais sont
                aujourd'hui à proscrire absolument.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <ProblemCard
                  key={index}
                  {...problem}
                  delay={`${index * 100}ms`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent-secondary/10 border border-accent-secondary/20 rounded-full text-sm text-accent-secondary mb-4">
                ✅ Bonnes pratiques
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Les <span className="text-accent-secondary">solutions</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Appliquez ces principes pour créer des sites web modernes,
                performants et agréables à utiliser.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <SolutionCard
                  key={index}
                  {...solution}
                  delay={`${index * 100}ms`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-5xl font-bold gradient-text mb-2">53%</div>
                <p className="text-muted">
                  des visiteurs quittent un site qui met +3s à charger
                </p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold gradient-text mb-2">88%</div>
                <p className="text-muted">
                  ne reviennent pas après une mauvaise expérience
                </p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold gradient-text mb-2">70%</div>
                <p className="text-muted">
                  du trafic web provient du mobile
                </p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold gradient-text mb-2">1B+</div>
                <p className="text-muted">
                  de personnes ont un handicap nécessitant l'accessibilité
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="ressources" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-surface-elevated border border-border rounded-full text-sm text-muted mb-4">
                📚 Pour aller plus loin
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ressources <span className="gradient-text">utiles</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Approfondissez vos connaissances avec ces ressources de qualité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-surface relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à améliorer votre site ?
            </h2>
            <p className="text-xl text-muted mb-10">
              Appliquez ces bonnes pratiques dès maintenant et offrez à vos
              visiteurs l'expérience qu'ils méritent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@optiperformance.fr"
                className="px-8 py-4 bg-accent text-background rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-105"
              >
                Nous contacter
              </a>
              <a
                href="#problemes"
                className="px-8 py-4 bg-surface-elevated border border-border text-foreground rounded-xl font-semibold hover:bg-background transition-all hover:scale-105"
              >
                Revoir le guide
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
