interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  tips: string[];
  delay?: string;
}

export default function SolutionCard({
  icon,
  title,
  description,
  tips,
  delay = "0",
}: SolutionCardProps) {
  return (
    <article
      className="group bg-surface border border-border rounded-2xl p-6 hover:border-accent-secondary/50 transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: delay }}
    >
      <div className="w-14 h-14 bg-accent-secondary/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted mb-4 leading-relaxed">{description}</p>
      <div className="bg-accent-secondary/5 border border-accent-secondary/20 rounded-lg p-4">
        <span className="text-xs font-mono text-accent-secondary uppercase tracking-wider">
          ✅ Bonnes pratiques
        </span>
        <ul className="mt-3 space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted">
              <span className="text-accent-secondary mt-0.5">→</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

