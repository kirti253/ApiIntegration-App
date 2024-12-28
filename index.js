const jokeContain = document.getElementById("joke");
const btn = document.getElementById("btn-joke");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist";

let getJoke = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      jokeContain.textContent = data.joke;
      jokeContain.classList.add("fade");
    });
};

btn.addEventListener("click", getJoke);

getJoke();
