import React, { PropsWithChildren } from "react";
import OrganizationControl from "./_components/OrganizationControl";

const OrganizationIdLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <OrganizationControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
