const url = "https://official-joke-api.appspot.com/jokes/programming/random";
const btn = document.querySelector(".joke-btn");
const joke = document.querySelector(".joke-content");

btn.addEventListener("click", () => {
  getJoke();
});

const getJoke = async () => {
  const response = await fetch(url);
  const data = await response.json();
  joke.textContent = data[0].setup + " " + data[0].punchline;
};

getJoke();
