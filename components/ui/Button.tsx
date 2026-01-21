import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary-dark' | 'secondary-white';
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
    primary: "btn-primary",
    "secondary-dark": "btn-secondary-dark",
    "secondary-white": "btn-secondary-white" // Replaces outline/white logic with specific class
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