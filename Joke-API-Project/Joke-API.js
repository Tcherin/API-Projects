const btn = document.querySelector(".joke-btn");
const joke = document.querySelector(".joke-content");

btn.addEventListener("click", getJoke);

getJoke();

const getJoke = async () => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const data = await response.json();
  return data;
};

getJoke().then((data) => {
  console.log(data);
});
