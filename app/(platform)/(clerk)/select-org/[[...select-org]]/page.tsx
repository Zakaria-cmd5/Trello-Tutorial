import { OrganizationList } from "@clerk/nextjs";
import React from "react";

const CreateOrganazationPage = () => {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
};

export default CreateOrganazationPage;
