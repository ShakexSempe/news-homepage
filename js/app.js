const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('nav')
console.log(sidebar);
toggle.addEventListener("click", () => {
    sidebar.classList.toggle('active');
    toggle.classList.toggle('active');
})