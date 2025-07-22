import Breadcrumbs from "@/components/common/breadcrumbs";
import Container from "@/components/common/container";
import AppLayout from "@/components/common/layout";
import Section from "@/components/common/section";
import Link from "next/link";
import { GetArticles } from "@/actions/article.action";
import Icons from "@/components/common/icons";
import AlertBox from "@/components/common/alert";

// export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Help Desk | Aletheia",
  description: "Help Desk | Aletheia",
};

const ArticlesPage = async () => {
  // const data = await GetArticles();

  // if(!data?.data?.length){
  //   return <AlertBox message={"Sorry! That page doesn't seem to exist."}/>
  // }
  return <AlertBox message={"Sorry! That page doesn't seem to exist."} />;
};

export default ArticlesPage;
