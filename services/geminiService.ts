import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateMarketingCopy = async (productName: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Erro: API Key não configurada.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Write a short, catchy, and viral TikTok Shop product title (max 20 words) in Portuguese (Brazil) for a product named: "${productName}". Use emojis.`,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating copy:", error);
    return "Não foi possível gerar o texto.";
  }
};
