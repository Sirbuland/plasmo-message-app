export {}

chrome.storage.local.get(['contentScrapped'], (result) => {
  console.log('Data retrieved from storage:', result.contentScrapped);
  chrome.runtime.sendMessage({ dataFromBackground: result.contentScrapped });
});
