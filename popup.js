const statusText = document.getElementById("status");
const toggleBtn = document.getElementById("toggle");

chrome.storage.local.get("enabled", (data) => {
  const enabled = data.enabled !== false;
  updateUI(enabled);
});

toggleBtn.addEventListener("click", () => {
  chrome.storage.local.get("enabled", (data) => {
    const newState = data.enabled === false;
    chrome.storage.local.set({ enabled: newState }, () => {
      updateUI(newState);
    });
  });
});

function updateUI(enabled) {
  statusText.textContent = "Stato: " + (enabled ? "Attivo" : "Disattivo");
  toggleBtn.textContent = enabled ? "Disattiva blocco" : "Attiva blocco";
}
