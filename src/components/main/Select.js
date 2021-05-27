const Select = () => {
  const $select = document.createElement('select');
  $select.id = 'SelectContinents'
  $select.classList.add('filter')
  $select.innerHTML = `
              <option selected>Filter by Region</option>
              <option>Africa</option>
              <option>Americas</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
          `;
  return $select;
};

export { Select };
