import Container from "@/components/common/container";
import Section from "@/components/common/section";
import { GetCategories } from "@/actions/category.action";
import FAQ from "@/components/faq";
import HeroSection from "@/components/home/hero";
import { HomeHeader } from "@/components/common/header";
import CategoryCard from "@/components/categories/card";

export const dynamic = "force-dynamic";

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
        <Section className="pb-20 sm:min-h-[500px] sec-gradient-bg">
          <Container className="py-10 sm:px-8 sm:py-20">
            <h2 className="text-2xl md:text-[50px] text-center font-semibold mb-8 text-secondary">
              Help center
            </h2>
            <Section className="grid palce-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {data?.data?.map((categ) => (
                <CategoryCard key={categ?.documentId} category={categ}/>
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
