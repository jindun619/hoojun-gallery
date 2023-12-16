import Image from "next/image";

interface ItemProps {
  src: string;
  title: string;
  desc: string;
}

export function Item({ src, title, desc }: ItemProps) {
  return (
    <div className="py-3 sm:py-10 text-center border-t-2 border-green-200">
      <div className="p-1 bg-emerald-100">
        <div className="relative w-full h-[250px] sm:h-[450px]">
          <Image src={src} alt={src} fill={true} className="object-contain" />
        </div>
      </div>
      <h3 className="mt-3 text-3xl font-semibold">{title}</h3>
      <p className="mt-2 text-xl text-slate-600">{desc}</p>
    </div>
  );
}
