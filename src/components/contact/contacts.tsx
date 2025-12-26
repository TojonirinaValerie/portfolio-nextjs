import { Icon } from "@iconify/react";
import { socialLink } from "../hero/hero-content";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAppStore } from "@/store/store";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { setContactRef } = useAppStore();
  const contact = useRef(null);
  const ligne = useRef(null);
  const sectionRef = useRef(null);
  const mm = gsap.matchMedia();

  const duration = 0.2;
  const delay = 0.01;

  useEffect(() => {
    setContactRef(contact);
  }, [setContactRef, contact]);

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
    mm.add("(min-width: 64rem)", () => {
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
    });
  }, []);
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center py-20"
      ref={contact}
    >
      <div
        className="flex flex-col justify-center max-w-[1200px] px-16 max-lg:[max-content]
        max-lg:px-8
        max-sm:px-4 "
        ref={sectionRef}
      >
        <div
          className="w-full max-w-[90vw] bg-black h-[2px] mb-6 "
          ref={ligne}
        ></div>
        <h1 className="flex flex-row items-center flex-1 uppercase px-2 font-medium">
          <span className="w-2 h-2 bg-black rounded-full mr-4"></span>Contact
        </h1>
        <div className="flex flex-row gap-14 justify-between max-lg:flex-col">
          <div className="w-full">
            <h2 className="px-2 text-[3rem] leading-14 font-medium my-4  max-md:text-4xl max-md:leading-12">
              Créons quelque chose de grand ensemble
            </h2>
            <p className="px-2 text-lg text-[#434343] max-md:text-md">
              Je suis toujours ouvert à de nouvelles opportunités, projets ou
              collaborations. Que vous ayez une idée, une question ou
              l&apos;envie de travailler ensemble, n&apos;hésitez pas à me
              contacter.
            </p>
          </div>
          <div className="flex flex-col w-[max-content]">
            <ul className="my-6 flex flex-col gap-2">
              {socialLink.map(({ url, icon, pseudo }) => {
                return (
                  <li
                    className="flex flex-row transition-all hover:text-red text-[#434343]"
                    key={`contact-${url}`}
                  >
                    <a
                      href={url}
                      target="_blank"
                      className="flex-row flex items-center gap-2"
                    >
                      <Icon icon={icon} fontSize={30} />
                      <motion.div
                        initial={"initial"}
                        whileHover={"hovered"}
                        className="text-[1.6rem] relative block overflow-hidden whitespace-nowrap h-[max-content] font-medium leading-8 max-md:text-md"
                      >
                        <div>
                          {pseudo.split("").map((l, i) => {
                            return (
                              <motion.span
                                variants={{
                                  initial: { y: 0 },
                                  hovered: { y: "-100%" },
                                }}
                                transition={{
                                  duration: duration,
                                  ease: "easeInOut",
                                  delay: delay * i,
                                }}
                                key={i}
                                className="inline-block"
                              >
                                {l}
                              </motion.span>
                            );
                          })}
                        </div>
                        <div className="absolute inset-0">
                          {pseudo.split("").map((l, i) => {
                            return (
                              <motion.span
                                variants={{
                                  initial: { y: "100%" },
                                  hovered: { y: 0 },
                                }}
                                transition={{
                                  duration: duration,
                                  ease: "easeInOut",
                                  delay: delay * i,
                                }}
                                key={i}
                                className="inline-block"
                              >
                                {l}
                              </motion.span>
                            );
                          })}
                        </div>
                      </motion.div>
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
