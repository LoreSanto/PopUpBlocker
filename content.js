chrome.storage.local.get("enabled", (data) => {
  if (data.enabled !== false) {
    window.open = function() {
      console.warn("Tentativo di apertura bloccato.");
      return null;
    };

    document.addEventListener('click', (e) => {
      if (e.target?.tagName === 'A' && e.target.target === '_blank') {
        e.preventDefault();
        console.warn("Link in nuova scheda bloccato.");
      }
    });
  }
});
