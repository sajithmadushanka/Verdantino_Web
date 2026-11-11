import { Leaf, FlaskConical, Wrench, type LucideIcon } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Indoor Growing",
    description: "Discover smarter ways to grow fresh food at home.",
    icon: Leaf,
  },
  {
    title: "Growing Knowledge",
    description:
      "Learn the science behind healthier plants and successful growing.",
    icon: FlaskConical,
  },
  {
    title: "Growing Solutions",
    description:
      "Explore tools, equipment and innovative products for indoor cultivation.",
    icon: Wrench,
  },
];

export default function Features() {
  return (
    <section
      id="vision"
      aria-labelledby="features-heading"
      className="scroll-mt-8 bg-mist/60 px-6 py-28 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-6 text-xs font-medium tracking-[0.4em] text-primary">
            OUR VISION
          </p>
          <h2
            id="features-heading"
            className="font-serif text-4xl font-medium leading-tight text-forest sm:text-5xl"
          >
            What We&apos;re Growing
          </h2>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              className="group rounded-3xl border border-sage/30 bg-canvas p-9 transition duration-500 hover:-translate-y-1 hover:border-sage hover:shadow-[0_20px_40px_-24px_rgba(32,61,43,0.35)] sm:p-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <p className="mt-10 text-xs tracking-[0.3em] text-sage">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-3xl font-medium text-forest">
                {title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
