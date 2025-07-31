"use client";
import UnderMaintenance from "@/components/maintenance";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-y-16 min-h-screen main-bg p-6">
      <div className="relative w-[180px] h-[60px] mb-10">
        <Image
          src="/images/brandlogo2.webp"
          alt="Aletheia"
          fill
          sizes="100%"
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-10">
        <h1 className="text-2xl sm:text-4xl text-center text-white">
          Something went wrong!
        </h1>
        <button
          className="text-sm sm:text-lg text-white border border-gray-200 rounded-xl py-2 px-4 font-medium cursor-pointer"
          onClick={
            // Attempt to recover by trying to re-render the invoices route
            () => reset()
          }
        >
          Try again
        </button> 
      </div>
    </div>
  );
}
