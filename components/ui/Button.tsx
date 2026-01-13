import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}) => {
  const baseStyles = "px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 ease-in-out border inline-block text-center";

  const variants = {
    primary: "border-corporate-dark bg-corporate-dark text-white hover:bg-transparent hover:text-corporate-dark",
    outline: "border-corporate-dark text-corporate-dark hover:bg-corporate-dark hover:text-white",
    white: "border-white text-white hover:bg-white hover:text-corporate-dark"
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};