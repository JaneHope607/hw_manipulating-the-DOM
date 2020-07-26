document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const submitForm = document.querySelector('#animal-list');
    submitForm.addEventListener('submit', handleFormSubmit);

    const deleteForm = document.querySelector('#delete-form');
    deleteForm.addEventListener('submit', handleFormDelete);
});

const handleFormSubmit = function(event) {
    event.preventDefault();

    const animal = this.target.animal.value;
    const species = this.target.species.value;
    const continent = this.target.continent.value;
    const conservationStatus = this.target.conservation-status.value;

    const animalList = document.querySelector('#animal-list');
    const newItem = document.createElement('li');
    newItem.classList.add('animal-item');
    newItem.textContent = `Animal: ${animal} | Species: ${species} | Continent: ${continent} | Conservation Status: ${conservationStatus}`

    animalList.appendChild(newItem);

    this.reset();
};

const handleFormDelete = function() {
    const deletedList = document.querySelector('#animal-list');
    deletedList.textContent = '';
};