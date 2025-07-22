import AppConfig from "@/config/app.config";
import axios from "axios";

export async function getArticles() {
  try {
    return await axios({
      url: `${AppConfig.baseURL}/api/articles`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}
