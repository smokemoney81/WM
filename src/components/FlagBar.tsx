interface FlagBarProps {
  colors: string[];
  className?: string;
}

export default function FlagBar({ colors, className = "" }: FlagBarProps) {
  return (
    <div className={`flex h-3 w-full overflow-hidden rounded-sm ${className}`}>
      {colors.map((color, i) => (
        <div key={i} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}
