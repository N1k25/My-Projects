const findFieldEl = document.querySelector('.find__field');
const findButtonnEl = document.querySelector('.find__btn');

findButtonnEl.addEventListener('click', () => {
    if (findFieldEl.value === '') {
        return;
    }
    findFieldEl.value = '';
});