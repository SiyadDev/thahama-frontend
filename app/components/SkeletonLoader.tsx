/**
 * Skeleton Loader Component
 * 
 * Provides a skeleton loading state for better perceived performance.
 */

interface SkeletonLoaderProps {
  className?: string;
  variant?: "section" | "card" | "hero";
}

export default function SkeletonLoader({ className = "", variant = "section" }: SkeletonLoaderProps) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]";
  
  const variants = {
    hero: "h-screen",
    section: "h-96",
    card: "h-64 rounded-lg",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      <div className="h-full w-full bg-gray-200/50" />
    </div>
  );
}

