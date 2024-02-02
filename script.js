document.addEventListener('DOMContentLoaded', () => {

    let root = document.querySelector('html');
    let button = document.querySelector('button');
    button.innerHTML = "<i class='bx bx-sun' ></i>";
    let themeSwap = false;

    button.addEventListener('click', () => {
        if (themeSwap == false) {
            root.className = 'dark';
            button.innerHTML = "<i class='bx bx-moon' ></i>";
            themeSwap = true;
        }
        else {
            root.className = 'light';
            button.innerHTML = "<i class='bx bx-sun' ></i>"
            themeSwap = false;
        }
    })

})
