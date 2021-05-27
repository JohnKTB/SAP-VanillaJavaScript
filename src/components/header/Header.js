import { Title } from "./Title.js";
import { DarkMode } from "./BtnDarkMode.js";

const Header = () => {
  const $header = document.createElement("header");
  $header.classList.add("header");
  DarkMode().forEach((element, i) => {
    $header.appendChild(DarkMode()[i]);
  });
  $header.appendChild(Title());

  return $header;
};

export { Header }
