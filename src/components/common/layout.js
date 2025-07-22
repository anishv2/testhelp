import { CommonHeader } from "./header";
import Section from "./section";
import Container from "./container";
import Icons from "./icons";

const AppLayout = ({ children }) => {
  return (
    <>
    <CommonHeader />
      <main className="transition-all duration-200 min-h-screen">
        <Section className="bg-gradient-to-b from-slate-900 to-slate-800">
          <Container className="flex items-center gap-x-5 p-2 sm:p-8 sm:h-[200px]">
            <div className="relative flex items-center w-full max-w-xl text-gray-700">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                <Icons.search className="size-6" />
              </div>
              <input
                type="search"
                className="ps-10 pe-4 py-2 sm:py-4 sm:ps-10 sm:pe-6 outline-none bg-gray-50 border border-gray-400 rounded-full h-full w-full"
                placeholder="Search..."
              />
            </div>
            <button className="bg-slate-500 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full">Search</button>
          </Container>
        </Section>
        <div className="overflow-auto h-full">{children}</div>
      </main>
    </>
  );
};

export default AppLayout;
