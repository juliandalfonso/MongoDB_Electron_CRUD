const taskForm = document.querySelector('#taskForm')
const taskName = document.querySelector('#taskName')
const taskDescription = document.querySelector('#taskDescription')


taskForm.addEventListener('submit', e=>
{
    console.log('enviando')
    e.preventDefault();
});