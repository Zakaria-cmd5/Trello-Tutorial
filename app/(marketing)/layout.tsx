import React, { PropsWithChildren } from "react";
import NavBar from "./_components/NavBar";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full bg-slate-100">
      <NavBar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
    </div>
  );
};

export default layout;
