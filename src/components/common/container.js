import { cn } from "@/utils/twd-merge";
const Container = ({ className, children }) => (
  <div className={cn(`mx-auto max-w-[1440px]`, className)}>{children}</div>
);

export default Container;
