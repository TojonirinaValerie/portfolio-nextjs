import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ProjectType } from "./projects";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ProjectItem: React.FC<
  { index: number; length: number } & ProjectType
> = ({ color, name, description, index, length, image1, image2 }) => {
  const nameTitle = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const boxRef = useRef<HTMLDivElement>(null);

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

    const ImageScrollTriggerFromOption: gsap.DOMTarget | ScrollTrigger.Vars = {
      trigger: image1Ref.current,
      start: "top 100%",
      end: "top 60%",
      toggleActions: "play none none reverse",
      scrub: true,
    };
    const ImageScrollTriggerFromToOption: gsap.DOMTarget | ScrollTrigger.Vars =
      {
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
  }, []);

  useEffect(() => {
    const box = boxRef.current;

    if (!box) return;
    const handleMouseEnter = () => {
      gsap.to(image1Ref.current, {
        scale: 1.2, // zoom léger
        rotation: -15, // rotation
        duration: 0.3,
        x: -120,
        ease: "power2.out",
      });
      gsap.to(image2Ref.current, {
        scale: 1.2, // zoom léger
        rotation: 10, // rotation
        duration: 0.3,
        x: 120,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image1Ref.current, {
        scale: 1,
        rotation: -10,
        duration: 0.3,
        x: -60,
        ease: "power2.out",
      });
      gsap.to(image2Ref.current, {
        scale: 1,
        rotation: 2,
        duration: 0.3,
        x: 60,
        ease: "power2.out",
      });
    };

    box.addEventListener("mouseenter", handleMouseEnter);
    box.addEventListener("mouseleave", handleMouseLeave);

    // cleanup
    return () => {
      box.removeEventListener("mouseenter", handleMouseEnter);
      box.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w=full h-[50vw]">
      <div className={`w=full h-[100vw] rounded-t-full ${color}`}>
        <div className="flex flex-row justify-center w-full">
          <div
            className="relative flex flex-col justify-center items-center pt-[25vw] w-[max-content] cursor-pointer"
            ref={boxRef}
          >
            <Image
              src={`/assets/project-images${image1}`}
              className="w-[18vw] max-w-[300px] h-[auto] absolute object-cover rounded-xl 
              top-[-120px] -rotate-[10deg] z-2 translate-x-[-60px] "
              width={1000}
              height={1000}
              alt=""
              ref={image1Ref}
            />
            <Image
              src={`/assets/project-images${image2}`}
              className="w-[18vw] max-w-[300px] h-[auto] absolute object-cover rounded-xl
              top-[-120px] rotate-[2deg] z-1 translate-x-[60px] translate-y-[80px]"
              width={1000}
              height={1000}
              alt=""
              ref={image2Ref}
            />
            <p>
              {index}/{length}
            </p>
            <motion.h2
              ref={nameTitle}
              className="text-[6rem] max-w-1/2 text-center leading-22 my-4"
            >
              {name}
            </motion.h2>
            <p className="max-w-[200px] text-center text-[0.9rem]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
