"use server";
import AppConfig from "@/config/app.config";

export async function GetCategories() {
  try {
    return (
      await fetch(
        `${AppConfig.baseURL}/api/categories?sort[0]=createdAt:asc&populate=*`,
        {
          headers: {
            "Authorization": `Bearer ${AppConfig.cmsToken}`,
          },
        }
      )
    ).json();
  } catch (error) {
    console.log("Error fetching categories:", error);
    throw new Error(error);
  }
}
