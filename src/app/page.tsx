"use client";

import { Dithering } from "@paper-design/shaders-react";

type Project = {
  name: string;
  type: string;
  year: string;
  href?: string;
};

const now: Project[] = [
  {
    name: "olive",
    type: "ios app",
    year: "26",
    href: "https://apps.apple.com/us/app/daily-bible-reading-olive/id6762354214",
  },
  {
    name: "sprig",
    type: "macos app",
    year: "26",
    href: "https://apps.apple.com/us/app/sprig-scratchpad/id6764240383",
  },
  {
    name: "crave",
    type: "diet app",
    year: "26",
    href: "https://github.com/fitzies/crave",
  },
  {
    name: "fightmeta",
    type: "martial arts",
    year: "26",
    href: "https://fightmeta.co",
  },
  { name: "yenga", type: "flashcards", year: "25", href: "https://yenga.co" },
  {
    name: "pro gear garage",
    type: "e-com",
    year: "25",
    href: "https://progeargarage.co",
  },
];

const work: Project[] = [
  {
    name: "cell journey",
    type: "client work",
    year: "26",
    href: "https://github.com/fitzies/cell-journey",
  },
  { name: "pulseflow", type: "automation", year: "25", href: "https://pulseflow.co" },
  { name: "ensu", type: "defi", year: "25", href: "https://github.com/fitzies/ensuv2" },
  { name: "mdala", type: "defi", year: "25", href: "https://mdala.io" },
  {
    name: "playgrounds",
    type: "defi",
    year: "25",
    href: "https://playgrounds.mdala.io",
  },
];

const archive: Project[] = [
  {
    name: "paperpilot",
    type: "ai writing",
    year: "22",
    href: "https://github.com/fitzies",
  },
  { name: "mpm", type: "army tool", year: "24" },
  { name: "negativephysics", type: "high school", year: "22" },
  { name: "linkedout", type: "high school", year: "22" },
];

function Row({ project }: { project: Project }) {
  const inner = (
    <>
      <span className="w-40 shrink-0">{project.name}</span>
      <span className="flex-1 text-white/40">{project.type}</span>
      <span className="w-8 text-right text-white/40">{project.year}</span>
    </>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex hover:underline"
      >
        {inner}
      </a>
    );
  }

  return <div className="flex text-white/40">{inner}</div>;
}

function Section({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  return (
    <div className="mb-10">
      <h2 className="text-white/40 mb-3">{title}</h2>
      <div className="space-y-1">
        {projects.map((p) => (
          <Row key={p.name} project={p} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="md:h-screen md:flex">
      <div className="w-full md:w-1/2 md:h-screen md:overflow-y-auto bg-black text-white font-mono p-8 flex flex-col min-h-screen">
        <div className="mb-12">
          <h1 className="text-lg font-normal">ojflabs</h1>
          <p className="text-lg font-normal">oliver fitzgerald</p>
          <p className="text-white/40">independent studio · for hire</p>
        </div>

        <Section title="now" projects={now} />
        <Section title="work" projects={work} />
        <Section title="archive" projects={archive} />

        <footer className="mt-auto pt-12 flex gap-4">
          <a
            href="https://github.com/fitzies"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            gh
          </a>
          <a href="mailto:olifitz1610@gmail.com" className="hover:underline">
            email
          </a>
        </footer>
      </div>

      <div className="hidden md:block md:w-1/2 md:h-screen">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack="hsl(0, 0%, 0%)"
          colorFront="hsl(80, 45%, 55%)"
          shape="dots"
          type="4x4"
          pxSize={3}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />
      </div>
    </div>
  );
}
