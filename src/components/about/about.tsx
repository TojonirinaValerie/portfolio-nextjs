import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-row items-center justify-center">
      <div className="flex flex-row  items-start w-full max-w-lg relative pt-6 gap-4">
        <div className="w-full bg-black h-[1px] absolute top-0"></div>
        <h2 className="flex flex-row items-center flex-1 uppercase px-2 font-medium">
          <span className="w-2 h-2 bg-black rounded-full mr-4"></span>A propos
          de moi
        </h2>
        <article className="flex flex-col flex-2 gap-10">
          <p className="font-medium text-lg">
            Depuis toujours, je suis passionné par l’informatique et les
            innovations technologiques. Cette passion m’a naturellement conduit
            vers le développement web, où je peux combiner logique, créativité
            et résolution de problèmes
          </p>
          <div className="flex flex-row gap-6">
            <div className="rounded-sm overflow-hidden flex-1">
              <Image
                src="/assets/me.jpg"
                alt=""
                className="w-full h-auto aspect-[3/4] object-cover"
                width={800}
                height={800}
              />
            </div>
            <div className="flex-2 text-md flex flex-col gap-3">
              <p>
                En tant que développeur Fullstack, j’aime travailler aussi bien
                sur le front-end pour offrir une interface fluide et agréable,
                que sur le back-end pour assurer la performance et la fiabilité
                des applications.
              </p>
              <p>
                Je suis constamment à la recherche de nouveaux défis pour
                améliorer mes compétences et rester à jour sur les dernières
                technologies. Pour moi, chaque projet est une opportunité
                d’apprendre, de créer et de livrer de la valeur.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
