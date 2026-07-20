import { Badge } from "@/components/ui/badge";

interface SectionBadgeProps {
  children: React.ReactNode;
}

export function SectionBadge({
  children,
}: SectionBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="rounded-full px-4 py-1 text-sm"
    >
      {children}
    </Badge>
  );
}