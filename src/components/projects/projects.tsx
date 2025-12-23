import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import ProjectItem from "./project-item";
import { useStore } from "@/store/store";

gsap.registerPlugin(ScrollTrigger, SplitText);

export type ProjectType = {
  name: string;
  description: string;
  image1: string;
  image2: string;
  color: string;
};

const ProjectsSection = () => {
  const projectList: ProjectType[] = [
    {
      name: "AgroHelp Consulting",
      description: "",
      image1: "/p11.png",
      image2: "/p12.png",
      color: "bg-[#FDE498]",
    },
    {
      name: "AllForOne Web site",
      description: "",
      image1: "/p21.png",
      image2: "/p22.png",
      color: "bg-white",
    },
    {
      name: "Chat App",
      description: "",
      image1: "/p31.png",
      image2: "/p32.png",
      color: "bg-[#F1EDE7]",
    },
  ];
  const { setProjectRef } = useStore();
  const project = useRef(null);

  useEffect(() => {
    setProjectRef(project);
  }, [project, setProjectRef]);

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center "
      ref={project}
    >
      <div className=" max-w-lg">
        <div className="flex flex-col items-center py-20">
          <h1 className="text-[5rem] text-center">
            Quelques-unes de mes réalisations
          </h1>
        </div>
      </div>
      <div className="w-full overflow-hidden pt-[300px]">
        {projectList.map((projectItem, index) => {
          return (
            <ProjectItem
              key={`project-${index}`}
              {...projectItem}
              index={index + 1}
              length={projectList.length}
            />
          );
        })}
        <div className="w=full h-[10vw]"></div>
      </div>
    </div>
  );
};

export default ProjectsSection;
