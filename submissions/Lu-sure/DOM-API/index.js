const sideButton = document.getElementById('side-button');
const side = document.getElementById('side');

sideButton.addEventListener('click', function () {   
    side.classList.add('open');
    // console.log('The button was clicked!');
});

const body = document.querySelector('body');

document.addEventListener('click', function (event) {
    if(!side.contains(event.target) && !sideButton.contains(event.target)){
        side.classList.remove('open');
    }
});

const mainSheldon = document.getElementById('main-sheldon');
const mainLeonard = document.getElementById('main-leonard');
const mainRaj = document.getElementById('main-raj');
const mainHoward = document.getElementById('main-howard');

const sideSheldon = document.getElementById('side-sheldon');
const sideLeonard = document.getElementById('side-leonard');
const sideRaj = document.getElementById('side-raj');
const sideHoward = document.getElementById('side-howard');

sideLeonard.addEventListener('click', function () {
    mainSheldon.classList.add('hide-hero');
    mainRaj.classList.add('hide-hero');
    mainHoward.classList.add('hide-hero');
    mainLeonard.classList.remove('hide-hero');
    side.classList.remove('open');
});


sideHoward.addEventListener('click', function () {
    mainSheldon.classList.add('hide-hero');
    mainRaj.classList.add('hide-hero');
    mainHoward.classList.remove('hide-hero');
    mainLeonard.classList.add('hide-hero');
    side.classList.remove('open');
});

sideRaj.addEventListener('click', function () {
    mainSheldon.classList.add('hide-hero');
    mainRaj.classList.remove('hide-hero');
    mainHoward.classList.add('hide-hero');
    mainLeonard.classList.add('hide-hero');
    side.classList.remove('open');
});

sideSheldon.addEventListener('click', function () {
    mainSheldon.classList.remove('hide-hero');
    mainRaj.classList.add('hide-hero');
    mainHoward.classList.add('hide-hero');
    mainLeonard.classList.add('hide-hero');
    side.classList.remove('open');
});