"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";

interface Props {
  storgeKey?: string;
}

const SideBar = ({ storgeKey = "t-sidebar-state" }: Props) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storgeKey,
    {}
  );

  const { organization: activeOrganization, isLoaded: isLoadedOrganization } =
    useOrganization();

  const { userMemberships, isLoaded: isLoadedOrganizationList } =
    useOrganizationList({
      userMemberships: {
        infinite: true,
      },
    });

  const defaultAccoridionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }

      return acc;
    },
    []
  );

  const onExpanded = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  if (
    !isLoadedOrganization ||
    !isLoadedOrganizationList ||
    userMemberships.isLoading
  ) {
    return (
      <>
        <Skeleton />
      </>
    );
  }
  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">WorkSpaces</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/select-org">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccoridionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <p key={organization.id}>{organization.id}</p>
        ))}
      </Accordion>
    </>
  );
};

export default SideBar;
