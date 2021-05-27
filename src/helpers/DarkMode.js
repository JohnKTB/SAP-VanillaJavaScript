const $DarkMode = () => {
  setTimeout(() => {
    const $body = document.getElementsByTagName("body")[0];
    const $Header = document.getElementsByTagName("header")[0];
    const $BtnDarkMode = document.getElementById("btn-DarkMode");
    const $Cards = document.getElementsByClassName("card");
    const $CardSelected = document.querySelector(".cardSelected");
    const $a = document.getElementsByTagName("a");
    const $InputSearch = document.querySelector('.content_inputSeatch');
    function BackgroundCards(ColorBackground, ColorText) {
      for (const Card of $Cards) {
        Card.style.background = ColorBackground;
        Card.style.color = ColorText;
        $Header.style.background = ColorBackground;
        $Header.style.color = ColorText;
        $body.style.color = ColorText;
      }
      for (const anchor of $a) {
        anchor.style.color = ColorText;
      }
    }
    function BackgroundCardSelected(ColorBackground, ColorText) {
      $CardSelected.style.color = ColorText;
      $Header.style.background = ColorBackground;
      $Header.style.color = ColorText;
      $body.style.color = ColorText;
    }
    $BtnDarkMode.addEventListener("change", (e) => {
      if (e.target.checked) {
        $body.style.background = "hsl(207, 26%, 17%)";
        if ($Cards.length != 0)
          return BackgroundCards("hsl(207, 26%, 17%)", "hsl(0, 0%, 100%)");
        return BackgroundCardSelected("hsl(207, 26%, 17%)", "hsl(0, 0%, 100%)");
      }
      $body.style.background = "hsl(0, 0%, 98%)";
      if ($Cards.length != 0)
        return BackgroundCards("hsl(0, 0%, 98%)", "hsl(200, 15%, 8%)");
      return BackgroundCardSelected("hsl(0, 0%, 98%)", "hsl(200, 15%, 8%)");
    });
  }, 200);
};

export { $DarkMode };
