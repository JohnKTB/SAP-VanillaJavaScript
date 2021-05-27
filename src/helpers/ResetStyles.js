const ResetStyles = () => {
  setTimeout(() => {
    const $Header = document.getElementsByTagName("header")[0];
    const $Cards = document.getElementsByClassName("card");
    const $InputSearch = document.querySelector(".content_inputSeatch");
    $Header.style.color = "#000";
    if ($Cards.length != 0) $InputSearch.style.color = "#000";
  }, 200);
};

export { ResetStyles };
