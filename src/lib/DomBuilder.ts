import { P, Div, Img, Anchor } from "./Dom";
import { EyeCatch } from "./types/Models";

const extract = text => (text ? text.split("\n")[0] : "");

const className = (isLargeSummary: boolean, className: string) =>
  `${className}${isLargeSummary ? "_large" : ""}`;

export const buildCard = (eyeCatchData: Partial<EyeCatch>) => {
  const isLargeSummary = eyeCatchData.card === "summary_large_image";
  const title = new P("lpfk-title", eyeCatchData.title);

  const description = isLargeSummary
    ? eyeCatchData.description
    : extract(eyeCatchData.description);
  const sub = new P("lpfk-sub", description);

  const div = new Div(className(isLargeSummary, "lpfk-desc"));
  div.appendChildren(title.build(), sub.build());

  const src =
    eyeCatchData.imageUrl ||
    chrome.extension.getURL("images/defaultImageUrl.svg");
  const img = new Img(className(isLargeSummary, "lpfk-img"), src);

  const anchor = new Anchor(eyeCatchData.url, !isLargeSummary && "lpfk-align");
  anchor.appendChildren(img.build(), div.build());

  const card = new Div("lpfk-card");
  card.appendChildren(anchor.build());

  return card.build();
};
