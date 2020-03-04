import { Uri } from "./Uri";
import { CardModel } from "./types/Models";

export class Api {
  private baseUri: Uri;
  constructor(baseUri: Uri) {
    this.baseUri = baseUri;
  }

  async fetchData(url: Uri) {
    const response = await fetch(this.baseUri.getUrl(), {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ url: url.getUrl() })
    });

    return response.json() as Promise<CardModel>;
  }
}
