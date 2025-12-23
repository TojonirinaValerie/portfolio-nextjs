"use client";
import { useState, useEffect } from "react";
import SplashScreen from "./splash-screen";

type SplashScreenManagerProps = {
  children: React.ReactNode;
};

export default function SplashScreenManager({
  children,
}: Readonly<SplashScreenManagerProps>) {
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const onLoad = () => {
  //     setLoaded(true);
  //     console.log("Tout est chargé");
  //   };

  //   window.addEventListener("load", onLoad);

  //   return () => window.removeEventListener("load", onLoad);
  // }, [window]);

  // if (!loaded) return <SplashScreen />;

  return <> {children}</>;
}
