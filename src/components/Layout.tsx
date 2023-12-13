import React from "react";
import { Navbar } from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto border-x-2">{children}</div>
    </>
  );
}
