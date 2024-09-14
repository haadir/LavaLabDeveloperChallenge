"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";

export default function TopBar() {
    const [isOpen, setIsOpen] = useState(false)
   
    return (
    <div className="hidden md:flex items-center justify-between mb-8 bg-[#F7F7F7] px-4 h-40 border-b border-[#CBCBD5]">
      <div className="relative flex-grow mr-4 ml-12">
        <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#737373]" />
        <Input
           type="search"
           placeholder="Search in Aro"
           className="pl-14 pr-4 py-7 w-full text-black text-md border-[#CACACA]"
         />
      </div>
      <div className="lg:mr-12 xl:mr-12">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button
               variant="outline"
               className="flex items-center space-x-4 border border-[#CBCBD5] py-7 px-7 rounded-md hover:border-black h-[58px]"
            >
              <Avatar className="h-10 w-10">
                <Image src="/ProfilePic.svg" alt="Avatar" width={100} height={40} />
              </Avatar>
              <div className="flex flex-col items-start">
                <div className="font-400 font-semibold text-black hidden lg:block xl:block 2xl:block">Cole Gawin</div>
                <div className="text-sm text-gray-500 hidden lg:block xl:block 2xl:block">colegawin@gmail.com</div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              My Account
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="text-red-600">Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}