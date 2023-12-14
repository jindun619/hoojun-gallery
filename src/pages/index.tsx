import { FolderItem } from "@/components/FolderItem";

export default function IndexPage() {
  const scrollToBottom = () => {
    const foldersSection = document.getElementById("folders-section");
    window.scrollTo({
      top: foldersSection?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hero min-h-screen bg-green-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              className="btn bg-[#3a8e75] text-[#e6e6e6] hover:bg-[#216652]"
              onClick={scrollToBottom}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div id="folders-section">
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
              src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais"
            />
            <FolderItem
              name="folderName2"
              src="https://d19h8kn98xvxar.cloudfront.net/images/_hero/connectwithnature.jpg"
            />
            <FolderItem
              name="folderName3"
              src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais"
            />
          </div>
        </div>
      </div>
    </>
  );
}
