import { useAppStore } from "@/store/store";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Header = () => {
  const { projectRef } = useAppStore();
  const logoRef = useRef(null);
  const borderTopRRef = useRef(null);
  const borderBottomLRef = useRef(null);

  useEffect(() => {
    if (!projectRef) return;

    console.log(projectRef);

    gsap.to(logoRef.current, {
      background: "#00000000",
      // ease: "back.out",
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 0%",
        end: "top 5%",
        // markers: true,
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
    gsap.to(borderTopRRef.current, {
      boxShadow: "none",
      // ease: "back.out",
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 0%",
        end: "top 5%",
        // markers: true,
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
    gsap.to(borderBottomLRef.current, {
      boxShadow: "none",
      // ease: "back.out",
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 0%",
        end: "top 5%",
        // markers: true,
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  }, [projectRef]);
  return (
    <header className="fixed top-4 z-50 w-full flex flex-row justify-between text-white text-4xl px-4">
      <div
        className="flex flex-row relative skew-x-[-6deg] -translate-x-[5px] bg-background p-5 px-6 rounded-br-[10px]"
        ref={logoRef}
      >
        <span
          className="w-[16px] h-[16px]  rounded-tl-[10px] absolute -bottom-[16px] left-[11px] shadow-[-4px_-4px_#f1f1f1]"
          ref={borderTopRRef}
        ></span>
        <span className=" text-black skew-x-[6deg]">TOJO</span>
        <span
          className="w-[16px] h-[16px]  rounded-tl-[10px] absolute top-[1px] -right-[16px] shadow-[-4px_-4px_#f1f1f1]"
          ref={borderBottomLRef}
        ></span>
      </div>
      <nav className="m-4">
        <div className="w-[80px] h-[50px] flex flex-col justify-center items-center">
          {/* <div className="bg-white w-[60px] h-[5px] "></div>
          <div className="bg-white w-[60px] h-[5px] mt-3"></div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
