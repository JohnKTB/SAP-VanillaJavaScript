const DarkMode = () => {
  const $input = document.createElement("input");
  $input.setAttribute("type", "checkbox");
  $input.id = "btn-DarkMode";
  const $label = document.createElement("label");
  $label.classList.add("label");
  $label.id = "DarkMode"
  $label.setAttribute("for", "btn-DarkMode");
  $label.innerHTML = `<i class="far fa-moon"></i>`;
  return [$input, $label];
};

export { DarkMode };
