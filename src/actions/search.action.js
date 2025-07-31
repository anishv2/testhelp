
import AppConfig from "@/config/app.config";

export async function GetSearchResults(query) {
  try {
    return (await fetch(`${AppConfig.baseURL}/api/search?query=${query}`, 
      {
        headers: {
          "Authorization": `Bearer ${AppConfig.cmsToken}`,
        },
      }
    )).json();
  } catch (error) {
    console.error("Error while query:", error);
    throw new Error(error);
  }
}
