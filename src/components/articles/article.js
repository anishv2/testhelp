"use client";
// import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Section from "../common/section";
import Link from "next/link";
// import Image from "next/image";
import Markdown from "react-markdown";
import style from "./article.module.css";
import { extractH2Headings } from "@/utils/heading";

const generateSlug = (text) => {
  return text?.toLowerCase().trim().replace(/\s+/g, "-");
};

export const markdownComponents = () => {
  return {
    h2: function H2({ children, ...props }) {
      const text = generateSlug(children);

      return (
        <h2
          id={text}
          className="font-medium text-xl md:text-2xl pt-5 mb-2"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: function H3({ children, ...props }) {
      const text = generateSlug(children);
      return (
        <h3
          id={text}
          className="font-medium text-lg md:text-[22px] mb-2"
          {...props}
        >
          {children}
        </h3>
      );
    },
    h4: function H4({ children, ...props }) {
      const text = generateSlug(children);
      return (
        <h4
          id={text}
          className="font-medium text-base md:text-xl mb-2"
          {...props}
        >
          {children}
        </h4>
      );
    },
    h5: function H5({ children, ...props }) {
      const text = generateSlug(children);
      return (
        <h5
          id={text}
          className="font-medium text-sm md:text-lg mb-2"
          {...props}
        >
          {children}
        </h5>
      );
    },
    h6: function H6({ children, ...props }) {
      const text = generateSlug(children);
      return (
        <h6
          id={text}
          className="font-medium text-[10px] md:text-sm mb-2"
          {...props}
        >
          {children}
        </h6>
      );
    },
    p: (props) => <p className="leading-8 mb-2" {...props} />,
    a: (props) => (
      <a className="font-semibold leading-8 mb-2 cursor-pointer text-indigo-600" {...props} />
    ),
    ul: (props) => <ul className="ms-4 mb-2 p-1" {...props} />,
    li: (props) => (
      <li
        className="list-disc leading-8 mb-2 md:text-base md:leading-8"
        {...props}
      />
    ),
    pre: (props) => {
      return <>{props.children}</>;
    },
    code: ({ node, inline, className, children, ...props }) => {
      const content = String(children);
      if (content.includes("<video") && content.includes("</video>")) {
        return (
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className={style.article}
          />
        );
      }
      if (content.includes("<iframe") && content.includes("</iframe>")) {
        return (
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className={style.article}
          />
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    video: ({ node, ...props }) => <video {...props} controls width="100%" />,
    source: ({ node, ...props }) => <source {...props} />,
    iframe: (props) => <iframe {...props} />,
  };
};

const Article = ({ article }) => {
  const mdContent = article?.markdownContent;
  const subHeadings = extractH2Headings(mdContent).map((text) => ({
    text,
    link: generateSlug(text),
  }));

  return (
    <Section className="p-0 flex flex-col md:flex-row justify-between items-start w-full gap-x-14">
      <div className="order-2 md:order-1 w-full md:w-[75%]">
        <h1 className="hidden md:block text-2xl md:text-3xl leading-tight font-semibold">
          {article?.title}
        </h1>
        <div className="flex-1 space-y-12 overflow-x-hidden mb-12">
          <Markdown components={markdownComponents()}>{mdContent}</Markdown>
        </div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-[25%] md:sticky top-2  mb-5">
        <h1 className="block md:hidden text-2xl md:text-3xl leading-tight font-semibold mb-4">
          {article?.title}
        </h1>
        <div className="p-5 bg-indigo-50 border-gray-300 rounded-xl">
          <h3 className="mb-4 text-xl font-semibold">In this article</h3>
          <ul className="mb-6 text-base space-y-2 text-indigo-400">
            {subHeadings.map(({ text, link }) => (
              <li key={text} className="text-base hover:underline">
                <Link href={`#${link}`}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Article;
