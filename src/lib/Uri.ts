const URL_REGEXP =
  "^(http[s]?:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?";
const cybozu = "cybozu";

export class Uri {
  private url: string;

  constructor(url: string) {
    if (!this.isUrlFormat(url)) {
      throw new Error("invalid url exception");
    }
    this.url = url;
  }

  getUrl() {
    return this.url;
  }

  private isUrlFormat(url: string) {
    return new RegExp(URL_REGEXP).test(url);
  }

  isExcludedDomains() {
    const { origin } = window.location;
    if (this.url.includes(origin)) {
      return true;
    }
    if (this.url.includes(cybozu)) {
      return true;
    }
    return false;
  }
}
