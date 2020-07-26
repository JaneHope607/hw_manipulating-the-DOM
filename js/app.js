document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const submitForm = document.querySelector('#animal-list');
    submitForm.addEventListener('submit', handleFormSubmit);

    const deleteForm = document.querySelector('#delete-form');
    deleteForm.addEventListener('submit', handleFormDelete);
});
