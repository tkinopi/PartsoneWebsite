import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container = ({
  className,
  as: Component = "div",
  children,
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={cn("container mx-auto px-4", className)}
      {...props}
    >
      {children}
    </Component>
  );
};
