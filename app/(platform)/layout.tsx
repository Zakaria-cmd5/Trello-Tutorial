import { ClerkProvider } from "@clerk/nextjs";
import React, { PropsWithChildren } from "react";
import { Toaster } from "sonner";

const PlatformLayout = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
