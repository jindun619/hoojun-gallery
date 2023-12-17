import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface FolderItemProps {
  id: number;
  name: string;
  src: string;
}

export function FolderItem({ id, name, src }: FolderItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={`/galleries/${id}`}>
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
        <div className="mt-1 relative w-full h-[250px] p-1 bg-emerald-100">
          <Image src={src} alt={src} fill={true} className="object-contain" />
        </div>
      </div>
    </Link>
  );
}

