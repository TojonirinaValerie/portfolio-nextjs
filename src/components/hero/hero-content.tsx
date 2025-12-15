import { Icon } from "@iconify/react";
import { Button } from "../ui/button";

const socialLink = [
  {
    name: "facebook",
    icon: "mdi:facebook",
    url: "https://www.facebook.com/tsilavina.tojonirina/",
  },
  { name: "linkedin", icon: "mdi:linkedin", url: "https://www.linkedin.com/in/tsilavina-valerie-tojonirina-701245222/" },
  { name: "github", icon: "mdi:github", url: "https://github.com/TojonirinaValerie" },
  { name: "discord", icon: "mdi:discord", url: "https://discord.com/users/1115500456089763840" },
];
const HeroContent = () => {
  return (
    <main className=" text-white flex flex-col items-center justify-center h-full w-full border">
      <div className="flex flex-row gap-2 px-12 w-full max-w-lg">
        <div className="flex flex-col flex-1 items-center">
          <h1 className="text-xl pl-1 text-center">
            Bonjour, je suis{" "}
            <span className="text-red text-4xl ">Tojonirina</span>
          </h1>
          <h1 className="text-8xl text-[600] pl-0 text-center">
            Développeur <span className="text-red">Fullstack</span>
          </h1>
          <p className="text-base mt-2 max-w-[600px] text-gray-300  pl-1 text-center">
            Passionné par l&apos;univers numérique et les nouvelles
            technologies, je réalise des applications robustes et évolutives
          </p>
          <Button
            variant="primary"
            className="mt-10 text-base rounded-full px-8"
          >
            Contacter
          </Button>
        </div>
      </div>
      {/* <div className="flex flex-row gap-2 px-12 w-full max-w-lg">
        <div className="flex flex-col flex-1 items-start">
          <h1 className="text-xl pl-1">
            Bonjour, je suis{" "}
            <span className="text-red text-4xl ">Tojonirina</span>
          </h1>
          <h1 className="text-8xl text-[600] pl-0">
            Développeur <span className="text-red">Fullstack</span>
          </h1>
          <p className="text-base mt-2 max-w-[600px] text-gray-300  pl-1">
            Passionné par l&apos;univers numérique et les nouvelles
            technologies, je réalise des applications robustes et évolutives
          </p>
          <Button variant="primary" className="mt-10 text-base rounded-full px-8">Contacter</Button>
        </div>
        <div className="flex flex-col flex-1 items-start"></div> 
        </div> */}
      <aside className="absolute right-0 flex flex-row items-center gap-6 rotate-90 top-[50vh] text-base -mr-[180px] z-10 text-gray-300">
        <span>Reseaux sociaux</span>
        <div className="w-[150px] h-[1px] bg-gray-300 mt-[3px]"></div>
        <ul className="flex flex-row gap-4">
          {socialLink.map(({ name, icon, url }) => (
            <li
              key={name}
              className="transition-all hover:-rotate-90 hover:scale-[1.1] hover:text-red"
            >
              <a href={url} target="_blank">
                <Icon icon={icon} fontSize={25} />
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
};

export default HeroContent;
