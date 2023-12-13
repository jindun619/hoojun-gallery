interface ItemProps {
  src: string;
  title: string;
  desc: string;
}

export function Item({ src, title, desc }: ItemProps) {
  return (
    <div className="py-10 text-center border-b">
      <div className="p-1 bg-slate-100">
        <img className="w-full h-[450px] object-contain" src={src} />
      </div>
      <h3 className="mt-3 text-3xl">{title}</h3>
      <p className="mt-2 text-xl">{desc}</p>
    </div>
  );
}
