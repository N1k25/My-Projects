const filterActiveElement = document.getElementById('filter-active');
const filterCompletedElement = document.getElementById('filter-completed');
const activeCards = document.querySelectorAll('.active');
const completedCards = document.querySelectorAll('.completed');

filterActiveElement.addEventListener('change', function() {
  if (this.checked) {
    activeCards.forEach(card => card.style.display = 'block');
    completedCards.forEach(card => card.style.display = 'none');
  };
});

filterCompletedElement.addEventListener('change', function() {
  if (this.checked) {
    activeCards.forEach(card => card.style.display = 'none');
    completedCards.forEach(card => card.style.display = 'block');
  };
});
