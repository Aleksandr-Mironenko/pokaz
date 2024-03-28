let pushCallbackLeftContainerChat = document.querySelector(
  ".lower-contacts__call"
);
let pushCallbackHeaderChat = document.querySelector(
  ".second-part__hidden-call"
);
let addCallback = document.querySelector(".callback");
let pushClosedCallback = document.querySelector(".callback__header-button ");
let pushDocumentCallback = document.querySelector(".body-container");
let leftDocumentCallback = document.querySelector(".container-left");

let clickedCallback = false;

function showCallback() {
  //открывает блок Callback и скрывает оставшиеся блоки в зависимости от открытого левого контейнера
  addCallback.classList.remove("callback--hidden");

  if (clicked) {
    leftDocumentCallback.classList.add("opacity-left");
  } else {
    pushDocumentCallback.classList.add("opacity");
  }
  clickedCallback = true;
}

function hideCallback() {
  //скрытие блока Callback и открывает оставшиеся блоки в зависимости от открытого левого контейнера
  addCallback.classList.add("callback--hidden");

  if (clicked) {
    leftDocumentCallback.classList.remove("opacity-left");
  } else {
    pushDocumentCallback.classList.remove("opacity");
  }
  clickedCallback = false;
}

function bodyClickCallback(event) {
  //
  if (
    clickedCallback &&
    !addCallback.contains(event.target) &&
    !pushCallbackHeaderChat.contains(event.target) &&
    !pushCallbackLeftContainerChat.contains(event.target)
  ) {
    hideCallback();
  }
}

pushCallbackHeaderChat.addEventListener("click", showCallback);
pushCallbackLeftContainerChat.addEventListener("click", showCallback);
pushClosedCallback.addEventListener("click", hideCallback);
pushDocumentCallback.addEventListener("click", bodyClickCallback);
leftDocumentCallback.addEventListener("click", bodyClickCallback);
