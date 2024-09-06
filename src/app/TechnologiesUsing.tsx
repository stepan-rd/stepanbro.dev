type Props = {};

const technologies = [
  { name: "React", imgSrc: "/reactLogo.svg", https: "https://reactjs.org" },
  {
    name: "Tailwind",
    imgSrc: "/tailwindLogo.svg",
    https: "https://tailwindcss.com",
  },
  {
    name: "Framer",
    imgSrc: "/framerLogo.svg",
    https: "https://www.framer.com",
  },
  {
    name: "Next.js",
    imgSrc: "/nextJsLogo.svg",
    https: "https://nextjs.org",
  },
  {
    name: "Typescript",
    imgSrc: "/tsLogo.svg",
    https: "https://www.typescriptlang.org",
  },
];

export function TechnologiesUsing({}: Props) {
  return (
    <div className="flex flex-col font-geist">
      <h1 className="mt-16 text-xl text-[#ffffff]">stack</h1>
      <div className="flex items-center gap-5 mt-6 w-fit">
        {technologies.map((technology) => (
          <a
            key={technology.name}
            href={technology.https}
            title={technology.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={technology.imgSrc} alt="React Logo" />
          </a>
        ))}
      </div>
    </div>
  );
}
