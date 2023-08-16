const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

const author = document.querySelector('.footer_text-author');

const wordTeamInDifferentLanguages = [
    '© Created by DZ',
];

author.innerText = getRandom(wordTeamInDifferentLanguages);

const colors = [
    'red',
    'green',
    'blue',
    'coral',
    'pink',
    'dark',
    'orange',
    'crimson',
    'maroon',
    'tomato',
    'gold',
    'purple',
];

author.style.color = getRandom(colors);