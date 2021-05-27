const InputSearchCountry = () => {
  const $div = document.createElement("div");
  $div.classList.add('content_inputSeatch');
  $div.id = 'content_inputSeatch';
  const $InputIcon = `<i class="fas fa-search"></i>
                      <input id="InputSearchCountry" type="search"
                       placeholder="Search for a country...">`;
  $div.innerHTML = $InputIcon;
  return $div;
};

export { InputSearchCountry };
