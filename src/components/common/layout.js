import { CommonHeader } from "./header";
import Section from "./section";
import Container from "./container";
import Icons from "./icons";
import Searchbar from "./searchbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <CommonHeader />
      <main className="transition-all duration-200 min-h-screen">
        <Section className="bg-gradient-to-b from-slate-900 to-slate-800">
          <Container className="flex justify-center items-center gap-x-5 p-2 sm:p-8 sm:h-[200px]">
            <Searchbar />
          </Container>
        </Section>
        <div className="">{children}</div>
      </main>
    </>
  );
};

export default AppLayout;
