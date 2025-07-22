"use client";
import { SidebarMenus } from "@/utils/menu";
import Link from "next/link";
import { useState } from "react";
import Icons from "./icons";



const Sidebar = ({ data }) => {
  const [ sidebarData, setSidebarData] = useState(data || []);
  const articles = sidebarData.map((sd)=>({ name: sd.title, url: `/articles/${sd.slug}`}));

  const SidebarMenuList = [...SidebarMenus, { headingTitle: "Articles", children: articles }];

  return (
    <aside className="hidden md:block absolute inset-0 w-[250px] h-full border border-gray-200">
      <div className="flex flex-col flex-1 p-4">
        <form className="">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
              placeholder="Search..."
              required
            />
          </div>
        </form>
      </div>
      <div className="px-4">
      {SidebarMenuList?.map((menu) => (
        <div key={menu?.headingTitle}>
            <strong className="block font-semibold p-2">{menu?.headingTitle}</strong>
            <div className="flex flex-col gap-1">
              {menu?.children?.map((child) => (
                <Link key={child?.name} href={child?.url} className="flex items-center justify-between text-xs sm:text-sm rounded py-1 px-2 hover:bg-gray-200">
                  <span className="me-2">
                  {child?.name}
                  </span>
                  {child?.children && <span>
                    <Icons.arrowRight />
                  </span>}
                </Link>
              ))}
            </div>
          </div>
      ))}
      </div>
    </aside>
  );
};

export default Sidebar;
