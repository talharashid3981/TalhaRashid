type SectionHeadingProps = {
  id: string;
  title: string;
  className?: string;
};

export default function SectionHeading({
  id,
  title,
  className = "relative mb-8 flex w-full justify-center overflow-visible py-4 text-center md:mb-12",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2
        id={id}
        data-heading={title}
        className="section-heading relative -m-6 inline-flex items-center justify-center p-6 font-display text-[clamp(2rem,7.5vw,4.5rem)] font-black uppercase leading-none tracking-wider md:text-[clamp(4rem,7vw,7.5rem)] md:tracking-widest"
      >
        {title}
      </h2>
    </div>
  );
}
