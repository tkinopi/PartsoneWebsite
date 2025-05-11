import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionTitle = ({
  title,
  subtitle,
  center = true,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-16",
      center && "text-center",
      className
    )} {...props}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className={cn(
        "w-20 h-1 bg-primary mb-8",
        center && "mx-auto"
      )} />
      {subtitle && (
        <p className={cn(
          "text-lg text-muted-foreground max-w-3xl",
          center && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
