import allOption from './option';
import API from './cat-api';

const selEl = document.querySelector('.breed-select');
const loading = document.querySelector('.loader');
const container = document.querySelector('.cat-info');

selEl.addEventListener('change', onSelect);

allOption();


function onSelect(){
  
  const breedId = selBreeds();

  const isCat = document.querySelector('.img-cat');

  if (isCat) {
    clearContainer();
  }

  loading.style.display = 'block';
  
  API.fetchCatByBreed(breedId)
    .then(makeUp)
    .catch(showError)
    .finally(hideLoading);

  
  container.classList.add('is-active');
    

}

function selBreeds() {

  const selValue = selEl.options[selEl.selectedIndex];
  // const selText = selValue.textContent;

  const selectedId = selValue.value;

  return selectedId;
}

function hideLoading() {
  loading.style.display = 'none';
}

function showError() {
  Notiflix.Report.failure(
    'Error',
    'Oops! Something went wrong! Try reloading the page!',
  );
}



function makeUp(arr) {

    let img = arr.map(link => link.url);
    let name = arr.map(link => link.breeds[0].name);
    let desc = arr.map(link => link.breeds[0].description);
    let temp = arr.map(link => link.breeds[0].temperament);
   
    const markUp = `
    <img class="img-cat" src="${img}" width="440" height="400" loading="lazy">
    <div class="intro">
     <p class="cat-info"><b>Name: </b>${name}</p>
      <p class="cat-info"><b>Temperament: </b>${temp}</p>
       <p class="cat-info"><b>Description: </b>${desc}</p>
        </div>`;

  container.insertAdjacentHTML('beforeend', markUp);
  
}

function clearContainer() {
  const children = Array.from(container.children);

   children.forEach(child => {
      
      container.removeChild(child);
    
  });
}


