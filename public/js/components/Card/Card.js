import Button from "../button/Button.js";
import HtmlComponent from "../HtmlComponents/HtmlComponent.js";

class Card extends HtmlComponent {
  constructor(parent, name, family, image, age) {
    super(parent, "li", "character col");
    this.name = name;
    this.family = family;
    this.image = image;
    this.age = age;

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
    listElementState.textContent = "Estado: ";
    infoList.appendChild(listElementState);

    const listElementThumbsDown = document.createElement("i");
    listElementThumbsDown.className = "fas fa-thumbs-down";
    listElementState.appendChild(listElementThumbsDown);

    const listElementThumbsUp = document.createElement("i");
    listElementThumbsUp.className = "fas fa-thumbs-up";
    listElementState.appendChild(listElementThumbsUp);

    const cardOverlay = document.createElement("div");
    cardOverlay.className = "character__overlay";
    divTitle.appendChild(cardOverlay);

    const cardOverlayList = document.createElement("ul");
    cardOverlayList.className = "list-unstyled";
    cardOverlay.appendChild(cardOverlayList);

    const listElementYears = document.createElement("li");
    listElementYears.textContent = `Años de reinado:`;
    cardOverlayList.appendChild(listElementYears);

    const listElementWeapon = document.createElement("li");
    listElementWeapon.textContent = "Arma ";
    cardOverlayList.appendChild(listElementWeapon);

    const listElementSkill = document.createElement("li");
    listElementSkill.textContent = "Destreza ";
    cardOverlayList.appendChild(listElementSkill);

    new Button(cardOverlay, "Habla");
    new Button(cardOverlay, "Muere");
  }
}

export default Card;
