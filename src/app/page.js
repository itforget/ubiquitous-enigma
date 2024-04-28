'use client'
import { useRef } from "react";
import { ArrowDown, Cat, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const videoRef = useRef();
  const [handleClick, setClick] = useState(false);

  if (handleClick === true) {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  } else {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }


  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${darkMode ? "bg-gray-900 text-white" : "bg-[var(--foreground-rgb: 0, 0, 0, --background-start-rgb: 214, 219, 220 ,--background-end-rgb: 255, 255, 255)] text-black"}`}>
      <button className="absolute top-0 right-0 p-3" onClick={toggleDarkMode}>
      {darkMode ? <Moon size={30} /> : <Sun size={30} />}
      </button>
      <div className={`flex items-center justify-center flex-col ${handleClick ? "hidden" : ""}`}>
        <p className="text-3xl font-bold">Pedro</p>
        <ArrowDown size={30} />
        <a className="cursor-pointer" onClick={() => setClick(true)}>
          <Cat size={100} />
        </a>
        <h1 className="text-3xl font-bold">Click on the Pedro</h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-5">
        <video ref={videoRef} className={handleClick ? "rounded-full" : "rounded-full hidden"} width="620" height="620" style={{ clipPath: "circle()" }}>
            <source src="/pedro.mp4" type="video/mp4" />
        </video>
        <button className={`text-2xl font-bold ${handleClick ? "" : "hidden"}`} onClick={() => setClick(false)} type="button">Reset</button>
      </div>
    </main>
  );
}
