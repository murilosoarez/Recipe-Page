window.addEventListener('DOMContentLoaded', () => {

    var html = document.documentElement
    var lightButton = document.getElementById('light-toggle');
    
    var clickedButton = 0;
    html.className = 'light'

    lightButton.addEventListener('click', () => {
        
        if (clickedButton == 0 && clickedButton < 1) {
            html.className = 'dark';
            clickedButton += 1     
        }
        else {
            html.className = 'light';
            clickedButton -= 1;
        }
    })
})