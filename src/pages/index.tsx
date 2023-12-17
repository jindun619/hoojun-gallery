import { supabase } from "@/lib/supabase/client";

import { FolderItem } from "@/components/FolderItem";
import { Meta } from "@/components/Meta";

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
      <Meta title="홈" />
      <div className="hero min-h-screen bg-green-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://aultcbwwbvogqsnhhfgo.supabase.co/storage/v1/object/public/images/heroimg"
            className="max-w-xs rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl sm:text-5xl text-neutral-600 font-bold"><span className="text-green-500">김호준 갤러리</span>에 오신 것을 환영합니다!</h1>
            <p className="py-6 text-neutral-600 font-semibold">
              김호준의 ㄹㅇ TMI를 보고 싶으시다면 시작하기를 눌러주세요!
            </p>
            <button
              className="btn border-none bg-[#3a8e75] text-[#e6e6e6] hover:bg-[#216652]"
              onClick={scrollToBottom}>
              시작하기
            </button>
          </div>
        </div>
      </div>
      <div id="folders-section">
        <div className="w-10/12 sm:w-[640px] mx-auto py-10 text-center border-b-2 border-green-200">
          <h1 className="text-3xl text-neutral-600 font-semibold">폴더 선택</h1>
          <h2 className="mt-2 text-xl">
            {/*Lorem Ipsum Lorem Ipsum Lorem Ipsum...*/}
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
  const { data } = await supabase.from("folders").select();

  if (data) {
    await Promise.all(
      data.map(async (v) => {
        const { data: images } = await supabase.storage
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
    revalidate: 10,
  };
};
