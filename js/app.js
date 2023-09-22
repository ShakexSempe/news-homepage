const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('nav')
const asideLinks = document.querySelectorAll('[data-aside]');
console.log(asideLinks);


toggle.addEventListener("click", () => {
    sidebar.classList.toggle('active');
    toggle.classList.toggle('active');
    container.classList.toggle('active');
});

asideLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        toggle.classList.toggle('active');
        container.classList.remove('active');
    })
})

