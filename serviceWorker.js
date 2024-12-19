chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.webRequest.onBeforeRequest.addListener(
  async function (details) {
    console.log("Request captured:", details);
  },
  { urls: ["<all_urls>"] },
  ["requestBody"]
);
