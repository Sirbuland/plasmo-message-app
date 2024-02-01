import type { PlasmoCSConfig } from "plasmo"
import { getDatabase } from "~src/helpers/indexedDb";

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*", "https://docs.plasmo.com/*"]
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('testing here')
 
});

window.onload = () => {
  const paragraphs = document.querySelectorAll('p');

  const paragraphsArray = Array.from(paragraphs);


  paragraphsArray.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}: ${paragraph.textContent}`);
  });

  const db = getDatabase()

  
}