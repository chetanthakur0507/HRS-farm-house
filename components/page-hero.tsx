type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 md:pt-36">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
        <span className="section-label mb-4 block">{eyebrow}</span>
        <h1 className="text-4xl leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-cream/72">{description}</p>
      </div>
    </section>
  );
}