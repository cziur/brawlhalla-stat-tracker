(function () {
  document
    .getElementById("getStatButton")
    .addEventListener("click", function () {
      const steamName = document.getElementById("inputSteamName");
      console.log(steamName);
      const url = `https://brawlhalla.fly.dev/v1/ranked/steamurl?steam_url=https://steamcommunity.com/id/${steamName}/`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
})();
