import * as dayjs from "dayjs";
import { CardModel, SavedCardData } from "./types/Models";
//import "dayjs/locale/ja";

export const saveCardData = (cardData: CardModel) => {
  const now = dayjs();
  const d = {
    ...cardData,
    expired: now.add(30, "day").valueOf()
  };
  const {
    eyeCatch: { url }
  } = cardData;
  if (url) {
    chrome.storage.local.set({
      [url]: d
    });
  }
};

export const clearExpired = () => {
  chrome.storage.local.get(null, (data: { [key: string]: SavedCardData }) => {
    for (const [key, value] of Object.entries(data)) {
      const expiredday = dayjs(value.expired);
      if (dayjs().isAfter(expiredday)) {
        chrome.storage.local.remove(key);
      }
    }
  });
};
