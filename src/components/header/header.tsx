const Header = () => {
  return (
    <header className="fixed top-4 z-50 w-full flex flex-row justify-between text-white text-4xl px-4">
      <div className="flex flex-row relative skew-x-[-6deg] -translate-x-[5px] bg-background  p-5 px-6 rounded-br-[10px]">
        <span className="w-[16px] h-[16px]  rounded-tl-[10px] absolute -bottom-[16px] left-[11px] shadow-[-4px_-4px_#f1f1f1]"></span>
        <span className=" text-black skew-x-[6deg]">Logo</span>
        <span className="w-[16px] h-[16px]  rounded-tl-[10px] absolute top-[1px] -right-[16px] shadow-[-4px_-4px_#f1f1f1]"></span>
      </div>
      <nav className="m-4">
        <div className="w-[80px] h-[50px] flex flex-col justify-center items-center">
          <div className="bg-white w-[60px] h-[5px] "></div>
          <div className="bg-white w-[60px] h-[5px] mt-3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
