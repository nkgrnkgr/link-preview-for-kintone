import mutateThreadComments from "./lib/MutateThreadComments";
import { clearExpired } from "./lib/CardDataRepository";
import { Uri } from "./lib/Uri";

chrome.storage.local.get("serverUrl", obj => {
  const serverUrl = obj["serverUrl"];
  if (!serverUrl) {
    chrome.runtime.sendMessage("openOptionPage");
    return;
  }
  mutateThreadComments(new Uri(serverUrl));
});

clearExpired();
