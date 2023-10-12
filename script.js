const navbar = document.getElementById('navbar');
const navbarItems = document.querySelectorAll('#navbar li');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#27374D'; 
    } else {
        navbar.style.backgroundColor = 'transparent'; 
    }
});

navbarItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.borderBottom = '3px solid #526D82';
    });

    item.addEventListener('mouseleave', () => {
        item.style.borderBottom = '2px solid transparent';
    });
});