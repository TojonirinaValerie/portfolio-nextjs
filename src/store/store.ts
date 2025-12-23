import { RefObject } from "react";
import { create } from "zustand";

type StoreType = {
  aboutRef: RefObject<HTMLDivElement | null> | null;

  projectRef: RefObject<HTMLDivElement | null> | null;
};
type StoreActionType = {
  setAboutRef: (value: RefObject<HTMLDivElement | null>) => void;
  setProjectRef: (value: RefObject<HTMLDivElement | null>) => void;
};
const useStore = create<StoreType & StoreActionType>((set) => ({
  aboutRef: null,
  projectRef: null,
  setAboutRef: (ref: RefObject<HTMLDivElement | null>) =>
    set({ aboutRef: ref }),
  setProjectRef: (ref: RefObject<HTMLDivElement | null>) =>
    set({ projectRef: ref }),
}));

export { useStore };
