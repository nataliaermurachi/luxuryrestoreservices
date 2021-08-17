let listItems = document.querySelectorAll('li.navigation__item--mobile');
let modal = document.getElementById('mobile');


listItems.forEach(function(i) {
    i.addEventListener('click', function() {
        document.querySelector('.modal-overlay').style.opacity = 0;
        modal.style.display = "none";
    });
});