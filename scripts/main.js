document.getElementById("getStatButton").addEventListener("click", function () {
  let url = `https://brawlhalla.fly.dev/v1/ranked/steamurl?steam_url=https://steamcommunity.com/id/${steamName}/`;
  let steamName = document.querySelector("input").value;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});
