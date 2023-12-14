import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Item } from "@/components/Item";

export default function GalleryPage() {
  const router = useRouter();
  const { query } = router;
  const { folder } = query;

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollPercentage = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(scrollProgress);
  }, [scrollProgress]);

  return (
    <>
      <progress
        className="progress progress-success bg-green-100 fixed top-0 w-full h-0.5"
        value={scrollProgress}
        max="100"></progress>
      <div className="container mx-auto">
        <div className="w-10/12 sm:w-[640px] mx-auto py-10 text-center">
          <h2 className="text-4xl font-semibold">{folder}</h2>
        </div>
        <div className="w-full mx-auto max-w-screen-md">
          <Item
            src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais"
            title="title1"
            desc="desc1"
          />
          <Item
            src="https://d19h8kn98xvxar.cloudfront.net/images/_hero/connectwithnature.jpg"
            title="title2"
            desc="desc2"
          />
        </div>
      </div>
    </>
  );
}
