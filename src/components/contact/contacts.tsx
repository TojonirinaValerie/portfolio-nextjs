import { Icon } from "@iconify/react";
import { socialLink } from "../hero/hero-content";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactSection = () => {
  const ligne = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(ligne.current, {
      width: 0,
      // ease: "back.out",
      scrollTrigger: {
        trigger: ligne.current,
        start: "top 75%",
        end: "top 45%",
        // markers: true,
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    let lt = gsap.timeline();

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
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div
        className="flex flex-col justify-center max-w-[1200px]"
        ref={sectionRef}
      >
        <div className="w-full bg-black h-[2px] mb-6" ref={ligne}></div>
        <h1 className="flex flex-row items-center flex-1 uppercase px-2 font-medium">
          <span className="w-2 h-2 bg-black rounded-full mr-4"></span>Contact
        </h1>
        <div className="flex flex-row gap-14 justify-between">
          <div className="w-1/2">
            <h2 className="px-2 text-[3rem] leading-14 font-medium my-4">
              Créons quelque chose de grand ensemble
            </h2>
            <p className="px-2 text-lg text-[#434343]">
              Je suis toujours ouvert à de nouvelles opportunités, projets ou
              collaborations. Que vous ayez une idée, une question ou l’envie de
              travailler ensemble, n’hésitez pas à me contacter.
            </p>
          </div>
          <div className="flex flex-col w-[max-content]">
            <ul className="my-6 flex flex-col gap-3">
              {socialLink.map(({ url, icon, pseudo }) => {
                return (
                  <li
                    className="flex flex-row transition-all hover:text-red text-[#434343]"
                    key={`contact-${url}`}
                  >
                    <a
                      href={url}
                      target="_blank"
                      className="flex-row flex items-center text-lg gap-2"
                    >
                      <Icon icon={icon} fontSize={40} />
                      <span className="h-[max-content]">{pseudo}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
