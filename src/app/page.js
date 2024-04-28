'use client'
import { useRef } from "react";
import { ArrowDown, Cat } from "lucide-react";
import { useState } from "react";


export default function Home() {
  const videoRef = useRef();

  const [handleClick, setClick] = useState(false);

  if (handleClick) {
    const video = videoRef.current;
    video.play();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className={`flex items-center justify-center flex-col ${handleClick ? "hidden" : ""}`}>
        <p className="text-3xl font-bold">Pedro</p>
        <ArrowDown size={30} />
        <a className="cursor-pointer" onClick={() => setClick(true)}>
          <Cat size={100} />
        </a>
        <h1 className="text-3xl font-bold">Click on the Pedro</h1>
      </div>
      <video ref={videoRef} className={handleClick ? "rounded-full" : "rounded-full hidden"} width="620" height="620" style={{ clipPath: "circle()" }}>
          <source src="/pedro.mp4" type="video/mp4" />
        </video>
    </main>
  );
}
