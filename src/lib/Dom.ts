interface DomBuilder<T extends HTMLElement> {
  appendChildren: (...elements: HTMLElement[]) => void;
  build: () => T;
}

class BaseDom implements DomBuilder<HTMLElement> {
  dom: HTMLElement;
  appendChildren(...elements: HTMLElement[]) {
    elements.forEach(element => this.dom.appendChild(element));
  }
  build() {
    return this.dom;
  }
}

export class P extends BaseDom {
  constructor(className = "", text = "") {
    super();
    this.dom = document.createElement("p");
    if (className !== "") {
      this.dom.classList.add(className);
    }
    this.dom.innerText = text;
  }
}

export class Div extends BaseDom {
  constructor(className = "") {
    super();
    this.dom = document.createElement("div");
    if (className !== "") {
      this.dom.classList.add(className);
    }
  }
}

export class Img extends BaseDom {
  dom: HTMLImageElement;
  constructor(className = "", src: string) {
    super();
    this.dom = document.createElement("img");
    if (className !== "") {
      this.dom.classList.add(className);
    }
    this.dom.src = src;
  }
}

export class Anchor extends BaseDom {
  dom: HTMLAnchorElement;
  constructor(href: string, className = "") {
    super();
    this.dom = document.createElement("a");
    if (className !== "") {
      this.dom.classList.add(className);
    }
    this.dom.target = "_brank";
    this.dom.rel = "noopenr";
    this.dom.href = href;
    Object.assign(this.dom.style, {
      "text-decoration": "none"
    });
  }
}
