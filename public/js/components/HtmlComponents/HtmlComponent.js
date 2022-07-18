class HtmlComponent {
  element;

  constructor(parent, tagName, className) {
    this.element = document.createElement(tagName);
    this.element.className = className;

    parent.appendChild(this.element);
  }
}

export default HtmlComponent;
