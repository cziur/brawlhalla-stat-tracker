(function () {
  const statsButton = document.getElementById("getStatButton");
  statsButton.addEventListener("click", function () {
    const steamNameInput = document.getElementById("inputSteamName");
    const url = `https://brawlhalla.fly.dev/v1/ranked/steamurl?steam_url=https://steamcommunity.com/id/${steamNameInput.value}/`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(data);
        document.querySelector("h2").innerHTML = res.data.rating;
        document.querySelector("h3").innerHTML = res.data.peak_rating;
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  });
})();
