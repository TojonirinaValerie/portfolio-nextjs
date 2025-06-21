import Image from "next/image";

const GridOverlay = () => {
  return (
    <div className="fixed z-51 top-0 left-0 right-0 bottom-0 pointer-events-none">
      <Image
        src="assets/grid.svg"
        alt=""
        className="object-cover w-screen h-screen opacity-50"
        width={1800}
        height={1800}
      />
    </div>
  );
};

export default GridOverlay;
