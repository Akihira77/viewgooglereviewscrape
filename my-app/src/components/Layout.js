import React from "react";
import { NavMenu } from "./NavMenu";

export const Layout = ({ children }) => {
  return (
    <div className="fs-4">
      <NavMenu />
      <div>{children}</div>
    </div>
  );
};
