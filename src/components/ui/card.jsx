import React from 'react';
import { Card as FlowbiteCard } from 'flowbite-react';
import { cn } from "@/lib/utils";

// Main Card component
const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <FlowbiteCard 
    ref={ref}
    className={cn(
      "rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow",
      className
    )}
    {...props}
  >
    {children}
  </FlowbiteCard>
));
Card.displayName = "Card";

// Card Header component
const CardHeader = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  >
    {children}
  </div>
));
CardHeader.displayName = "CardHeader";

// Card Title component
const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h3>
));
CardTitle.displayName = "CardTitle";

// Card Description component
const CardDescription = React.forwardRef(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  >
    {children}
  </p>
));
CardDescription.displayName = "CardDescription";

// Card Content component
const CardContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn("p-6 pt-0", className)} 
    {...props}
  >
    {children}
  </div>
));
CardContent.displayName = "CardContent";

// Card Footer component
const CardFooter = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0 border-t border-gray-200 dark:border-gray-700", className)}
    {...props}
  >
    {children}
  </div>
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
