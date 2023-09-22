const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('nav')
const asideLinks = document.querySelectorAll('[data-aside]');
console.log(asideLinks);



toggle.addEventListener("click", () => {

    if(!sidebar.classList.contains('active')){
        sidebar.classList.add('active');
        toggle.classList.add('active');
        container.classList.add('active');
    } else {
        sidebar.classList.remove('active');
        toggle.classList.remove('active');
        container.classList.remove('active');
    }

    asideLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            toggle.classList.remove('active');
            container.classList.remove('active');
        })
    })
});


