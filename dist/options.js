"use strict";

const SERVER_URL = "serverUrl";

chrome.storage.local.get(SERVER_URL, value => {
  const url = value[SERVER_URL];
  console.log(url);
  if (url) {
    document.getElementById(SERVER_URL).value = url;
  }
});

document.getElementById("save").addEventListener("click", () => {
  const inputValue = document.getElementById(SERVER_URL).value;
  chrome.storage.local.set({ serverUrl: inputValue });
  flickerMessage("success");
});

const flickerMessage = messageId => {
  const message = document.getElementById(messageId);
  message.style.display = "inline";
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
  const closeGroup = document.getElementById("closeGroup");
  closeGroup.style.display = "block";
};

document.getElementById("close").addEventListener("click", () => {
  window.close();
});
