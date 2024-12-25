(function () {
  const statsButton = document.getElementById("getStatButton");
  statsButton.addEventListener("click", function () {
    const steamNameInput = document.getElementById("inputSteamName");
    const url = `https://brawlhalla.fly.dev/v1/ranked/steamurl?steam_url=https://steamcommunity.com/id/${steamNameInput.value}/`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        document.querySelector("h2").innerHTML = res.data.rating;
        document.querySelector("h4").innerHTML = res.data.peak_rating;
        document.querySelector('.tier').innerHTML = res.data.tier;
        document.querySelector('.wins').innerHTML = `Wins ${res.data.wins}`;
        const wlRatio = (res.data.games / res.data.wins).toFixed(2)
        document.querySelector('.wlRatio').innerHTML = `W/L Ratio ${wlRatio}`
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  });
})();
