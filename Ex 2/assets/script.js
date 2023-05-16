const sendButton = document.querySelector("#send");
const inputText = document.querySelector("#input_name");
const select = document.querySelector("#select_country");
const fetchName = (name, country) =>
  fetch("https://api.agify.io/?name=" + name + "&country_id=" + country);
// Send the info when the button is clicked and display the response in a div
sendButton.addEventListener("click", () => {
  const name = inputText.value;
  const country = select.value;
  fetchName(name, country)
    .then((response) => response.json())
    .then((json) => {
      const div = document.createElement("div");
      document.body.appendChild(div);

      const nameElement = document.createElement("p");
      nameElement.textContent = "name = " + json.name;
      div.appendChild(nameElement);

      const ageElement = document.createElement("p");
      ageElement.textContent = "age = " + json.age;
      div.appendChild(ageElement);

      const countElement = document.createElement("p");
      countElement.textContent = "count = " + json.count;
      div.appendChild(countElement);

      // Saving elements in local storage
      const savedData = JSON.parse(localStorage.getItem("savedData")) || [];
      savedData.push({
        name: json.name,
        age: json.age,
        count: json.count,
      });
      localStorage.setItem("savedData", JSON.stringify(savedData));
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});
