"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Section from "../common/section";
import Link from "next/link";
import Image from "next/image";

const generateSlug = (text) => {
  return text.toLowerCase().trim().replace(/\s+/g, "-");
};

const Article = ({ content }) => {
  const subHeadings = content.flatMap(({ level, children }) =>
    level === 2 ? children.map(({ text }) => ({ text, link: `#${text}` })) : []
  );

  return (
    <Section className="p-0 flex flex-col md:flex-row justify-between items-start w-full gap-x-14">
      <div className="order-2 md:order-1 w-full md:w-[65%] flex justify-between gap-12">
        <div className="flex-1 space-y-12 overflow-x-hidden mb-12">
          <article className="flex-1 overflow-y-auto ">
            {/* <div className="text-tertiary mb-10 text-sm tracking-wide">
                  Updated: {dayjs(article?.updatedAt).format("DD MMMM YYYY")}
                </div> */}
            <div className="mb-12 max-w-none text-base font-normal">
              {/* {article?.content?.map((block, index) => (
                      <div key={index}>
                        {block?.children?.map((text, i) =>
                          block?.type === "heading" ? (
                            <h2
                              key={i}
                              className="font-semibold text-xl md:text-2xl mb-2"
                            >
                              {text?.text}
                            </h2>
                          ) : (
                            <p key={i} className="leading-8 mb-2">
                              {text?.text}
                            </p>
                          )
                        )}
                      </div>
                    ))} */}
              <BlocksRenderer
                content={content}
                blocks={{
                  paragraph: ({ children }) => (
                    <p className={`leading-8 mb-2`}>{children}</p>
                  ),
                  heading: ({ children, level }) => {
                    switch (level) {
                      case 1:
                        return;
                      case 2:
                        return (
                          <h2
                            id={generateSlug(children[0].props.text)}
                            className="font-medium text-xl md:text-2xl pt-5 mb-2"
                          >
                            {children}
                          </h2>
                        );
                      case 3:
                        return (
                          <h3 className="font-medium text-lg md:text-[22px] mb-2">
                            {children}
                          </h3>
                        );
                      case 4:
                        return (
                          <h4 className="font-medium text-base md:text-xl mb-2">
                            {children}
                          </h4>
                        );
                      case 5:
                        return (
                          <h5 className="font-medium text-sm md:text-lg mb-2">
                            {children}
                          </h5>
                        );
                      case 6:
                        return (
                          <h6 className="font-medium text-[10px] md:text-sm mb-2">
                            {children}
                          </h6>
                        );
                      default:
                        return <div className="leading-8 mb-2">{children}</div>;
                    }
                  },
                  image: ({ image }) => {
                    console.log(image);
                    return (
                      <Image
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt={image.alternativeText || ""}
                      />
                    );
                  },
                }}
              />
            </div>
          </article>
        </div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-[35%] bg-indigo-50 p-5 mb-5 border-gray-300 rounded-lg">
        <h3 className="mb-4 text-xl font-semibold">In this article</h3>
        <ul className="mb-6 text-base space-y-2 text-indigo-400">
          {subHeadings.map(({ text, link }) => (
            <li key={text} className="text-base hover:underline">
              <Link href={`#${generateSlug(text)}`}>{text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Article;
