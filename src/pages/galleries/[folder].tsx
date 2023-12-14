import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Item } from "@/components/Item";
import Link from "next/link";

export default function GalleryPage() {
  const router = useRouter();
  const { query } = router;
  const { folder } = query;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollBtnVisible, setScrollBtnVisible] = useState<boolean>(true);

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //calculate progress bar percentage
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
  //update scroll btn's state(visibility)
  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.onscroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setScrollBtnVisible(true);
      } else {
        setScrollBtnVisible(false);
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <>
      <progress
        className="progress progress-success bg-green-100 fixed top-0 w-full h-1"
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
        <div className="fixed bottom-1/2 right-7 flex flex-col gap-4">
          <button
            className={`btn btn-square bg-green-300 hover:bg-green-500 border-none transition-all animate-fade ${
              scrollBtnVisible ? "" : "hidden"
            }`}
            onClick={scrollToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="12"
              viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </button>
          <Link href="/">
            <button
              className={`btn btn-square bg-green-300 hover:bg-green-500 border-none transition-all animate-fade ${
                scrollBtnVisible ? "" : "hidden"
              }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="18"
                viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
