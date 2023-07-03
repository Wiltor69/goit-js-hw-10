import { Report } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';
import API from './cat-api';


function createOptions() {
  API.fetchBreeds()
    .then(getBreds)
    .catch(error => {
      if (error) {
        showError();
      }
    });
}


function getBreds(arr) {
    const selectEl = document.querySelector('.breed-select');

    for (let i = 0; i < arr.length; i += 1) { 
       
        const optionsEl = document.createElement('option');

        optionsEl.value = arr[i].id;
        optionsEl.textContent = arr[i].name;

      selectEl.style.backgroundColor = 'lightgrey';
      selectEl.style.Color = 'white';
      
        selectEl.appendChild(optionsEl);
    }

}



function showError() {
  Notiflix.Report.failure(
    'Error',
    'Oops! Something went wrong! Try reloading the page!',
  );
}



export default createOptions;