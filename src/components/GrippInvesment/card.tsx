import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define cardVariants with two variants: "default" and "gradient"
const cardVariants = cva("w-full relative", {
  variants: {
    variant: {
      gradient: "relative w-full",
      default: "relative w-full",  // Add "default" variant as well
    },
  }
});

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'>, // Omit 'id' from HTMLDivElement to avoid conflict
    VariantProps<typeof cardVariants> {
  title?: string;
  description?: string;
  id?: string | number;  // Correctly type id as string or number
  variant: "default" | "gradient";  // Explicitly type variant as "default" or "gradient"
}

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props}>
    {props.children}
  </div>
));


CardContent.displayName = "CardContent";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", title, description, children, id, ...props }, ref) => {
    const DotsPattern = () => {
      const sharedClasses =
        "rounded-full outline outline-8 dark:outline-gray-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-green-400";

      return (
        <>
          <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:top-6 md:top-8" />
          <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:bottom-6 md:bottom-8" />

          <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
            <div className="absolute z-0 grid h-full w-full items-center">
              <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
                <div className={`${sharedClasses} -translate-x-[2.5px]`} />
                <div
                  className={`${sharedClasses} translate-x-[2.5px] place-self-end`}
                />
                <div className={`${sharedClasses} -translate-x-[2.5px]`} />
                <div
                  className={`${sharedClasses} translate-x-[2.5px] place-self-end`}
                />
              </section>
            </div>

            <div className="relative z-20 mx-auto py-8">
              <CardContent>
                {title && (
                  <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="text-gray-700 dark:text-gray-300">
                    {description}
                  </p>
                )}
                {children}
              </CardContent>
            </div>
          </div>
        </>
      );
    };

    const GradientLines = () => (
      <>
        <div className="absolute left-0 top-4 -z-0 h-px w-full bg-gradient-to-l from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500 sm:top-6 md:top-8" />
        <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500 sm:bottom-6 md:bottom-8" />
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
          <div className="relative z-20 mx-auto py-8">
            <CardContent className="px-0 sm:px-6 md:px-8">
              {title && (
                <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
              )}
              {children}
            </CardContent>
          </div>
        </div>
      </>
    );

    const InnerContent = () => {
      if (variant === "gradient") return <GradientLines />;
      return null;
    };

    const content = (
      <CardContent>
        {title && (
          <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        )}
        {children}
      </CardContent>
    );

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}  // Spread any other props like style, onClick, etc.
        id={id?.toString()}  // Convert id to string if it's not undefined
      >
        {variant === "gradient" ? <GradientLines /> : null}
        {content}
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card, CardContent, cardVariants };
