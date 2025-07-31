"use server";
import AppConfig from "@/config/app.config";

export async function GetArticles(slug) {
  try {
    return (
      await fetch(
        `${AppConfig.baseURL}/api/articles?filters[category][slug][$eq]=${slug}&populate=*`,
        {
          headers: {
            "Authorization": `Bearer ${AppConfig.cmsToken}`,
          },
        }
      )
    ).json();
  } catch (error) {
    console.log("Error fetching articles:", error);
    throw new Error(error);
  }
}

export async function GetArticle(slug) {
  try {
    return (
      await fetch(
        `${AppConfig.baseURL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
        {
          headers: {
            "Authorization": `Bearer ${AppConfig.cmsToken}`,
          },
        }
      )
    ).json();
  } catch (error) {
    console.error("Error fetching article:", error);
    throw new Error(error);
  }
}
