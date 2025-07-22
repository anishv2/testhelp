"use client";
import { useState, useRef, useEffect } from "react";
import Icons from "../common/icons";

const Accordion = ({ title, content, isLast }) => {
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const handleToggle = () => setToggle((prev) => !prev);

  useEffect(() => {
    if (toggle && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [toggle]);

  return (
    <div className="border border-gray-300 rounded-2xl overflow-hidden transition-all duration-300">
      <div
        className="p-4 flex items-center justify-between gap-x-2 text-white main-bg cursor-pointer"
        onClick={handleToggle}
      >
        <h5 className="text-sm sm:text-base font-medium w-[98%]">{title}</h5>
        <div>{toggle ? <Icons.arrowUp /> : <Icons.arrowDown />}</div>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out bg-white text-gray-500"
      >
        <div className="p-4 text-sm sm:text-base">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
