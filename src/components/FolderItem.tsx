interface FolderItemProps {
  name: string;
  src: string;
}

export function FolderItem({ name, src }: FolderItemProps) {
  return (
    <div className="border text-center hover:animate-pulse">
      <h2 className="text-3xl">{name}</h2>
      <div className="w-full h-[250px] p-1 border-2 bg-slate-100">
        <img className="w-full h-full object-contain" src={src} />
      </div>
    </div>
  );
}
