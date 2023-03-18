const categoriesEl = document.querySelector('#categories');
const allItermInCategories = categoriesEl.querySelectorAll('.item');

console.log('Numbers of categories:', allItermInCategories.length);

const categoryEl = document.querySelectorAll('#categories .item');

categoryEl.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.childElementCount}`);
    
})