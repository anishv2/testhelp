import Image from "next/image";

const UnderMaintenance = () => (
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
        Under Development
      </h1>
    </div>
  </div>
);

export default UnderMaintenance;
