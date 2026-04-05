import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-full font-medium transition-all duration-200 text-sm md:text-base";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    outline:
      "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
