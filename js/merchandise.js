function filterGenre(genre, button){
    let CurrentActive = document.querySelector('.btn-filter-active');
    if(CurrentActive){
        CurrentActive.classList.remove('btn-filter-active');
    }
    if(button){
        button.classList.add('btn-filter-active');
    }
    let cells = document.querySelectorAll('.product-cell');
    cells.forEach(cell => {
        let cellGenre = cell.getAttribute('data');
        if (genre === 'All' || cellGenre === genre) {
            cell.style.display = "table-cell"
        } else {
            cell.style.display = "none";
        }
    });
}