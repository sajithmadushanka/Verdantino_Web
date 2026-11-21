import Image from "next/image";

export default function Mission() {
  return (
    <section
      id="about"
      aria-labelledby="mission-heading"
      className="scroll-mt-8 px-6 py-28 sm:px-10 sm:py-36 lg:px-14 bg-mist/60"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Full Brand Name Logo Showcase */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/brand.png"
            alt="VERDANTINO Eco Innovations"
            width={430}
            height={140}
            priority
          className="h-24 w-auto sm:h-28 lg:h-32 object-contain mix-blend-multiply"
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
