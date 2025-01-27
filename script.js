document.getElementById('close').addEventListener('click', function() {
    document.getElementById('nav-mobile').classList.remove('block');
    document.getElementById('nav-mobile').classList.add('hidden');
});

document.addEventListener('click', function(event) {
    var isClickInside = document.getElementById('nav-mobile').contains(event.target) || document.getElementById('cart').contains(event.target);
    if (!isClickInside) {
        document.getElementById('nav-mobile').classList.remove('block');
        document.getElementById('nav-mobile').classList.add('hidden');
    }
});

document.getElementById('cart').addEventListener('click', function() {
    document.getElementById('nav-mobile').classList.remove('hidden');
    document.getElementById('nav-mobile').classList.add('block');
});