import Card from "./components/Card/Card.js";
import HtmlComponent from "./components/HtmlComponents/HtmlComponent.js";

new HtmlComponent(document.body, "div", "app container");
const mainDiv = document.querySelector(".app.container");

new HtmlComponent(mainDiv, "ul", "characters-list row list-unstyled");
const cardList = document.querySelector(".characters-list.row.list-unstyled");

new Card(cardList);
