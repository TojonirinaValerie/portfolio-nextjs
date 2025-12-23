import { useEffect } from "react";

export default function Loading() {
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
      <h1 className="text-2xl animate-pulse">Loading...</h1>
    </div>
  );
}
