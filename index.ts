import { generateText } from "ai";
import { google } from "@ai-sdk/google";

const { text } = await generateText({
  model: google("models/gemini-2.5-flash"),   
  prompt: "What is an AI agent?", 
}); //Uses GOOGLE_GENERATIVE_AI_API_KEY environment variable

console.log(text); 