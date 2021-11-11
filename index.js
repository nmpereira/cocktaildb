const getFetch = () => {
  // function getFetch() {
  const choice = document.querySelector("input").value;
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + choice;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const length = data.drinks.length;
      const min = 0;
      const rand = Math.floor(Math.random() * (length - min + 1) + min);

      document.querySelector("#drinkName").innerText =
        data.drinks[rand].strDrink;
      document.querySelector("#drinkImg").src = data.drinks[rand].strDrinkThumb;
      document.querySelector("#drinkInstructions").innerText =
        data.drinks[rand].strInstructions;

      const res = Object.keys(data.drinks[rand])
        .filter((x) => x.startsWith("strIngredient"))
        .map((e) => data.drinks[rand][e])
        .filter((x) => x);

      // console.log("data.drinks[rand]", res);
      document.querySelector("p").innerText = res;

      console.log("data", data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

document.querySelector("#drinkSearchText").addEventListener("keyup", getFetch);
document
  .querySelector("#drinkSearchButton")
  .addEventListener("click", getFetch);
