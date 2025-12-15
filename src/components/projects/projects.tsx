const ProjectsSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className=" max-w-lg border">
        <div className="h-screen flex flex-col items-center">
          <h1 className="text-[5rem] text-center">
            Quelques-unes de mes réalisations
          </h1>
        </div>
      </div>
      <div className="w-full h-[450vh] overflow-hidden ">
        <div className="w=full h-[250vh] bg-gray-500 rounded-t-full"></div>
        <div className="w=full h-[250vh] -translate-y-[150vh] bg-amber-200 rounded-t-full"></div>
        <div className="w=full h-[250vh] -translate-y-[300vh] bg-blue-300 rounded-t-full"></div>
        <div className="w=full h-[150vh] -translate-y-[450vh] bg-emerald-200 rounded-t-full"></div>
      </div>
    </div>
  );
};

export default ProjectsSection;
