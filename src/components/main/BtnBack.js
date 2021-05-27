const BtnBack = ()=>{
    const $anchorBack = document.createElement('a');
    const $btnBack = document.createElement('button');
    const $i = document.createElement('i');
    $i.classList.add('fas', 'fa-reply');
    $btnBack.classList.add('BtnBack');
    $btnBack.appendChild($i);
    $btnBack.insertAdjacentText('beforeend', 'Back');
    $anchorBack.id = 'BtnBack';
    $anchorBack.setAttribute('href', '#/');
    $anchorBack.appendChild($btnBack);
    return $anchorBack;
}

export { BtnBack }
