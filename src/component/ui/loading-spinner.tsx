import { cn } from "@/script/util/ui-utils";

interface Props {
  className?: string;
}

const LoadingSpinner = ({ className }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "inline-block size-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
          className
        )}
        role="status"
      />
      {/* <div className="size-12 animate-spin rounded-full border-t-4 border-solid border-primary" /> */}
    </div>
  );
};

export default LoadingSpinner;
