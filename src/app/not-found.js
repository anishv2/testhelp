import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
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
          Sorry! That page doesn&#39;t seem to exist.
        </h1>
        <Link
          href="/"
          className="text-sm sm:text-lg text-white border border-gray-200 rounded-xl py-2 px-4 font-medium"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
