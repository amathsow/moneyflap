let cardsSelection = document.querySelectorAll(".Cards__img"),
  cardShowing = document.querySelector("#cardShowing");

Array.from(cardsSelection).forEach((card) => {
  setTimeout(() => {
    card.addEventListener("click", (e) => {
      let srcCardClick = e.target.getAttribute("src");
      cardShowing.setAttribute("src", srcCardClick);
    });
  }, 1);
});
