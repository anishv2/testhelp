
import Section from "../common/section";
import { GetFAQs } from "@/actions/faq.action";
import Container from "../common/container";
import Accordion from "./accordian";

const FAQ = async () => {
  const faqData = await GetFAQs();

  return (
    <Section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <Container className="p-4 sm:px-8 sm:py-14">
        <div className="flex flex-col">
            <strong className="text-base sm:text-lg text-center text-gray-500 bg-gray-50 border border-gray-200 rounded-full w-[100px] mx-auto mb-4">FAQ</strong>
          <h2 className="text-2xl md:text-[50px] text-center font-semibold text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-lg text-center text-gray-500 mb-12">Need help with something? Here are our most frequently asked questions.</p>
          <div className="flex flex-col gap-4 lg:min-w-4xl sm:max-w-3xl mx-auto">
            {faqData?.data?.map(({ question, answer }, ind) => (
              <Accordion key={ind} title={question} content={answer} isLast={faqData?.data?.length-1 === ind}/>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
