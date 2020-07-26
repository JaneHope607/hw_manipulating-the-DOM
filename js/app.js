document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const submitForm = document.querySelector('#animal-list');
    submitForm.addEventListener('submit', handleFormSubmit);

    const deleteForm = document.querySelector('#delete-form');
    deleteForm.addEventListener('submit', handleFormDelete);
});

const handleFormSubmit = function (event) {
    event.preventDefault();

    const animal = event.target.animal.value;
    const species = event.target.species.value;
    const continent = event.target.continent.value;
    const conservationStatus = event.target.conservation-status.value;

    const newItem = document.createElement('li');
    newItem.textContent = `Animal: ${animal}, Species: ${species}, Continent: ${continent}, Conservation Status: ${conservationStatus}`;
    newItem.classList


const handleFormDelete = function (event) {


};