
"use client";

import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import DocumentCard from '@/components/DocumentCard'


export default function Home() {

  const documents = [
    { title: 'Assignment 1', timestamp: '1m ago' },
    { title: 'Lab 3', timestamp: '40m ago' },
    { title: 'Workbook Ch. 3', timestamp: '2 hrs ago' },
    { title: 'Worksheet 2', timestamp: 'Apr 25, 2024' },
    { title: 'Resume', timestamp: 'March 27, 2023' },
    { title: 'Assignment 3', timestamp: 'Feb 20, 2023' },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#F7F7F7]">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-[#EDEDED]">
        <Button className="p-0 bg-transparent border-none shadow-none hover:bg-transparent">
          <Image src="/icons/listMobile.svg" alt="Home" width={30} height={15} className="ml-4" />
        </Button>
        <div className="flex items-center">
          <Image src="/AroLogo.svg" alt="Logo" width={130} height={100} className="mr-6" />
        </div>
        <Button variant="ghost" size="icon">
          <Image src="/icons/magnify.svg" alt="Home" width={40} height={15} className="mr-6" />
        </Button>
      </header>

      <div className="flex flex-1 overflow-hidden"> 
        <SideBar />
        <main className="flex-1 p-0 overflow-auto">
          <TopBar />

          <div className="max-w-7xl mx-auto pl-6 pr-6 pt-4">
            {/* Desktop Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-black ml-20">All Projects</h1>
              <div className="flex flex-row">
                <Button className="p-0 bg-transparent border-none shadow-none hover:bg-transparent">
                  <Image src="/icons/gridIcon.svg" alt="Home" width={30} height={15} className="mr-2" />
                </Button>
                <Button className="p-0 bg-transparent border-none shadow-none hover:bg-transparent">
                  <Image src="/icons/listViewIcon.svg" alt="Home" width={22} height={15} className="mr-3" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 ml-auto text-black sm: ml-10">
              {documents.map((doc, index) => (
                <DocumentCard key={index} title={doc.title} timestamp={doc.timestamp} onClick={() => console.log("here")} />
              ))}
            </div>
          </div>
        </main>
      </div>

      <Button className="md:hidden fixed right-4 bottom-4 rounded-full w-14 h-14 shadow-lg bg-[#34347B]">
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  )
}
