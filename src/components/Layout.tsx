import React from "react";
import Footer from "./Footer";
// import { Navbar } from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-green-100 min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
