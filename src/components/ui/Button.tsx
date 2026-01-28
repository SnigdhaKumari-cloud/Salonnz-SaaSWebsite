import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', fullWidth = false, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-sm hover:shadow-md focus:ring-primary",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
            ghost: "text-foreground hover:bg-muted hover:text-foreground",
            outline: "border border-input bg-background hover:bg-muted hover:text-accent-foreground"
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg"
        };

        const widthClass = fullWidth ? "w-full" : "";

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

        return (
            <button
                ref={ref}
                className={classes}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
