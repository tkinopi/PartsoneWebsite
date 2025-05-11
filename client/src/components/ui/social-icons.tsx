import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTwitter, 
  faFacebook, 
  faLinkedin, 
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";

interface SocialIconsProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export const SocialIcons = ({
  className,
  size = "md",
  ...props
}: SocialIconsProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={cn("flex space-x-4", className)} {...props}>
      <a href="#" className={cn("transition-colors", sizeClasses[size])}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className={cn("transition-colors", sizeClasses[size])}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#" className={cn("transition-colors", sizeClasses[size])}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="#" className={cn("transition-colors", sizeClasses[size])}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};
