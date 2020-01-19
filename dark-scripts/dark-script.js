function headerDark() {
    const backElements = document.querySelectorAll('.back');
    backElements.forEach(function(elem) {
        elem.style.backgroundColor = '#2C2D2F';
    });

    const searchInput = document.querySelector('.text.ts_input');
    searchInput.style.backgroundColor = '#52574D';
    searchInput.style.color = '#ffffff';
    

    let numeric = document.querySelector('.left_count');
    numeric.textContent = 1 + numeric.textContent;
}
headerDark();