// import { useEffect } from "react";

// export function Navbar() {
//   useEffect(() => {
//     let prevScrollpos = window.scrollY;

//     window.onscroll = () => {
//       const currentScrollPos = window.scrollY;
//       const navbar = document.querySelector(".custom_navbar") as HTMLElement;

//       if (prevScrollpos > currentScrollPos) {
//         navbar.style.top = "0";
//       } else {
//         navbar.style.top = "-128px";
//       }

//       prevScrollpos = currentScrollPos;
//     };
//   }, []); // 빈 배열은 컴포넌트가 마운트될 때만 실행되도록 함
//   return (
//     <div className="custom_navbar fixed top-0 w-full h-32 bg-black opacity-30 transition-all">
//       a
//     </div>
//   );
// }
