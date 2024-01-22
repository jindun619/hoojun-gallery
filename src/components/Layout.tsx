import React from "react";
import Footer from "./Footer";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="bg-green-100 min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
