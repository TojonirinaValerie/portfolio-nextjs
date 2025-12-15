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
            Je suis TOJONIRINA Tsilavina Valerie, développeur logiciel, avec une
            expertise en développement front-end et back-end, passionné par la
            conception d’applications modernes, performantes et centrées sur
            l’utilisateur.
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
                Au cours de mes projets académiques et personnels, j’ai
                développé des solutions complètes en utilisant des technologies
                telles que React, Next.js, Node.js, TypeScript et ASP.NET Core.
                J’accorde une importance particulière à la qualité du code, à la
                maintenabilité et au respect des bonnes pratiques du
                développement logiciel.
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
