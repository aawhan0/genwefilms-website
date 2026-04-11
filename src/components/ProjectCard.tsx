import { useRef } from "react";
import MuxPlayer from "@mux/mux-player-react";

export default function ProjectCard({ project }: any) {
  const videoRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play?.();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause?.();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative w-full h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🎥 Video */}
      <MuxPlayer
        ref={videoRef}
        playbackId={project.playbackId}
        muted
        playsInline
        preload="metadata"
        streamType="on-demand"
        autoPlay={false}
        {...({ controls: false } as any)} // 👈 removes controls (TS safe)
        style={{ pointerEvents: "none" }} // 👈 disables UI interaction
        className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
        poster={`https://image.mux.com/${project.playbackId}/thumbnail.jpg?time=1`}
      />

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-300" />

      {/* 📝 Text */}
      <div className="absolute bottom-6 left-6 right-6 text-white z-10">
        <h3 className="text-2xl font-heading italic">{project.title}</h3>
        <p className="text-white/60 text-sm mt-1">{project.type}</p>
      </div>
    </div>
  );
}