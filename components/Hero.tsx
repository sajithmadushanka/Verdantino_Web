import Image from "next/image";
import SubscribeForm from "./SubscribeForm";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-forest"
    >
      {/* Ambient glowing background aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 right-[-10%] h-[550px] w-[550px] rounded-full bg-primary/30 blur-[130px]" />
        <div className="absolute top-1/2 left-[-15%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-sage/20 blur-[140px]" />
        <div className="absolute -bottom-32 right-[20%] h-[400px] w-[400px] rounded-full bg-primary/25 blur-[110px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/95 to-forest" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-40 sm:px-10 lg:px-14">
        {/* Brand identity badge */}
        <div
          className="mb-8 inline-flex animate-fade-up items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="VERDANTINO icon"
              width={20}
              height={20}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-xs font-medium tracking-[0.35em] uppercase text-mist">
            ECO INNOVATIONS &bull; COMING SOON
          </span>
        </div>

        <h1
          className="max-w-3xl animate-fade-up font-serif text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-8xl"
          style={{ animationDelay: "0.25s" }}
        >
          Something Fresh
          <br />
          <span className="italic text-mist">Is Growing.</span>
        </h1>

        <p
          className="mt-8 max-w-xl animate-fade-up text-base leading-relaxed text-white/80 sm:text-lg"
          style={{ animationDelay: "0.4s" }}
        >
          We&apos;re cultivating a new way to grow. Discover the future of
          indoor gardening, fresh food and sustainable living with VERDANTINO
          Eco Innovations.
        </p>

        <div
          className="mt-12 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
