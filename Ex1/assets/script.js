const fetchButton = document.querySelector(".fetch_button");

fetchButton.addEventListener("click", () => {
  fetch("assets/array.json")
    .then((reponse) => reponse.json())
    .then((text) => {
      const ul = document.createElement("ul");
      document.body.appendChild(ul);
      for (let elem of text) {
        const li = document.createElement("li");
        li.textContent = elem.name;
        ul.appendChild(li);
      }
    });
});
