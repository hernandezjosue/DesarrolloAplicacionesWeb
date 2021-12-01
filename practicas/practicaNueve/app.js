const btn_add = document.querySelector("#btn-add-item");
const btn_mod = document.querySelector("#btn-mod-item");
//const div_item = document.querySelector('#component')//
const list_wrapper = document.querySelector("#wrapper-component");
const list_wrapper_card = document.querySelector("#wrapper-component-content");

const myTitle = document.getElementById("input-title-card");
const myParagraph = document.getElementById("input-paragraph-card");
const ids = document.getElementById("input-id-card");
const title = document.getElementById("titleCard");
const urls = document.getElementById("input-url");
const text = document.getElementById("paragraphCard");

let arrayItem = []; // agregamos aqui todos los elementos
let cont = 1;
class Item {
  constructor(titleCard, id, paragraph, url) {
    this.titleCard = titleCard;
    this.id = id;
    this.paragraph = paragraph;
    this.url = url;
  }
}

btn_add.addEventListener("click", createEmail);
btn_mod.addEventListener("click", ModEmail);

function createEmail() {
  const ramdomNumber = cont;
  const titleCards = myTitle.value;
  const paragraphCard = myParagraph.value;
  const urlCard = urls.value;
  const newEmail = new Item(titleCards, ramdomNumber, paragraphCard, urlCard);
  arrayItem.push(newEmail);
  renderItems();
  cont++;
}

function renderItems() {
  list_wrapper_card.innerHTML = "";
  const reverse = [];
  const copyArrayItem = [...arrayItem]; //spread operator

  for (let index = 0; index < arrayItem.length; index++) {
    const item = copyArrayItem.pop();
    reverse.push(item);
  }
  for (let index = 0; index < arrayItem.length; index++) {
    const itemNew = document.createElement("div");
    itemNew.classList.add("content");
    itemNew.textContent = reverse[index].titleCard;
    itemNew.id = reverse[index].id;
    const urlDiv = document.createElement("img");
    urlDiv.classList.add("content-img");
    urlDiv.src = reverse[index].url;
    itemNew.appendChild(urlDiv);
    const paragraphDiv = document.createElement("div");
    paragraphDiv.classList.add("paragraph");
    paragraphDiv.textContent = reverse[index].paragraph;
    itemNew.appendChild(paragraphDiv);

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn-read");
    buttonDelete.textContent = "eliminar";
    itemNew.appendChild(buttonDelete);

    list_wrapper_card.appendChild(itemNew);
  }
  ReadEmail();
}

function ModEmail() {
  const item = arrayItem;
  item.forEach((it, i, items) => {
    if (items[i].id == ids.value) {
      console.log("es igual a uno");
      const newEmail = new Item(
        titleCards = myTitle.value,
        ramdomNumber =ids.value,
        paragraphCard = myParagraph.value,
        urlCard = urls.vlue
      );
      item.pop()
      items.push(newEmail);
      renderItems();
    } else {
      console.log("no es gual");
    }
  });
  const getArray = (numbers, i, array) => {
    // console.log(array[i].id);
    // if (array[i].id == ids.value) {
    // ramdomNumber = ids.value;
    // titleCards = myTitle.value;
    // paragraphCard = myParagraph.value;
    //  urlCard = urls.value;
    //  newEmail = new Item(titleCards, ramdomNumber, paragraphCard,urlCard);
    // arrayItem.pop();
    // arrayItem.push(newEmail);
    // renderItems();
    // } else {
    // console.log("error");
    // renderItems();
    // }
  };

  item.forEach(getArray);
}

function ReadEmail() {
  const button_read = document.querySelectorAll(".btn-read");

  button_read.forEach(function (btn) {
    btn.addEventListener("click", deleteEmail);
  });
}

function deleteEmail(event) {
  const pparent = event.target.parentNode; //elimina de html
  let newArray = arrayItem.filter((item) => {
    return item.id != pparent.id;
  });

  arrayItem = newArray;
  renderItems();
}
