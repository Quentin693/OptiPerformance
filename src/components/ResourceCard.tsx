interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  category: string;
}

export default function ResourceCard({
  title,
  description,
  url,
  category,
}: ResourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-surface border border-border rounded-xl p-5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
    >
      <span className="inline-block px-3 py-1 bg-surface-elevated rounded-full text-xs text-muted mb-3">
        {category}
      </span>
      <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
        {title}
        <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
          →
        </span>
      </h4>
      <p className="text-sm text-muted">{description}</p>
    </a>
  );
}

