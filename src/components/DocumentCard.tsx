import Image from "next/image";

interface DocumentCardProps {
  title: string;
  timestamp: string;
  onClick: () => void;
}

export default function DocumentCard({ title, timestamp, onClick }: DocumentCardProps) {
  return (
    <div onClick={onClick} className="bg-white p-4 rounded-lg shadow w-[280px] sm:w-[300px] md:w-[320px] border border-[#CACACA] cursor-pointer">
      <div className="bg-[#D9D9D9] h-40 w-auto mt-2 mx-2 mb-2 flex items-center justify-center rounded">
        <Image src="/Document.svg" alt="Document Icon" width={50} height={40} />
      </div>
      <div className="mt-4 mx-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-black">{timestamp}</p>
      </div>
    </div>
  );
}

