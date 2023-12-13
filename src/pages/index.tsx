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
        <div className="w-10/12 sm:w-[640px] mx-auto py-10 text-center border-b">
          <h1 className="text-3xl">Welcome to ...</h1>
          <h2 className="mt-2 text-xl">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum...
          </h2>
        </div>
        <div className="py-10">
          <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            <div className="border text-center hover:animate-pulse">
              <h2 className="text-3xl">Folder Name</h2>
              <div className="w-full h-[250px] p-1 border-2 bg-slate-100">
                <img
                  className="w-full h-full object-contain"
                  src="http://via.placeholder.com/640x480"
                />
              </div>
            </div>
            <div className="border text-center hover:animate-pulse">
              <h2 className="text-3xl">Folder Name</h2>
              <div className="w-full h-[250px] p-1 border-2 bg-slate-100">
                <img
                  className="w-full h-full object-contain"
                  src="http://via.placeholder.com/640x780"
                />
              </div>
            </div>
            <div className="border text-center hover:animate-pulse">
              <h2 className="text-3xl">Folder Name</h2>
              <div className="w-full h-[250px] p-1 border-2 bg-slate-100">
                <img
                  className="w-full h-full object-contain"
                  src="http://via.placeholder.com/850x380"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
