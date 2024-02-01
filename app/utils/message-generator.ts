const sendMessageToContent = (content: string) => {
  const dataToSend = { key: content };

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTabId = tabs[0].id;

    chrome.tabs.sendMessage(activeTabId, { dataFromExtension: dataToSend });
  });
}

export {
  sendMessageToContent
}