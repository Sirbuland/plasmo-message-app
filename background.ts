import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*", "https://docs.plasmo.com/*"]
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    chrome.storage.local.get(["contentScrapped"], (result) => {
      console.log(
        "Data retrieved from storage:",
        result.contentScrapped || result
      )
      chrome.runtime.sendMessage({
        dataFromBackground: result.contentScrapped || result
      })
    })
  }
})
