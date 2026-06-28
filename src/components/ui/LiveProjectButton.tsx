import Link from "next/link";

type LiveProjectButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

export function LiveProjectButton({
  label = "View Results",
  href = "/services",
  className = "",
}: LiveProjectButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base no-underline ${className}`}
    >
      {label}
    </Link>
  );
}
