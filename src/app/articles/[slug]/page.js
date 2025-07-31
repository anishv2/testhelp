import { GetArticle } from "@/actions/article.action";
import Breadcrumbs from "@/components/common/breadcrumbs";
import AppLayout from "@/components/common/layout";
import Container from "@/components/common/container";
import Article from "@/components/articles/article";
import Image from "next/image";
import AppConfig from "@/config/app.config";
import { cache } from "react";
import AlertBox from "@/components/common/alert";

export const dynamic = "force-dynamic";

export const fetchCachedArticle = cache(async (slug) => {
  const res = await GetArticle(slug);
  return res?.data?.[0] || null;
});

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const article = await fetchCachedArticle(slug);

  return {
    title: `${article?.title} | Aletheia`,
    description: article?.description || "Read this article on Aletheia.",
    openGraph: {
      title: `${article?.title} | Aletheia`,
      description: article?.description || "Read this article on Aletheia.",
      images: [
        {
          url: `${AppConfig.baseURL}${article?.cover?.url}`,
          alt: article?.cover?.name,
        },
      ],
    },
  };
}

const ArticlePage = async ({ params }) => {
  const slug = (await params).slug;
  if (!slug) return;
  const article = await fetchCachedArticle(slug);
  const category = article?.category;
  const cover = article?.cover;

  const breadCrumbElement = {
    label: category?.name,
    path: `/categories/${category?.slug}`,
  };

  if (!article) {
    return <AlertBox message={"Sorry! This article not exist."} />;
  }

  return (
    <AppLayout>
      <div className="">
        <div className="border border-gray-300">
          <Container className="px-4">
            <Breadcrumbs element={breadCrumbElement} />
          </Container>
        </div>
        <Container className="p-4">
          {cover?.url && (
            <div className="relative min-h-40 sm:h-60 md:h-100 rounded-2xl overflow-hidden mb-6">
              <Image
                src={`${AppConfig.baseURL}${cover?.url}`}
                alt={cover?.name}
                fill
                sizes="100%"
                className="object-cover w-full"
                loading="lazy"
              />
            </div>
          )}
          <Article article={article} />
        </Container>
      </div>
    </AppLayout>
  );
};

export default ArticlePage;
