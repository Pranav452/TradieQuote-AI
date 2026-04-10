import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonAsAnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "type"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button(props: ButtonAsButtonProps): React.ReactElement;
export function Button(props: ButtonAsAnchorProps): React.ReactElement;
export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className = "",
    ...rest
  } = props;

  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-200 text-sm md:text-base text-center";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    outline:
      "border-2 border-white/55 bg-white/10 text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.12)] backdrop-blur-md hover:border-white/75 hover:bg-white/20",
  };

  const combined = `${baseStyles} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest;
    return (
      <a
        href={href}
        className={combined}
        target="_blank"
        rel="noopener noreferrer"
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonAsButtonProps;
  return (
    <button type={type} className={combined} {...buttonProps}>
      {children}
    </button>
  );
}
