document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const form = document.querySelector('#new-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteForm = document.querySelector('#delete-form');
    deleteForm.addEventListener('submit', handleFormDelete);
});

const handleFormSubmit = function(event) {
    event.preventDefault();

    const animal = event.target.animal.value;
    const species = event.target.species.value;
    const continent = event.target.continent.value;
    const conservationStatus = event.target.conservation-status.value;

    const animalList = document.querySelector('#animal-list');
    const newItem = document.createElement('li');
    newItem.classList.add('animal-item');
    newItem.textContent = `Animal: ${animal} | Species: ${species} | Continent: ${continent} | Conservation Status: ${conservationStatus}`

    animalList.appendChild(newItem);

    event.target.reset();
};

const handleFormDelete = function() {
    const deletedList = document.querySelector('#animal-list');
    deletedList.textContent = '';
};