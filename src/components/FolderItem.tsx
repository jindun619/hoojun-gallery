import { useState } from "react";

interface FolderItemProps {
  name: string;
  src: string;
}

export function FolderItem({ name, src }: FolderItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>();

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false);
  };

  return (
    <div
      className="text-center hover:animate-pulse"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <h2 className={`text-3xl ${isHovered ? "text-green-200" : ""}`}>
        {name}
      </h2>
      <div
        className={`w-full h-[250px] p-1 bg-emerald-100 ${
          isHovered ? "border-4 border-green-200" : ""
        }`}>
        <img className="w-full h-full object-contain" src={src} />
      </div>
    </div>
  );
}
