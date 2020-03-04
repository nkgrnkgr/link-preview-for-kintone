import { Uri } from "./Uri";
import { Api } from "./Api";
import childListObserver from "./ChildListObserver";
import { buildCard } from "./DomBuilder";
import { saveCardData } from "./CardDataRepository";
import { EyeCatch, SavedCardData } from "./types/Models";

const appendLinkCard = (anchor: HTMLAnchorElement, eyeCatch: EyeCatch) => {
  anchor.parentElement.appendChild(buildCard(eyeCatch));
};

export default async (baseUri: Uri) => {
  childListObserver(".ocean-ui-comments-commentbase-text", contents => {
    for (const content of contents) {
      const anchors = content.querySelectorAll("a");
      anchors.forEach((anchor: HTMLAnchorElement) => {
        if (anchor.classList.length === 0) {
          const uri = new Uri(anchor.href);
          if (uri.isExcludedDomains()) {
            return;
          }

          chrome.storage.local.get(uri.getUrl(), obj => {
            const data = obj[uri.getUrl()] as SavedCardData;
            if (!data) {
              (async () => {
                const res = await new Api(baseUri).fetchData(uri);
                if (res.status === 200) {
                  appendLinkCard(anchor, res.eyeCatch);
                }
                saveCardData(res);
              })();
              return;
            }
            const { eyeCatch } = data;
            appendLinkCard(anchor, eyeCatch);
          });
        }
      });
    }
  });
};
