const parent = document.querySelector('.parent');
parent.addEventListener('click', (evt) => {
    console.log(this)
    console.log(evt.target);
    console.log(evt.currentTarget);
});