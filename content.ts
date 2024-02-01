import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*", "https://docs.plasmo.com/*"]
}

window.onload = async () => {
  const paragraphs = document.querySelectorAll('p');

  const paragraphsArray = Array.from(paragraphs);

  try {
    for (const paragraph of paragraphsArray) {
      console.log(`Paragraph: ${paragraph.textContent}`);
    };  
    chrome.storage.local.set({ contentScrapped: paragraphsArray.map(p => p.textContent) });
  } catch(error) {
    console.log('Error while scrapping content', error)
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.dataFromExtension) {
    const receivedData = message.dataFromExtension;
    console.log('Data received from extension:', receivedData);

    alert('This message has been generated from content.')
  }
});
