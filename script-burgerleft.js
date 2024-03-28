let pushBugrer = document.querySelector(".upper-menu__burger");
let pushBurgerLeft = document.querySelector(".upper-menu-left__burger");
let pushDocument = document.querySelector(".body-container");
let containerLeft = document.querySelector(".container-left");
let clicked = false;

function showContent() {
  // открываем левый блок
  containerLeft.classList.remove("container-left--hidden");
  pushDocument.classList.add("opacity");

  clicked = true;
}

function hideContent() {
  //закрываем левый блок
  containerLeft.classList.add("container-left--hidden");
  pushDocument.classList.remove("opacity");

  clicked = false;
}

function handleButtonClick() {
  if (window.innerWidth < 1440) {
    // при изменении экран меньше указанного размера
    if (!clicked) {
      // и не открытый левый блок
      showContent(); // показываем
    } else {
      // закрытый левый блок
      hideContent(); // скрываем
    }
  }
}

function handleResize() {
  if (window.innerWidth > 1440 && clicked) {
    // если потребуется скрыть при достижении какого-либо размера. не понял нужно или нет
    hideContent();
  }
}

function bodyClick(event) {
  if (
    clicked &&
    !containerLeft.contains(event.target) &&
    !pushBugrer.contains(event.target)
  ) {
    hideContent();
  }
}

pushDocument.addEventListener("click", bodyClick);
pushBugrer.addEventListener("click", handleButtonClick);
pushBurgerLeft.addEventListener("click", hideContent);
window.addEventListener("resize", handleResize); //
