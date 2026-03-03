import { OrbitingCircles } from "./ObitingCircles";

export function Frameworks() {
  // Ring 1 (outermost, largest) — 8 icons, well spaced
  const ring1 = [
    "react",
    "Node.js",
    "PostgresSQL",
    "TypeScript",
    "Google Cloud",
    "openai-svgrepo-com",
    "nestjs",
    "stripe",
  ];

  // Ring 2 (middle) — 8 icons
  const ring2 = [
    "javascript",
    "dotnet",
    "Digital Ocean",
    "vitejs",
    "tailwindcss",
    "threejs",
    "html5",
    "css3",
  ];

  // Ring 3 (inner, smallest) — 7 icons
  const ring3 = [
    "git",
    "GitHub",
    "Slack",
    "microsoft",
    "sqlite",
    "NPM",
    "visualstudiocode",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={38} radius={190} speed={0.7}>
        {ring1.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={130} reverse speed={1}>
        {ring2.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={24} radius={70} speed={1.4}>
        {ring3.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" onError={(e) => e.target.style.display = 'none'} />
);
