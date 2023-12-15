import { supabase } from "@/lib/supabase/client";

import { FolderItem } from "@/components/FolderItem";

interface Folder {
  id: number;
  name: string;
  desc: string;
  imgSrc: string;
}

export default function IndexPage({ folders }: { folders: Folder[] }) {
  console.log(folders);
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
            {folders.map((v, i) => (
              <FolderItem key={i} id={v.id} name={v.name} src={v.imgSrc} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const folders: Folder[] = [];
  const { data, error } = await supabase.from("folders").select();

  if (data) {
    await Promise.all(
      data.map(async (v, i) => {
        const { data: images, error } = await supabase.storage
          .from("images")
          .list(v.id);
        if (images?.[0]) {
          folders.push({
            id: v.id,
            name: v.name,
            desc: v.desc,
            imgSrc: `https://aultcbwwbvogqsnhhfgo.supabase.co/storage/v1/object/public/images/${v.id}/${images[0].name}`,
          });
        }
      })
    );
  }

  return {
    props: {
      folders,
    },
  };
};
