import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ProjectType } from "./projects";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Icon } from "@iconify/react/dist/iconify.js";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ProjectItem: React.FC<
  { index: number; length: number } & ProjectType
> = ({ color, name, description, image1, image2, technologies, url }) => {
  const nameTitle = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const mm = gsap.matchMedia();

  useEffect(() => {
    gsap.from(nameTitle.current, {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: nameTitle.current,
        start: "top 95%",
        end: "top 70%",
        // markers: true,
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    mm.add("(min-width: 64rem)", () => {
      const ImageScrollTriggerFromOption: gsap.DOMTarget | ScrollTrigger.Vars =
        {
          trigger: image1Ref.current,
          start: "top 100%",
          end: "top 60%",
          // markers: true,
          toggleActions: "play none none reverse",
          scrub: true,
        };
      const ImageScrollTriggerFromToOption:
        | gsap.DOMTarget
        | ScrollTrigger.Vars = {
        trigger: image1Ref.current,
        start: "top 5%",
        end: "bottom 0%",
        // markers: true,
        toggleActions: "play none none reverse",
        scrub: true,
      };

      gsap.from(image1Ref.current, {
        y: 100,
        rotation: -20,
        scrollTrigger: ImageScrollTriggerFromOption,
      });
      gsap.from(image2Ref.current, {
        y: 200,
        rotation: 6,
        scrollTrigger: ImageScrollTriggerFromOption,
      });

      gsap.fromTo(
        image1Ref.current,
        {},
        {
          y: -100,
          x: -100,
          rotation: -20,
          scrollTrigger: ImageScrollTriggerFromToOption,
        }
      );
      gsap.fromTo(
        image2Ref.current,
        {},
        {
          y: -100,
          x: 100,
          rotation: 6,
          scrollTrigger: ImageScrollTriggerFromToOption,
        }
      );
    });
  }, []);

  useEffect(() => {
    const box = boxRef.current;

    if (!box) return;
    // const handleMouseEnter = () => {
    //   gsap.to(image1Ref.current, {
    //     scale: 1.2, // zoom léger
    //     rotation: -15, // rotation
    //     duration: 0.3,
    //     x: -120,
    //     ease: "power2.out",
    //     // scrollTrigger: {
    //     //   trigger: image2Ref.current,
    //     //   start: "top 60%",
    //     //   end: "top 30%",
    //     //   markers: true,
    //     // },
    //   });
    //   gsap.to(image2Ref.current, {
    //     scale: 1.2, // zoom léger
    //     rotation: 10, // rotation
    //     duration: 0.3,
    //     x: 120,
    //     ease: "power2.out",
    //     // scrollTrigger: {
    //     //   trigger: image2Ref.current,
    //     //   start: "top 60%",
    //     //   end: "top 30%",
    //     // },
    //   });
    // };

    // const handleMouseLeave = () => {
    //   gsap.to(image1Ref.current, {
    //     scale: 1,
    //     rotation: -10,
    //     duration: 0.3,
    //     x: -60,
    //     ease: "power2.out",
    //   });
    //   gsap.to(image2Ref.current, {
    //     scale: 1,
    //     rotation: 2,
    //     duration: 0.3,
    //     x: 60,
    //     ease: "power2.out",
    //   });
    // };

    // box.addEventListener("mouseenter", handleMouseEnter);
    // box.addEventListener("mouseleave", handleMouseLeave);

    // cleanup
    return () => {
      // box.removeEventListener("mouseenter", handleMouseEnter);
      // box.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full h-[50vw] max-lg:h-[50vh] max-lg:min-h-[500px]">
      <div className={`w-full h-[100vw] rounded-t-full ${color} max-lg:h-[100vh] max-lg:rounded-none`}>
        <div className="flex flex-row justify-center w-full">
          <div
            className="lg:relative flex flex-col justify-center items-center pt-[23vw] w-[max-content] max-[1200px]:w-full max-lg:pt-[0]"
            ref={boxRef}
          >
            <Image
              src={`/assets/project-images${image1}`}
              className="w-[18vw] max-w-[300px] h-[auto] absolute object-cover rounded-xl 
                top-[-120px] -rotate-[10deg] z-2 translate-x-[-60px] max-lg:hidden"
              width={1000}
              height={1000}
              alt=""
              ref={image1Ref}
            />
            <Image
              src={`/assets/project-images${image2}`}
              className="w-[18vw] max-w-[300px] h-[auto] absolute object-cover rounded-xl
                top-[-120px] rotate-[2deg] z-1 translate-x-[60px] translate-y-[80px]  max-lg:hidden"
              width={1000}
              height={1000}
              alt=""
              ref={image2Ref}
            />
            <div className="lg:hidden relative mb-6">
              <Image
                src={`/assets/project-images${image1}`}
                className="w-[18vw] max-w-[300px] min-w-[150px] h-[auto] object-cover rounded-xl top-0 absolute
                 -rotate-[10deg] z-2 translate-x-[-60px] "
                width={1000}
                height={1000}
                alt=""
                ref={image1Ref}
              />
              <Image
                src={`/assets/project-images${image2}`}
                className="w-[18vw] max-w-[300px] min-w-[150px] h-[auto] object-cover rounded-xl 
                 rotate-[2deg] z-1 translate-x-[60px]"
                width={1000}
                height={1000}
                alt=""
                ref={image2Ref}
              />
            </div>
            <p className="flex flex-row items-center justify-center gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={`${name}-techno-${tech}-${i}`}
                  className="py-1 px-2 bg-black text-white rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
              {/* {index}/{length} */}
            </p>
            <motion.h2
              ref={nameTitle}
              className="text-[6rem] max-w-1/2 text-center leading-22 mb-4 max-[1300px]:text-[3rem] max-[1300px]:leading-12 max-[1300px]:mt-2 max-[1200px]:max-w-[full]"
            >
              {name}
            </motion.h2>
            <p className="max-w-[200px] text-center text-[0.9rem]">
              {description}
            </p>
            {url && (
              <a
                href={url}
                target="_blank"
                className="relative border border-black rounded-full text-md py-2 px-8 flex flex-row items-center gap-1 
              cursor-pointer mt-2 group hover:text-white transition-all duration-700 overflow-hidden"
              >
                <span className="absolute top-0 left-[-200px] w-[200px] h-[100px] bg-black z-1 group-hover:left-0 transition-all duration-700"></span>
                <span className="z-2">Voir</span>
                <span
                  className="z-2 w-0 opacity-0 overflow-hidden group-hover:block group-hover:w-7  group-hover:opacity-100 transition-all group-hover:text-white
                duration-700 transform group-hover:translate-x-2 ease-in-out"
                >
                  <Icon icon="mdi-light:arrow-right" fontSize={30} />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
