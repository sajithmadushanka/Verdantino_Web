import Image from "next/image";

export default function Mission() {
  return (
    <section
      id="about"
      aria-labelledby="mission-heading"
      className="scroll-mt-8 bg-canvas px-6 py-28 sm:px-10 sm:py-36 lg:px-14"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Full Brand Name Logo Showcase */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/brand.png"
            alt="VERDANTINO Eco Innovations"
            width={480}
            height={160}
            priority
            className="h-16 w-auto object-contain sm:h-20 mix-blend-multiply transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        <p className="mb-6 text-xs font-medium tracking-[0.4em] uppercase text-primary">
          OUR MISSION
        </p>
        <h2
          id="mission-heading"
          className="font-serif text-4xl font-medium leading-tight text-forest sm:text-5xl lg:text-6xl"
        >
          A Greener Future Starts Indoors.
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-base leading-loose text-muted sm:text-lg">
          We believe everyone should have the opportunity to grow fresh,
          healthy food wherever they are. VERDANTINO Eco Innovations brings together the
          science of growing, practical knowledge and innovative solutions to
          make indoor gardening easier and more accessible.
        </p>
      </div>
    </section>
  );
}
