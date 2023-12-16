interface ItemProps {
  src: string;
  title: string;
  desc: string;
}

export function Item({ src, title, desc }: ItemProps) {
  return (
    <div className="py-3 sm:py-10 text-center border-t-2 border-green-200">
      <div className="p-1 bg-emerald-100">
        <img
          className="w-full h-[250px] sm:h-[450px] object-contain"
          src={src}
        />
      </div>
      <h3 className="mt-3 text-3xl font-semibold">{title}</h3>
      <p className="mt-2 text-xl text-slate-600">{desc}</p>
    </div>
  );
}
