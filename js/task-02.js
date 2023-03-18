const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const categoryEl = document.querySelector('#ingredients');


// listItemEl.textContent = ingredients[0];

// listItemEl.classList.add('item')

// categoryEl.append(listItemEl);

// console.log(categoryEl.append(listItemEl));

const ingridient = ingredients.map(ingridient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingridient;
  listItem.classList.add('item');
  return listItem;
})

categoryEl.append(...ingridient);