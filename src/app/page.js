import Container from "@/components/common/container";
import Link from "next/link";
import Section from "@/components/common/section";
import { GetCategories } from "@/actions/category.action";
import FAQ from "@/components/faq";
import HeroSection from "@/components/home/hero";
import { HomeHeader } from "@/components/common/header";

export const dynamic = 'force-dynamic';
export const metadata = {
  title: "Help Center | Aletheia",
  description: "Help Center | Aletheia",
};

export default async function Home() {
  const data = await GetCategories();
  return (
    <>
      <HomeHeader />
      <main>
        {/* Hero section */}
        <HeroSection />
        {/* Help center section */}
        <Section className="pb-4 sec-gradient-bg">
          <Container className="py-10 sm:px-8 sm:py-20">
            <h2 className="text-2xl md:text-[50px] text-center font-semibold mb-8 text-secondary">
              Help center
            </h2>
            <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.data?.map((categ) => (
                <Link
                  href={`/categories/${categ?.slug}`}
                  key={categ?.id}
                  className="rounded-xl p-4 transition-all duration-300 overflow-hidden bg-gray-50 border border-gray-100 shadow-sm hover:bg-gray-50 hover:shadow-2xl hover:shadow-gray-400 hover:translate-y-2"
                >
                  <div className="">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-r from-indigo-600 to-sky-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-dark-600 mb-3">
                      {categ?.name}
                    </h3>
                    <p className="text-gray-600">{categ?.description}</p>
                  </div>
                </Link>
              ))}
            </Section>
          </Container>
        </Section>
        {/* FAQ section */}
        <FAQ />
      </main>
    </>
  );
}
