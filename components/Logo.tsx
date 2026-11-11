import Image from "next/image";

type LogoProps = {
  tone?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
};

export default function Logo({
  tone = "dark",
  showTagline = true,
  className = "",
}: LogoProps) {
  const isLight = tone === "light";
  const textColor = isLight ? "text-white" : "text-forest";
  const subColor = isLight ? "text-sage" : "text-primary";

  return (
    <a
      href="#top"
      aria-label="VERDANTINO Eco Innovations home"
      className={`group inline-flex items-center gap-3 transition ${className}`}
    >
      <div
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl p-1.5 transition-transform duration-300 group-hover:scale-105 ${
          isLight
            ? "border border-white/15 bg-white/10 backdrop-blur-sm"
            : "border border-forest/10 bg-forest/5"
        }`}
      >
        <Image
          src="/images/logo.png"
          alt="VERDANTINO Eco Innovations icon"
          width={40}
          height={40}
          priority
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col text-left">
        <span
          className={`font-serif text-xl font-semibold tracking-[0.22em] leading-tight transition-colors ${textColor}`}
        >
          VERDANTINO
        </span>
        {showTagline && (
          <span
            className={`text-[9px] font-semibold tracking-[0.32em] uppercase transition-colors ${subColor}`}
          >
            ECO INNOVATIONS
          </span>
        )}
      </div>
    </a>
  );
}
