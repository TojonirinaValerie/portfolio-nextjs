"use client";

import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
type SmoothScrollbarWrapperProps = {
  children: React.ReactNode;
};

const SmoothScrollbarWrapper: React.FC<SmoothScrollbarWrapperProps> = ({
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) {
      console.log("No container found");
      return;
    }

    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping: 0.05,
      alwaysShowTracks: true,
    });
    console.log("Scrollbar initialized");

    scrollbar.addListener((status) => {
      console.log(status.offset.y);
    });

    return () => {
      scrollbar.destroy();
    };
  }, []);
  return (
    <div className="z-10 h-[200vh]" ref={scrollRef}>
      <div className="bg-background">{children}</div>
    </div>
  );
};

export default SmoothScrollbarWrapper;
