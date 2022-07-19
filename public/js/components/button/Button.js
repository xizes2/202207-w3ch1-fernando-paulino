import HtmlComponent from "../HtmlComponents/HtmlComponent.js";

class Button extends HtmlComponent {
  constructor(parent, text) {
    super(parent, "button", "character__action btn");
    this.text = text;

    this.render();
  }

  render() {
    this.element.textContent = this.text;
  }
}

export default Button;
