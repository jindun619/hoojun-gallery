import React from "react";
import { Navbar } from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="bg-green-100">{children}</div>
    </>
  );
}
