import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useAppStore } from "@/store/store";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const { setAboutRef } = useAppStore();
  const sectionRef = useRef(null);
  const ligne = useRef(null);
  const about = useRef(null);

  useEffect(() => {
    setAboutRef(about);
  }, [about, setAboutRef]);

  useEffect(() => {
    gsap.from(ligne.current, {
      width: 0,
      scrollTrigger: {
        trigger: ligne.current,
        start: "top 80%",
        end: "top 45%",
        // markers: true,
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const lt = gsap.timeline();

    lt.from(sectionRef.current, {
      x: "40vw",
      y: "200px",
      opacity: 1,
      // ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 100%",
        end: "top 50%",
        // markers: true,
        toggleActions: "play none none reverse",
        scrub: true,
      },
    }).fromTo(
      sectionRef.current,
      {},
      {
        x: -100,
        // y: -200,
        opacity: 1,
        // ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 0%",
          // markers: true,
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      className="w-full min-h-screen flex flex-row items-center justify-center"
      ref={about}
    >
      <div className="flex flex-col w-full max-w-lg" ref={sectionRef}>
        <div className="w-full bg-black h-[2px]" ref={ligne}></div>
        <div className="flex flex-row items-start w-full max-w-lg mt-6 gap-4">
          <h2 className="flex flex-row items-center flex-1 uppercase px-2 font-medium">
            <span className="w-2 h-2 bg-black rounded-full mr-4"></span>A propos
            de moi
          </h2>
          <article className="flex flex-col flex-2 gap-10">
            <p className="font-medium text-lg">
              Je m&apos;appelle TOJONIRINA Tsilavina Valerie, développeur logiciel,
              avec une expertise en développement front-end et back-end,
              passionné par la conception d&apos;applications modernes, performantes
              et centrées sur l&apos;utilisateur.
            </p>
            <div className="flex flex-row gap-6">
              <div className="rounded-sm overflow-hidden flex-1">
                <Image
                  src="/assets/me1.png"
                  alt=""
                  className="w-full h-auto aspect-[3/4] object-cover"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="flex-2 text-md flex flex-col gap-3">
                <p>
                  Au cours de mes projets académiques et personnels, j&apos;ai
                  développé des solutions complètes en utilisant des
                  technologies telles que React, Next.js, Node.js, TypeScript et
                  ASP.NET Core. J&apos;accorde une importance particulière à la
                  qualité du code, à la maintenabilité et au respect des bonnes
                  pratiques du développement logiciel.
                </p>
                <p>
                  Je suis constamment à la recherche de nouveaux défis pour
                  améliorer mes compétences et rester à jour sur les dernières
                  technologies. Pour moi, chaque projet est une opportunité
                  d&apos;apprendre, de créer et de livrer de la valeur.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
