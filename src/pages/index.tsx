import { FolderItem } from "@/components/FolderItem";

export default function IndexPage() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-400">
        <img
          className="w-full h-full object-cover"
          src="https://i.redd.it/61a9uw3g312y.jpg"
        />
      </div>
      <div>
        <div className="w-10/12 sm:w-[640px] mx-auto py-10 text-center border-b-2 border-green-200">
          <h1 className="text-3xl">Welcome to ...</h1>
          <h2 className="mt-2 text-xl">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum...
          </h2>
        </div>
        <div className="py-10">
          <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            <FolderItem
              name="folderName1"
              src="http://via.placeholder.com/640x480"
            />
            <FolderItem
              name="folderName2"
              src="http://via.placeholder.com/640x780"
            />
            <FolderItem
              name="folderName3"
              src="http://via.placeholder.com/640x380"
            />
          </div>
        </div>
      </div>
    </>
  );
}
