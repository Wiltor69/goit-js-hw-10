
const URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_1y7GeHQ4oRzuJBbFo9ysCw0teHF9ZKvDSzfIdqJNAHUHtahjXcbQsdTDDxRg09Ia';


function fetchBreeds() {
    
    return fetch(`${ URL }/breeds`, {
        headers: {
            'x-api-key': API_KEY,
        },
    })
        .then(response => {
            return response.json();
        });
    
}

function fetchCatByBreed(breedId) {
    return fetch(`${URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`) 
    
        .then(response => {
            return response.json();           
        });
}


 export default { fetchBreeds, fetchCatByBreed };