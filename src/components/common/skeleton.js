import React from "react";

const Skeleton = () => {
  return (
    <div className="p-4 relative transition-all duration-300 overflow-hidden border-indigo-200 rounded-2xl bg-gray-200 animate-pulse h-46">
      <div className="relative">
        <div className="flex items-start justify-between">
          <h3 className="text-base sm:text-lg font-normal text-indigo-700 mb-3">
           
          </h3>
          <div className="flex items-center justify-center ms-3 mb-6 text-gray-400">
            {/* <Icons.externalLink className="size-6" /> */}
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-600 line-clamp-4">
          
        </p>
      </div>
    </div>
  );
};

export default Skeleton;
