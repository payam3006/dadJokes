const q = console.log;

async function newJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "text/plain",
    },
  });
  let data = await response.text();
  document.getElementById("textHere").innerText = data;
}

newJoke();
