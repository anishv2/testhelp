"use client";
import AppLayout from "./layout";
import Icons from "./icons";
import { useRouter } from "next/navigation";

const AlertBox = ({ message, buttonType = "back" }) => {
  const router = useRouter();
  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center gap-y-16 min-h-[75vh] p-6">
        <div className="flex flex-col items-center justify-center gap-y-8">
          <Icons.noArticle className="size-20 sm:size-25 text-gray-500" />
          <h1 className="text-lg sm:text-2xl text-center text-gray-500">
            {message}
          </h1>

          {buttonType === "home" ? (
            <button
              className="text-sm sm:text-lg text-gray-500 border border-gray-500 rounded-xl py-2 px-4 font-medium cursor-pointer"
              onClick={() => router.push("/")}
            >
              Go to Home
            </button>
          ) : (
            <button
              className="text-sm sm:text-lg text-gray-500 border border-gray-500 rounded-xl py-2 px-4 font-medium cursor-pointer"
              onClick={() => router.back(-1)}
            >
              Back
            </button>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default AlertBox;
