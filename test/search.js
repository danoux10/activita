const searchBtn = document.getElementById('search-button');
const searchBar = document.getElementById('search');

function toggleSearch(){
    searchBar.classList.toggle('active');
}

searchBtn.addEventListener('click',toggleSearch);

