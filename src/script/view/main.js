import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

let getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('#mealList');

  const onButtonSearchClicked = () => {
    DataSource.searchMeal(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
  };

  const renderResult = results => {
    mealListElement.innerHTML = '';
    results.forEach ( meals => {
      const {idMeal, strMeal, strInstructions, strYoutube, strIngredient1,
        strIngredient2, strIngredient3, strIngredient4, strIngredient5,
        strIngredient6, strIngredient7} = meals;

      const mealElement = document.createElement('div');
      mealElement.setAttribute('class', 'meal');

      mealElement.innerHTML = `
      <div class="meal-info">
        <p class="idmeal">#${idMeal}</p>
        <h2>${strMeal}</h2><br>
        <h5>Ingredients</h5>
        <ul class="ingredients">
          <li>${strIngredient1}</li>
          <li>${strIngredient2}</li>
          <li>${strIngredient3}</li>
          <li>${strIngredient4}</li>
          <li>${strIngredient5}</li>
          <li>${strIngredient6}</li>
          <li>${strIngredient7}</li>
        </ul>
        <h5>Instruction</h5>
        <p class="instruction">${strInstructions}</p>
        <a href="${strYoutube}" target="_blank">Youtube Link</p>
      </div>
    `;

      mealListElement.appendChild(mealElement);
    });
  };

  const fallbackResult = message => {
    const randomNumber = getRandomNumber(1,3);

    if(randomNumber == 1){
      mealListElement.innerHTML = '';
      mealListElement.innerHTML += `<p class="notfound">We have searched deep and wide, but "${message}" is still not in sight. Sorry!</p>`;
    }

    else if(randomNumber == 2){
      mealListElement.innerHTML = '';
      mealListElement.innerHTML += `<p class="notfound">It seems like we don't found "${message}"... dont't worry, we still have other meals!</p>`;
    }

    else{
    mealListElement.innerHTML = '';
    mealListElement.innerHTML += `<p class="notfound">Whoops, we don't found "${message}" in our database... or you spelled that wrong. Keep searching!</p>`;
    }
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;