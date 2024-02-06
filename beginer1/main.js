const synth = window.speechSynthesis;

document.querySelector("#yell").addEventListener("click", run);

function run() {
  const fName = document.querySelector("#firstName").value;
  const yellText = `${fName}`;
  document.querySelector("#placeToYell").innerText = yellText;
  let yellThis = new SpeechSynthesisUtterance(yellText);
  synth.speak(yellThis);
}

//===================================================
// API
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     document.querySelector("img").src = data.message;
//   })
//   .catch((err) => {
//     console.log(`error ${err}`);
//   });
//================================================
document.querySelector(".btn").addEventListener("click", getDrink);

function getDrink() {
  let drink = document.querySelector("input").value;
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks);
      document.querySelector("img").src = data.drinks[5].strDrinkThumb;
      document.querySelector("h2").innerText = data.drinks[5].strDrink;
      document.querySelector("h3").innerText = data.drinks[5].strInstructions;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
