import Image from "next/image";
// import { useEffect, useState } from "react";

type SkillType = {
  name: string;
  icon: string;
};
const SkillsSection = () => {
  // const [radius, setRadius] = useState(window.innerHeight / 1.2);
  const skills: SkillType[] = [
    { name: "React", icon: "/React.svg" },
    { name: "Angular", icon: "/Angular.svg" },
    { name: "Next.js", icon: "/Next.js.svg" },
    { name: "Node.js", icon: "/Node.js.svg" },
    { name: "CSharp", icon: "/CSharp.svg" },
    { name: "CSS3", icon: "/CSS3.svg" },
    { name: "Express", icon: "/Express.svg" },
    { name: "HTML5", icon: "/HTML5.svg" },
    { name: "JavaScript", icon: "/JavaScript.svg" },
    { name: "MongoDB", icon: "/MongoDB.svg" },
    { name: "Net core", icon: "/Net_core.svg" },
    { name: "PostgresSQL", icon: "/PostgresSQL.svg" },
    { name: "TypeScript", icon: "/TypeScript.svg" },
  ];

  // useEffect(() => {
  //   const onResize = () => setRadius(window.innerHeight / 1.2);

  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // }, []);

  const SkillItem: React.FC<{ skill: SkillType }> = ({ skill }) => {
    return (
      <div className="flex flex-col items-center gap-2">
        <Image
          src={`/assets/skills${skill.icon}`}
          className="w-18 h-18"
          width={200}
          height={200}
          alt=""
          style={{}}
        />
        <p>{skill.name}</p>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-20 min-h-screen 
      max-lg:px-8
      max-sm:px-4">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-7xl font-medium text-center max-lg:text-[3rem] max-md:text-3xl">Mes competence</h1>
          <p className="text-xl max-w-[800px] text-center text-gray-700 max-lg:text-lg max-md:text-md">
            Mon stack technique évolue avec les tendances du web. Voici les
            outils que j&apos;utilise au quotidien.
          </p>
        </div>
        <div className="flex flex-row gap-20 justify-center items-center flex-wrap max-w-[1200px] p-8 mt-8">
          {skills.map((skill) => (
            <SkillItem skill={skill} key={skill.name}/>
          ))}
        </div>
      </div>
      {/* <div
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden  "
      id="#skills"
    >
      <div className="flex flex-col items-center gap-4 mt-[10vh] ">
        <h1 className="text-7xl font-medium">Mes competence</h1>
        <p className="text-xl max-w-[800px] text-center text-gray-700">
          Mon stack technique évolue avec les tendances du web. Voici les outils
          que j&apos;utilise au quotidien.
        </p>
      </div>
      <div
        className="absolute top-[100vh] flex flex-row justify-center items-center -z-1  "
        style={{
          animation: "rotateInfinite 50s linear infinite",
        }}
      >
        <div className="flex flex-row items-center justify-center ">
          {[...skills, ...skills].map((skill, i) => {
            const angle = (360 / (skills.length * 2)) * i;

            return (
              <div
                key={`${i}-${skill.name}`}
                className="absolute w-26 h-26 flex items-center justify-center bg-background"
                style={{
                  transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                  // transformOrigin: "center",
                }}
              >
                <Image
                  src={`/assets/skills${skill.icon}`}
                  className="w-18 h-18"
                  width={200}
                  height={200}
                  alt=""
                  style={{}}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div> */}
    </>
  );
};

export default SkillsSection;
