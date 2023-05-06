const fixedElement = document.querySelector('.fixed-element');

fixedElement.addEventListener('mouseover', () => {
    fixedElement.style.transform = 'scale(1.2)';
});

fixedElement.addEventListener('mouseout', () => {
    fixedElement.style.transform = 'scale(1)';
});

const sandwichIcon = document.querySelector('.sandwich-icon');
const nav = document.querySelector('.header__nav');

sandwichIcon.addEventListener('click', function() {
    nav.classList.toggle('open');
    sandwichIcon.classList.toggle('open');
});
