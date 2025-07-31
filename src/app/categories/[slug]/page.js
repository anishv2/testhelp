import Breadcrumbs from "@/components/common/breadcrumbs";
import Container from "@/components/common/container";
import AppLayout from "@/components/common/layout";
import Section from "@/components/common/section";
import Link from "next/link";
import { GetArticles } from "@/actions/article.action";
import Icons from "@/components/common/icons";
import AlertBox from "@/components/common/alert";
import { cache } from "react";

export const dynamic = 'force-dynamic';

export const fetchCachedArticles = cache(async (slug) => {
  const res = await GetArticles(slug);
  return res?.data || [];
});

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const articles = await fetchCachedArticles(slug);
  const category = {
    name: articles[0]?.category?.name,
    description: articles[0]?.category?.description,
  };

  return {
    title: `${category?.name} | Aletheia`,
    description: category?.description || "Category on Aletheia."
  };
}

const CategorisedArticlesPage = async ({ params }) => {
  const { slug } = await params;
  const articles = await fetchCachedArticles(slug);
  const category = {
    name: articles[0]?.category?.name,
    description: articles[0]?.category?.description,
  };

  if (!articles?.length) {
    return <AlertBox message={"Sorry! This categories articles not exist."} />;
  }

  return (
    <AppLayout>
      <div className="">
        <div className="border border-gray-300">
          <Container className="px-4">
            <Breadcrumbs />
          </Container>
        </div>
        <Container className="pb-20 pt-10 px-4">
          <h1 className="text-2xl md:text-3xl my-4 leading-tight font-semibold">
            {category?.name}
          </h1>
          <p className="text-xl ms:text-2xl text-gray-400">
            {category?.description}
          </p>
         
          <Section className="p-0 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles?.map((article, ind) => (
              <Link
                href={`/articles/${article?.slug}`}
                key={article.id}
                className={`${
                  ind === articles?.length - 1 ? "md:border" : "border"
                } p-4 relative transition-all duration-300 overflow-hidden border-indigo-200 rounded-2xl bg-white`}
              >
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <h3 className="text-base sm:text-lg font-normal text-indigo-700 mb-3">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-center ms-3 mb-6 text-gray-400">
                      <Icons.externalLink className="size-6" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 line-clamp-4">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))}
          </Section>
        </Container>
      </div>
    </AppLayout>
  );
};

export default CategorisedArticlesPage;
