type Source = {
  label: string;
  href: string;
};

export default function Sources({ sources }: { sources: Source[] }) {
  return (
    <div className="border-t border-gray-100 pt-6 mt-2">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Sources
      </p>
      <ol className="space-y-1">
        {sources.map((source, i) => (
          <li key={i} className="text-xs text-gray-400 flex gap-2">
            <span className="flex-shrink-0">[{i + 1}]</span>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 underline underline-offset-2 transition-colors"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
