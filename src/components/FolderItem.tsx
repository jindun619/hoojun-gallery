import { useState } from "react";
import Link from "next/link";

interface FolderItemProps {
  name: string;
  src: string;
}

export function FolderItem({ name, src }: FolderItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={`/galleries/${name}`}>
      <div
        className="text-center hover:animate-pulse"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <h2
          className={`text-3xl font-semibold ${
            isHovered ? "text-green-400" : ""
          }`}>
          {name}
        </h2>
        <div className="w-full h-[250px] p-1 bg-emerald-100">
          <img className="w-full h-full object-contain" src={src} />
        </div>
      </div>
    </Link>
  );
}
