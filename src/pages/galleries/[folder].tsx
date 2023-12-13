import { Item } from "@/components/Item";
import { useRouter } from "next/router";

export default function GalleryPage() {
  const router = useRouter();
  const { query } = router;
  const { folder } = query;
  return (
    <>
      <div className="mt-32 w-10/12 sm:w-[640px] mx-auto py-10 text-center border-b">
        <h2 className="text-3xl">{folder}</h2>
      </div>
      <div className="w-full mx-auto max-w-screen-md">
        <Item
          src="http://via.placeholder.com/640x480"
          title="title1"
          desc="desc1"
        />
        <Item
          src="http://via.placeholder.com/200x100"
          title="title2"
          desc="desc2"
        />
      </div>
    </>
  );
}
