import Breadcrumbs from "@/components/common/breadcrumbs";
import Container from "@/components/common/container";
import AppLayout from "@/components/common/layout";
import Section from "@/components/common/section";
import Link from "next/link";
import AlertBox from "@/components/common/alert";
import { cache } from "react";
import { GetSearchResults } from "@/actions/search.action";
import Accordion from "@/components/faq/accordian";

export const dynamic = "force-dynamic";

export const fetchCachedSearchResults = cache(async (query) => {
  const res = await GetSearchResults(query);
  return res;
});


const SearchResultsPage = async ({ searchParams }) => {
  const { q } = searchParams;
  const results = await fetchCachedSearchResults(q);
  const { articles, faqs } = results;


  if (!results.articles.length && !results.faqs.length) {
    return <AlertBox message={"No results"} buttonType="home"/>;
  }

  return (
    <AppLayout>
      <div className="">
        <div className="border border-gray-300 mb-4">
          <Container className="px-4">
            <Breadcrumbs />
          </Container>
        </div>
        <Container className="pb-20 px-4 max-w-3xl">
          <p className="mb-5 text-xl ms:text-2xl text-indigo-600">
            Search results:
          </p>
          <Section className="space-y-8 p-0">
            {/* {categories?.length ? (
              <div className="">
                <strong className="mb-4 block font-semibold text-base sm:text-lg">
                  Categories
                </strong>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {categories?.map((cat, ind) => (
                    <Link
                      href={`/categories/${cat?.slug}`}
                      key={cat.id}
                      className={`border p-4 relative transition-all duration-300 overflow-hidden border-indigo-200 rounded-2xl bg-white`}
                    >
                      <div className="flex flex-col items-center justify-center ">
                        <div className="relative w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                          <Image
                            src={
                              cat?.categoryImage !== null
                                ? `${AppConfig.baseURL}${cat?.categoryImage?.url}`
                                : "/images/categories.png"
                            }
                            alt={cat.name}
                            fill
                            sizes="100%"
                            className="object-contain w-full"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex items-start justify-between">
                          <h3 className="text-base sm:text-lg font-normal text-indigo-700 mb-3">
                            {cat.name}
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 line-clamp-4">
                          {cat.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )} */}

            {articles.length ? (
              <>
                {/* <hr className="my-8 border-gray-200" /> */}
                <div className="">
                  <strong className="block mb-4 font-semibold text-base sm:text-lg">
                    Articles
                  </strong>
                  <div className=" grid grid-cols-1 gap-y-2">
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
                          </div>
                          <p className="text-sm sm:text-base text-gray-600 line-clamp-4">
                            {article.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            {faqs.length ? (
              <>
                {/* <hr className="my-8 border-gray-200" /> */}

                <div className="">
                  <strong className="block mb-4 font-semibold text-base sm:text-lg">
                    FAQs
                  </strong>
                  <div className=" grid grid-cols-1 gap-y-2">
                    {faqs?.map(({ question, answer }, ind) => (
                      <Accordion key={ind} title={question} content={answer} isLast={faqs?.length-1 === ind}/>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </Section>
        </Container>
      </div>
    </AppLayout>
  );
};

export default SearchResultsPage;
