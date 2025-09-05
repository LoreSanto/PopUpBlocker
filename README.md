# 🛡️ Popup Blocker Extension for Chrome

A lightweight and effective Chrome extension that blocks unwanted pop-ups and auto-opened tabs — especially those triggered by ads or malicious scripts.

---

## 🚀 What It Does

- Prevents websites from opening new tabs or windows automatically
- Blocks `window.open()` calls and links with `target="_blank"` when triggered without user intent
- Stops navigation events that attempt to spawn new tabs (e.g. ad redirects)
- Allows users to toggle the blocking feature on/off via a clean popup interface

---

## ⚙️ How It Works

- Uses a **content script** to override `window.open()` and intercept suspicious link clicks
- Monitors tab creation events via a **background service worker** and removes unwanted tabs
- Stores the blocking state (`enabled` or `disabled`) using Chrome's local storage
- Offers a modern popup UI to control the extension status

---

## 🧩 How to Install It in Google Chrome (Manual Installation)

> This method is for developers or users who want to install the extension locally without publishing it to the Chrome Web Store.

1. **Download or clone** this repository to your computer:
   ```bash
   git clone https://github.com/your-username/popup-blocker-extension.git

2. **Installation on Google Chrome**:
    
    - Open Google Chrome
    - Navigate to the Extensions page: chrome://extensions/
    - In the top right corner, enable Developer Mode
    - Click the "Load unpacked" button
    - Select the folder where you saved the extension (e.g. popup-blocker-extension)

## Notes

This extension does not block all ads — it focuses specifically on popup behavior

You can customize the code to add a whitelist, popup counter, or notification system

## Author

Created with care by Lorenzo Feel free to fork, improve, or contribute!