chrome.webNavigation.onCreatedNavigationTarget.addListener((details) => {
  chrome.storage.local.get("enabled", (data) => {
    if (data.enabled !== false) {
      chrome.tabs.remove(details.tabId);
      console.log("Scheda pubblicitaria bloccata:", details.url);
    }
  });
});
