const main = document.querySelector('main');
const endPage = document.getElementById('endPage');
let currentPage = 1;

const openButton = document.getElementById("open-Button");
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-Button');

openButton.addEventListener('click', function() {
    overlay.classList.add('active');
});

closeButton.addEventListener('click', function() {
    overlay.classList.remove('active'); 
});


