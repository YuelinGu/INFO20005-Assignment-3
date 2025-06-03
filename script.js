const searchIcon = document.getElementById('searchIcon');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const closeSearch = document.getElementById('closeSearch');

if (searchIcon && searchOverlay && searchInput && closeSearch) {
  searchIcon.addEventListener('click', () => {
    searchOverlay.classList.remove('hidden');
    searchInput.focus();
  });

  closeSearch.addEventListener('click', () => {
    searchOverlay.classList.add('hidden');
  });
}