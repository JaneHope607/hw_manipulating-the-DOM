document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const submitForm = document.querySelector('#animal-list');
    submitForm.addEventListener('submit', handleFormSubmit);

    const deleteForm = document.querySelector('#delete-form');
    deleteForm.addEventListener('submit', handleFormDelete);
});

const handleFormSubmit = function (event) {
    event.preventDefault();

    const animal = document.createElement('li');
    animal.textContent = `${event.target.animal.value}`;
    animal.classList.add('animal-item');

    const species = document.createElement('li');
    species.textContent = `${event.target.species.value}`;
    species.classList.add('species-item');

    const continent = document.createElement('li');
    continent.textContent = `${event.target.continent.value}`;
    continent.classList.add('continent-item');

    const conservationStatus = document.createElement('li');
    conservationStatus.textContent = `${event.target.conservation-status.value}`;
    conservationStatus.classList.add('conservationStatus-item');


};


const handleFormDelete = function (event) {


};