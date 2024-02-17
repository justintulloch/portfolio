import GradientBg from "../_components/gradient";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate p-[1em]">
      <div className="flex-1 pb-16 md:pb-20 lg:pb-24">{children}</div>
      <div className="absolute inset-0 -z-10 h-[90vh] foo ">
        <GradientBg />
      </div>
    </div>
  );
}
