chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message) {
    case "openOptionPage":
      chrome.runtime.openOptionsPage();
      return true;
    default:
      return false;
  }
});
