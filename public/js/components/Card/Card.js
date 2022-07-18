import HtmlComponent from "../HtmlComponents/HtmlComponent.js";

class Card extends HtmlComponent {
  constructor(
    parent,
    name = "Daenerys",
    family = "Targarys",
    image = "daenerys.jpg",
    age = "24",
    state = "solteira"
  ) {
    super(parent, "li", "character col");
    this.name = name;
    this.family = family;
    this.image = image;
    this.age = age;
    this.state = state;

    this.render();
  }

  render() {
    const characterDiv = document.createElement("div");
    characterDiv.className = "card character__card";
    this.element.appendChild(characterDiv);

    const img = document.createElement("img");
    img.className = "character__picture card-img-top";
    img.alt = `${this.name} ${this.family}`;
    img.src = `img/${this.image}`;
    characterDiv.appendChild(img);

    const divTitle = document.createElement("div");
    divTitle.className = "card-body";
    characterDiv.appendChild(divTitle);

    const characterTitle = document.createElement("h2");
    characterTitle.className = "character__name card-title h4";
    characterTitle.textContent = `${this.name} ${this.family}`;
    divTitle.appendChild(characterTitle);

    const characterInfo = document.createElement("div");
    characterInfo.className = "character__info";
    divTitle.appendChild(characterInfo);

    const infoList = document.createElement("ul");
    infoList.className = "list-unstyled";
    characterInfo.appendChild(infoList);

    const listElementAge = document.createElement("li");
    listElementAge.textContent = `Edad: ${this.age} años`;
    infoList.appendChild(listElementAge);

    const listElementState = document.createElement("li");
    listElementState.textContent = `Estado: ${this.state}`;
    infoList.appendChild(listElementState);
  }
}

export default Card;
