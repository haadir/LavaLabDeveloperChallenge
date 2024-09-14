"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Sidebar() {
  const [selectedTab, setSelectedTab] = useState("All Projects");

  const getButtonStyles = (tabName: string) => {
    const isSelected = selectedTab === tabName;
    return `
      flex items-center w-full justify-start font-semibold
      ${isSelected ? "text-[#34347B] bg-[#C1C1D0] bg-opacity-55" : "text-[#505064]"}
      hover:bg-[#C1C1D0] hover:bg-opacity-55
    `;
  };

  return (
    <aside className="w-72 bg-[#EDEDED] p-4 hidden md:flex flex-col items-center pt-12 border-x border-[#CBCBD5]">
      <div className="flex items-center mb-8 mt-4 mr-5">
        <button onClick={() => {}}>
          <Image src="/AroLogo.svg" alt="Logo" width={130} height={100} />
        </button>
      </div>
      <div className="flex items-center ml-[-40px]">
        <nav className="flex-1 w-full text-[#505064] space-y-1.5">
          <Button
            variant="ghost"
            className={`${getButtonStyles("All Projects")} ml-[5px] mb-1`}
            onClick={() => setSelectedTab("All Projects")}
          >
            <Image src="icons/home-variant.svg" alt="Home" width={20} height={15} className="mr-3 mt-[-4px]" />
            All Projects
          </Button>
          <Button
            variant="ghost"
            className={`${getButtonStyles("Your Projects")} mb-1`}
            onClick={() => setSelectedTab("Your Projects")}
          >
            <Image src="icons/account.svg" alt="Your projects" width={30} height={24} className="mr-2 mt-[-4px]" />
            Your projects
          </Button>
          <Button
            variant="ghost"
            className={`${getButtonStyles("Shared with You")} mb-1`}
            onClick={() => setSelectedTab("Shared with You")}
          >
            <Image src="icons/shared.svg" alt="Shared with you" width={30} height={24} className="mr-2 mt-[-4px]" />
            Shared with you
          </Button>
          <Button
            variant="ghost"
            className={`${getButtonStyles("Archived")} mb-1 ml-1`}
            onClick={() => setSelectedTab("Archived")}
          >
            <Image src="icons/archive.svg" alt="Archived" width={25} height={24} className="mr-[9px] mt-[-4px]" />
            Archived
          </Button>
          <Button
            variant="ghost"
            className={`${getButtonStyles("Trash")} mb-1`}
            onClick={() => setSelectedTab("Trash")}
          >
            <Image src="icons/delete.svg" alt="Trash" width={30} height={24} className="mr-2 mt-[-4px] ml-[1.5px]" />
            Trash
          </Button>
        </nav>
      </div>

      <div className="w-full mt-auto mb-1 p-4">
        <Button className="w-full mt-auto font-semibold bg-[#34347B] text-white text-md hover:opacity-90 hover:bg-[#34347B]">
          +  New
        </Button>
      </div>
    </aside>
  );
}
