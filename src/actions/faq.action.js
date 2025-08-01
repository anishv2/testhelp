import AppConfig from "@/config/app.config";

export async function GetFAQs() {
  try {
    return (await fetch(`${AppConfig.baseURL}/api/faqs`, 
      {
        headers: {
          "Authorization": `Bearer ${AppConfig.cmsToken}`,
        },
      }
    )).json();
  } catch (error) {
    console.error("Error fetching faqs:", error);
    throw new Error(error);
  }
}
